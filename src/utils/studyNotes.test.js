import {latestNotes,validSectionPath,sectionMetadata,selectedQuote} from './studyNotes';
const note={noteId:'n',sectionId:'s',courseId:'linear-algebra',title:'Vectors',path:'/linear-algebra/vectors/1#intro',text:'Basis',quote:'',deleted:false,occurredAt:'2026-10-07T10:00:00Z'};
const e=(id,data)=>({eventId:id,kind:'note',data:{...note,...data}});
test('edits and deletes reconcile regardless of arrival order',()=>{
 const edit=e('2',{text:'Independent basis',occurredAt:'2026-10-07T11:00:00Z'});
 expect(latestNotes([edit,e('1')])[0].text).toBe('Independent basis');
 expect(latestNotes([e('3',{deleted:true,occurredAt:'2026-10-07T12:00:00Z'}),edit,e('1')])).toEqual([]);
});
test('only safe local section links are accepted',()=>{
 expect(validSectionPath('/linear-algebra/vectors/1#intro')).toBe(true);
 for(const url of ['//evil.example','javascript:alert(1)','/\\evil.example','/\n/evil.example'])expect(validSectionPath(url)).toBe(false);
});
test('section metadata remains stable across reload and escapes fragment',()=>{
 const section=document.createElement('section');section.id='vectors intro';section.innerHTML='<h2>Vectors</h2>';
 expect(sectionMetadata('/linear-algebra/vectors/1',section)).toEqual(sectionMetadata('/linear-algebra/vectors/1',section));
 expect(sectionMetadata('/linear-algebra/vectors/1',section).path).toContain('#vectors%20intro');
});
test('highlights must come from the same section and exclude note controls',()=>{
 const section=document.createElement('section');section.innerHTML='<p>Basis definition</p><div class="notes-panel">Private note</div>';
 const text=section.querySelector('p').firstChild;
 expect(selectedQuote(section,{rangeCount:1,anchorNode:text,focusNode:text,toString:()=>text.textContent})).toBe('Basis definition');
 expect(selectedQuote(section,{rangeCount:1,anchorNode:document.body,focusNode:text,toString:()=>''})).toBe('');
 const privateText=section.querySelector('div').firstChild;
 expect(selectedQuote(section,{rangeCount:1,anchorNode:privateText,focusNode:privateText,toString:()=>privateText.textContent})).toBe('');
});
