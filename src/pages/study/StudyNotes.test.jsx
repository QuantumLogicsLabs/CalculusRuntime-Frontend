import {render,screen,fireEvent,waitFor,within} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import StudyNotes from './StudyNotes';
import GuideNotesLayer from './GuideNotesLayer';
import {syncLearningEvents,readLearningState} from '../../utils/learningEvents';
let mockUser;
jest.mock('../../context/AuthContext',()=>({useAuth:()=>({user:mockUser})}));
beforeEach(()=>{localStorage.clear();mockUser={username:'alice',accessToken:'x'};global.fetch=jest.fn(async()=>({ok:true,json:async()=>({items:[],next_cursor:null})}));});
afterEach(async()=>{await syncLearningEvents(mockUser);delete global.fetch;});
test('notes require login',()=>{mockUser=null;render(<MemoryRouter><StudyNotes/></MemoryRouter>);expect(screen.getByRole('link',{name:'Log in'})).toBeInTheDocument();});
test('guide panel saves section-linked notes; notes page edits and deletes them',async()=>{
 const view=render(<MemoryRouter initialEntries={['/linear-algebra/vectors/1']}><div className="study-guide-page"><section id="intro"><h2>Vector basics</h2><p>A basis is independent.</p></section></div><GuideNotesLayer/></MemoryRouter>);
 const panel=await screen.findByLabelText('Notes for Vector basics');
 fireEvent.click(within(panel).getByText('Notes & highlights for this section'));
 fireEvent.change(within(panel).getByLabelText('Your note'),{target:{value:'Remember independence'}});
 fireEvent.click(within(panel).getByRole('button',{name:'Save note'}));
 await waitFor(()=>expect(readLearningState(mockUser).events).toHaveLength(1));
 expect(readLearningState(mockUser).events[0].data.sectionId).toBe('/linear-algebra/vectors/1#intro');
 view.unmount();render(<MemoryRouter><StudyNotes/></MemoryRouter>);
 expect(screen.getByRole('link',{name:'Return to section'})).toHaveAttribute('href','/linear-algebra/vectors/1#intro');
 fireEvent.change(screen.getByLabelText('Your note'),{target:{value:'Updated note'}});fireEvent.click(screen.getByRole('button',{name:'Save note'}));
 expect(screen.getByDisplayValue('Updated note')).toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:'Delete note'}));
 await waitFor(()=>expect(screen.queryByRole('link',{name:'Return to section'})).not.toBeInTheDocument());
});
test('guest guide panels do not expose stored account notes',async()=>{
 mockUser=null;render(<MemoryRouter><div className="study-guide-page"><section id="intro"><h2>Guest guide</h2></section></div><GuideNotesLayer/></MemoryRouter>);
 expect(await screen.findByRole('link',{name:'Sign in'})).toBeInTheDocument();expect(screen.queryByLabelText('Your note')).not.toBeInTheDocument();
});
