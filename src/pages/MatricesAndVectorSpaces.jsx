import React, { useState } from 'react';
import './MatricesAndVectorSpaces.css';

// Linear Algebra Guide: Matrices and Vector Spaces
// Fill in path/meta/icon to match your courses.js entry

const practiceQuestions = [
  {
    id: 1,
    level: 'medium',
    question: 'Given matrix A = [[2, 1], [1, 3]], find the determinant of A.',
    answer: 'det(A) = (2)(3) - (1)(1) = 5',
  },
  {
    id: 2,
    level: 'medium',
    question: 'If A is a 3x3 matrix, what is the condition for A to be invertible?',
    answer: 'A is invertible if and only if det(A) ≠ 0 (i.e., A has full rank).',
  },
  {
    id: 3,
    level: 'hard',
    question:
      'Find the eigenvalues of matrix A = [[4, 1], [2, 3]] by solving the characteristic equation.',
    answer:
      'det(A - λI) = 0 → (4-λ)(3-λ) - 2 = 0 → λ² - 7λ + 10 = 0 → λ = 5, λ = 2',
  },
  {
    id: 4,
    level: 'hard',
    question:
      'Determine whether the vectors v1 = (1, 2, 3), v2 = (2, 4, 6), v3 = (1, 0, 1) are linearly independent.',
    answer:
      'v2 = 2·v1, so v1 and v2 are linearly dependent. Since one vector is a scalar multiple of another, the set is linearly dependent.',
  },
];

export default function MatricesAndVectorSpaces() {
  const [revealed, setRevealed] = useState({});

  const toggleAnswer = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="guide-container">
      <header className="guide-header">
        <h1>Matrices and Vector Spaces</h1>
        <p className="guide-subtitle">
          Core concepts of Linear Algebra: matrices, vector spaces, and linear transformations.
        </p>
      </header>

      <section className="guide-section">
        <h2>1. What is a Matrix?</h2>
        <p>
          A matrix is a rectangular array of numbers arranged in rows and columns. Matrices
          represent linear transformations and systems of linear equations in compact form.
          An m×n matrix has m rows and n columns.
        </p>
      </section>

      <section className="guide-section">
        <h2>2. Vector Spaces</h2>
        <p>
          A vector space is a set of vectors that is closed under vector addition and scalar
          multiplication, satisfying axioms such as associativity, distributivity, and the
          existence of a zero vector. Common examples include R², R³, and general Rⁿ.
        </p>
      </section>

      <section className="guide-section">
        <h2>3. Determinants</h2>
        <p>
          The determinant of a square matrix is a scalar value that indicates whether the
          matrix is invertible. For a 2x2 matrix [[a, b], [c, d]], the determinant is
          ad − bc. A matrix is invertible only if its determinant is nonzero.
        </p>
      </section>

      <section className="guide-section">
        <h2>4. Eigenvalues and Eigenvectors</h2>
        <p>
          For a square matrix A, a nonzero vector v is an eigenvector if Av = λv for some
          scalar λ, called the eigenvalue. Eigenvalues are found by solving the characteristic
          equation det(A − λI) = 0.
        </p>
      </section>

      <section className="guide-section">
        <h2>5. Linear Independence</h2>
        <p>
          A set of vectors is linearly independent if no vector in the set can be written as a
          linear combination of the others. This is checked by verifying that the only solution
          to c1·v1 + c2·v2 + ... + cn·vn = 0 is c1 = c2 = ... = cn = 0.
        </p>
      </section>

      <section className="guide-section practice-section">
        <h2>Practice Questions (Medium & Hard)</h2>
        {practiceQuestions.map((q) => (
          <div key={q.id} className={`practice-item level-${q.level}`}>
            <p className="question">
              <span className="badge">{q.level}</span> {q.question}
            </p>
            <button onClick={() => toggleAnswer(q.id)}>
              {revealed[q.id] ? 'Hide Answer' : 'Show Answer'}
            </button>
            {revealed[q.id] && <p className="answer">{q.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
