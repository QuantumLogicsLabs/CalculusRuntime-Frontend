/** Module A topic checkpoints: 20 questions per topic; answers use GuideMcqSection letters. */

export const LA_A_LU_QUIZ = [
  {
    "prompt": "In a Doolittle factorization $A=LU$, what normalization is imposed on $L$?",
    "options": [
      "Its diagonal entries are one",
      "Its diagonal entries are zero",
      "It is upper triangular",
      "It equals $U^T$"
    ],
    "answer": "A",
    "explanation": "Unit diagonal entries in the lower-triangular factor remove the diagonal scaling ambiguity."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&3\\\\4&7\\end{pmatrix}$, which multiplier eliminates $a_{21}$?",
    "options": [
      "$1/2$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "answer": "B",
    "explanation": "The multiplier is $m_{21}=a_{21}/a_{11}=4/2=2$; use $R_2\\leftarrow R_2-2R_1$."
  },
  {
    "prompt": "After eliminating $a_{21}$ in $A=\\begin{pmatrix}2&3\\\\4&7\\end{pmatrix}$, what is $u_{22}$?",
    "options": [
      "$7$",
      "$13$",
      "$1$",
      "$-1$"
    ],
    "answer": "C",
    "explanation": "Subtract twice the first row: $7-2(3)=1$."
  },
  {
    "prompt": "If $PA=LU$, which pair of triangular systems solves $Ax=b$?",
    "options": [
      "$Ly=b$, then $Ux=Pb$",
      "$Uy=Pb$, then $Lx=y$",
      "$Lx=P^{-1}b$, then $Uy=x$",
      "$Ly=Pb$, then $Ux=y$"
    ],
    "answer": "D",
    "explanation": "Multiply the original system by $P$ to get $LUx=Pb$."
  },
  {
    "prompt": "Why can an invertible matrix require a row swap before unpivoted elimination?",
    "options": [
      "Its current diagonal pivot can be zero",
      "Its determinant must then be zero",
      "Every entry in the pivot column must be zero",
      "Its inverse cannot exist"
    ],
    "answer": "A",
    "explanation": "Invertibility does not require every leading pivot in the original row order to be nonzero."
  },
  {
    "prompt": "For $L=\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}$ and $b=(2,9)^T$, solve $Ly=b$.",
    "options": [
      "$(2,9)^T$",
      "$(2,3)^T$",
      "$(3,2)^T$",
      "$(2,15)^T$"
    ],
    "answer": "B",
    "explanation": "Forward substitution gives $y_1=2$ and $y_2=9-3(2)=3$."
  },
  {
    "prompt": "For $U=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$ and $y=(5,9)^T$, solve $Ux=y$.",
    "options": [
      "$(3,1)^T$",
      "$(5,3)^T$",
      "$(1,3)^T$",
      "$(2,1)^T$"
    ],
    "answer": "C",
    "explanation": "Back substitution gives $x_2=3$ and $x_1=(5-3)/2=1$."
  },
  {
    "prompt": "What is the usual dense arithmetic cost of factorizing an $n\\times n$ matrix by Gaussian elimination?",
    "options": [
      "$O(n)$",
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n^3)$"
    ],
    "answer": "D",
    "explanation": "Elimination updates successively smaller trailing submatrices, giving cubic leading cost."
  },
  {
    "prompt": "Once $L,U,P$ are known, what is the usual cost of solving for one new right-hand side?",
    "options": [
      "$O(n^2)$",
      "$O(n^3)$",
      "$O(2^n)$",
      "$O(n^4)$"
    ],
    "answer": "A",
    "explanation": "Two triangular solves each require a quadratic number of scalar operations."
  },
  {
    "prompt": "If $A=LU$ with unit-diagonal $L$ and $U$ diagonal entries $2,-3,4$, what is $\\det A$?",
    "options": [
      "$24$",
      "$-24$",
      "$3$",
      "$-5$"
    ],
    "answer": "B",
    "explanation": "$\\det L=1$, so $\\det A=\\det U=2(-3)4=-24$."
  },
  {
    "prompt": "If $PA=LU$, $P$ is one row swap, and $\\det U=-6$ with unit-diagonal $L$, find $\\det A$.",
    "options": [
      "$-6$",
      "$1/6$",
      "$6$",
      "$0$"
    ],
    "answer": "C",
    "explanation": "$\\det(P)\\det(A)=\\det(U)$ and $\\det P=-1$, so $\\det A=6$."
  },
  {
    "prompt": "Partial pivoting normally chooses which row for the next pivot?",
    "options": [
      "The row with the smallest absolute pivot-column entry",
      "The row with the largest row sum regardless of column",
      "The first row of the original matrix at every step",
      "A remaining row with maximal absolute entry in the current column"
    ],
    "answer": "D",
    "explanation": "A large available pivot limits the magnitude of elimination multipliers in that column."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}0&1\\\\2&3\\end{pmatrix}$, after swapping its rows, which $U$ is valid with $L=I$?",
    "options": [
      "$\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}0&1\\\\2&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&0\\\\3&2\\end{pmatrix}$",
      "$\\begin{pmatrix}2&0\\\\3&1\\end{pmatrix}$"
    ],
    "answer": "A",
    "explanation": "The swapped matrix $PA$ is already upper triangular."
  },
  {
    "prompt": "When swapping rows during a later pivoting step, what must happen to previously stored multipliers?",
    "options": [
      "The entire $L$ must be discarded",
      "The same rows of the completed columns of $L$ must be swapped",
      "Only the diagonal of $U$ must be swapped",
      "All multipliers must be negated"
    ],
    "answer": "B",
    "explanation": "Earlier elimination history must follow the new row permutation; only already completed columns of $L$ are exchanged."
  },
  {
    "prompt": "Which condition guarantees ordinary nonsingular LU without pivoting for a square matrix?",
    "options": [
      "The trace is positive",
      "Every entry is positive",
      "Every leading principal minor is nonzero",
      "The matrix has repeated eigenvalues"
    ],
    "answer": "C",
    "explanation": "Nonzero leading principal minors ensure each successive pivot can be formed without a row interchange."
  },
  {
    "prompt": "For nonsingular $A$, why is the factorization with unit-diagonal $L$ unique whenever it exists?",
    "options": [
      "All triangular matrices commute",
      "$L$ must be the identity",
      "Every matrix has orthogonal rows",
      "A matrix that is both unit lower triangular and upper triangular must be $I$"
    ],
    "answer": "D",
    "explanation": "Comparing two factorizations gives $L_2^{-1}L_1=U_2U_1^{-1}$; triangular structure and the unit diagonal force identity."
  },
  {
    "prompt": "What is the lower-triangular entry $l_{21}$ for $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$?",
    "options": [
      "$3/2$",
      "$-3/2$",
      "$2/3$",
      "$6$"
    ],
    "answer": "A",
    "explanation": "The stored multiplier is $6/4=3/2$, not its negative; the row operation subtracts this multiple."
  },
  {
    "prompt": "With $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$ and $b=(10,12)^T$, what is $x$?",
    "options": [
      "$(2,1)^T$",
      "$(1,2)^T$",
      "$(1,-2)^T$",
      "$(0,4)^T$"
    ],
    "answer": "B",
    "explanation": "Substitution verifies $4+6=10$ and $6+6=12$; triangular solves give the same result."
  },
  {
    "prompt": "Does successful partial pivoting make every linear system well-conditioned?",
    "options": [
      "Yes; it forces the condition number to one",
      "Yes; it makes the matrix orthogonal",
      "No; conditioning is a property of the problem, separate from the algorithm",
      "No; it always makes the matrix singular"
    ],
    "answer": "C",
    "explanation": "Pivoting addresses numerical stability of elimination; it cannot remove intrinsic sensitivity of $Ax=b$."
  },
  {
    "prompt": "Given a computed $L,U,P$, which residual checks the factorization itself?",
    "options": [
      "$A-L-U$",
      "$P-LU$",
      "$L^TU-I$",
      "$PA-LU$"
    ],
    "answer": "D",
    "explanation": "A correct exact factorization has $PA-LU=0$; a small relative residual is a useful floating-point check."
  }
];

export const LA_A_CHOLESKY_QUIZ = [
  {
    "prompt": "Which class of real matrices admits a Cholesky factorization with positive diagonal entries?",
    "options": [
      "Symmetric positive-definite matrices",
      "All invertible matrices",
      "All symmetric matrices",
      "All matrices with positive trace"
    ],
    "answer": "A",
    "explanation": "Standard Cholesky requires symmetry and $x^TAx>0$ for every nonzero real $x$."
  },
  {
    "prompt": "What is the standard real lower-triangular Cholesky form?",
    "options": [
      "$A=L+L^T$",
      "$A=LL^T$",
      "$A=L^2$ for every lower-triangular $L$",
      "$A=L^TL^{-1}$"
    ],
    "answer": "B",
    "explanation": "The transpose of the lower-triangular factor completes the symmetric product."
  },
  {
    "prompt": "For complex Hermitian positive-definite $A$, which form is correct?",
    "options": [
      "$A=LL^T$ without conjugation",
      "$A=L-L^*$",
      "$A=LL^*$",
      "$A=L^{-1}L^*$"
    ],
    "answer": "C",
    "explanation": "The adjoint $L^*$ is the conjugate transpose; ordinary transpose does not generally suffice."
  },
  {
    "prompt": "If $a_{11}=9$, what is the first positive Cholesky pivot $l_{11}$?",
    "options": [
      "$9$",
      "$81$",
      "$-3$",
      "$3$"
    ],
    "answer": "D",
    "explanation": "$l_{11}=\\sqrt{a_{11}}=3$ under the positive-diagonal convention."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$, what is $l_{21}$?",
    "options": [
      "$1$",
      "$2$",
      "$1/2$",
      "$4$"
    ],
    "answer": "A",
    "explanation": "$l_{11}=2$ and $l_{21}=a_{21}/l_{11}=2/2=1$."
  },
  {
    "prompt": "For the same $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$, what is $l_{22}$?",
    "options": [
      "$2$",
      "$\\sqrt2$",
      "$\\sqrt3$",
      "$1$"
    ],
    "answer": "B",
    "explanation": "$l_{22}=\\sqrt{a_{22}-l_{21}^2}=\\sqrt{3-1}=\\sqrt2$."
  },
  {
    "prompt": "Which factor satisfies $A=LL^T$ for $A=\\begin{pmatrix}9&3\\\\3&5\\end{pmatrix}$?",
    "options": [
      "$\\begin{pmatrix}3&0\\\\3&2\\end{pmatrix}$",
      "$\\begin{pmatrix}9&0\\\\1&5\\end{pmatrix}$",
      "$\\begin{pmatrix}3&0\\\\1&2\\end{pmatrix}$",
      "$\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "Multiplication gives diagonal entries $9,1+4=5$ and off-diagonal entries $3$."
  },
  {
    "prompt": "Which matrix is symmetric but fails positive definiteness?",
    "options": [
      "$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$",
      "$\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$",
      "$\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$"
    ],
    "answer": "D",
    "explanation": "Its eigenvalues are $3,-1$, so one direction has negative quadratic form."
  },
  {
    "prompt": "For a real symmetric $2\\times2$ matrix, which test ensures positive definiteness?",
    "options": [
      "$a_{11}>0$ and $\\det A>0$",
      "$\\operatorname{tr}A>0$ alone",
      "$\\det A<0$",
      "Both off-diagonal entries are positive"
    ],
    "answer": "A",
    "explanation": "This is the two-dimensional case of Sylvester’s criterion."
  },
  {
    "prompt": "If $A=LL^T$, which solve order is correct for $Ax=b$?",
    "options": [
      "Solve $L^Ty=b$, then $Lx=y$",
      "Solve $Ly=b$, then $L^Tx=y$",
      "Set $x=Lb$",
      "Set $x=L^Tb$"
    ],
    "answer": "B",
    "explanation": "Substitute $y=L^Tx$ into $LL^Tx=b$."
  },
  {
    "prompt": "For Cholesky diagonal entries $2,3,4$, what is $\\det A$?",
    "options": [
      "$24$",
      "$48$",
      "$576$",
      "$9$"
    ],
    "answer": "C",
    "explanation": "$\\det A=(\\det L)^2=(2\\cdot3\\cdot4)^2=576$."
  },
  {
    "prompt": "What does a negative radicand mean in exact-arithmetic standard Cholesky?",
    "options": [
      "The matrix is automatically orthogonal",
      "The square root should be replaced by its absolute value",
      "The negative sign can always be ignored",
      "The matrix does not satisfy the positive-definite assumptions at that step"
    ],
    "answer": "D",
    "explanation": "Positive definiteness guarantees positive Schur-complement pivots; a negative one signals failure of the assumptions."
  },
  {
    "prompt": "Why is Cholesky preferable to general LU for an SPD dense matrix?",
    "options": [
      "It exploits symmetry and needs roughly half the factorization work",
      "It removes all rounding error",
      "It changes the eigenvalues to one",
      "It works only for diagonal matrices"
    ],
    "answer": "A",
    "explanation": "Cholesky costs about $n^3/3$ operations versus about $2n^3/3$ for general LU."
  },
  {
    "prompt": "If $A$ is SPD and $c>0$, how is the Cholesky factor of $cA$ obtained from $L$?",
    "options": [
      "$cL$",
      "$\\sqrt c\\,L$",
      "$L/c$",
      "$L+cI$"
    ],
    "answer": "B",
    "explanation": "$(\\sqrt cL)(\\sqrt cL)^T=cLL^T=cA$."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$, which statement is correct?",
    "options": [
      "It is positive definite",
      "It is nonsymmetric",
      "It is positive semidefinite, so the strictly positive-diagonal algorithm reaches a zero pivot",
      "Its determinant is negative"
    ],
    "answer": "C",
    "explanation": "The rank is one; after $l_{11}=l_{21}=1$, the second radicand is zero."
  },
  {
    "prompt": "What distinguishes $LDL^T$ from Cholesky $LL^T$?",
    "options": [
      "It requires $L$ to be upper triangular",
      "It always requires complex arithmetic",
      "It gives $D=I$ for every matrix",
      "It separates a diagonal factor and can avoid square roots"
    ],
    "answer": "D",
    "explanation": "$L$ is often unit lower triangular and $D$ stores pivots; indefinite cases require suitable pivoting or block variants."
  },
  {
    "prompt": "If $A$ is SPD, which property must every principal submatrix have?",
    "options": [
      "It is also SPD",
      "It is always the identity",
      "It has determinant zero",
      "It is necessarily diagonal"
    ],
    "answer": "A",
    "explanation": "Extend any nonzero subvector by zeros to apply the positive quadratic-form condition for $A$."
  },
  {
    "prompt": "How can $\\log\\det A$ be computed from a positive-diagonal Cholesky factor?",
    "options": [
      "$\\sum_i l_{ii}$",
      "$2\\sum_i\\log l_{ii}$",
      "$\\log\\sum_i l_{ii}$",
      "$\\sum_i\\log a_{ii}$ in every case"
    ],
    "answer": "B",
    "explanation": "Since $\\det A=\\prod_i l_{ii}^2$, taking logarithms gives the stated sum."
  },
  {
    "prompt": "What extra numerical concern arises when Cholesky is applied to $A^TA$ for a full-column-rank matrix $A$?",
    "options": [
      "It makes every pivot zero",
      "It guarantees exact least-squares coefficients",
      "Forming normal equations squares the 2-norm condition number",
      "It makes $A^TA$ nonsymmetric"
    ],
    "answer": "C",
    "explanation": "$\\kappa_2(A^TA)=\\kappa_2(A)^2$; QR or SVD may be safer for ill-conditioned least squares."
  },
  {
    "prompt": "For $L=\\begin{pmatrix}2&0\\\\1&1\\end{pmatrix}$ and $b=(6,4)^T$, solve $LL^Tx=b$.",
    "options": [
      "$(2,1)^T$",
      "$(1,2)^T$",
      "$(3,1)^T$",
      "$(1,1)^T$"
    ],
    "answer": "D",
    "explanation": "Solve $Ly=b$ to get $y=(3,1)^T$, then $L^Tx=y$ to get $x=(1,1)^T$."
  }
];

export const LA_A_JORDAN_QUIZ = [
  {
    "prompt": "Over which field does every square matrix have a Jordan normal form?",
    "options": [
      "$\\mathbb C$",
      "$\\mathbb R$ without any restriction on eigenvalues",
      "Only the integers",
      "Only the positive real numbers"
    ],
    "answer": "A",
    "explanation": "The characteristic polynomial splits over the complex numbers; over another field splitting is required."
  },
  {
    "prompt": "What entries appear directly above the diagonal in a standard Jordan block?",
    "options": [
      "The eigenvalue repeated",
      "Ones",
      "Zeros for every block",
      "Arbitrary negative integers"
    ],
    "answer": "B",
    "explanation": "A block has $\\lambda$ on the diagonal, ones on the first superdiagonal, and zeros elsewhere."
  },
  {
    "prompt": "For $J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, what is the geometric multiplicity of eigenvalue $2$?",
    "options": [
      "$2$",
      "$0$",
      "$1$",
      "$4$"
    ],
    "answer": "C",
    "explanation": "$J-2I$ has a one-dimensional nullspace spanned by $(1,0)^T$."
  },
  {
    "prompt": "For a chain $v_1,v_2$ at eigenvalue $\\lambda$, which relations hold?",
    "options": [
      "$(A-\\lambda I)v_1=v_2$ and $(A-\\lambda I)v_2=v_2$",
      "$Av_1=0$ and $Av_2=0$ for every $\\lambda$",
      "$v_1=v_2$",
      "$(A-\\lambda I)v_1=0$ and $(A-\\lambda I)v_2=v_1$"
    ],
    "answer": "D",
    "explanation": "The first vector is an eigenvector and each later vector maps to the preceding one under $A-\\lambda I$."
  },
  {
    "prompt": "How should a length-three chain be ordered in the columns of $P$ for superdiagonal-one Jordan blocks?",
    "options": [
      "$v_1,v_2,v_3$, with $(A-\\lambda I)v_{j+1}=v_j$",
      "$v_3,v_2,v_1$ with the same chain convention",
      "Any order gives exactly the same block",
      "Repeat $v_1$ three times"
    ],
    "answer": "A",
    "explanation": "This order makes $AP=PJ$ with ones above the diagonal."
  },
  {
    "prompt": "Which equality is a convenient direct verification of a proposed Jordan basis?",
    "options": [
      "$A+P=J$",
      "$AP=PJ$ with $P$ invertible",
      "$P^TP=0$",
      "$AP=JP$ for every choice of $P$"
    ],
    "answer": "B",
    "explanation": "The relation is equivalent to $A=PJP^{-1}$ when $P$ is invertible."
  },
  {
    "prompt": "What is $J^2$ for $J=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$?",
    "options": [
      "$\\begin{pmatrix}9&1\\\\0&9\\end{pmatrix}$",
      "$\\begin{pmatrix}6&2\\\\0&6\\end{pmatrix}$",
      "$\\begin{pmatrix}9&6\\\\0&9\\end{pmatrix}$",
      "$\\begin{pmatrix}9&3\\\\0&9\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "Write $J=3I+N$ with $N^2=0$; then $J^2=9I+6N$."
  },
  {
    "prompt": "For a block $J_m(\\lambda)=\\lambda I+N$, which property of $N$ is correct?",
    "options": [
      "$N=I$",
      "$N^m=I$",
      "$N$ is invertible",
      "$N^m=0$"
    ],
    "answer": "D",
    "explanation": "The shift matrix becomes zero after $m$ powers and is nilpotent of index $m$."
  },
  {
    "prompt": "How many Jordan blocks correspond to an eigenvalue $\\lambda$?",
    "options": [
      "$\\dim\\ker(A-\\lambda I)$",
      "$\\operatorname{tr}A$",
      "$\\det A$",
      "Always exactly one"
    ],
    "answer": "A",
    "explanation": "Each block contributes exactly one independent eigenvector for that eigenvalue."
  },
  {
    "prompt": "What does the sum of block sizes for $\\lambda$ equal?",
    "options": [
      "Its geometric multiplicity in every case",
      "Its algebraic multiplicity",
      "The number of distinct eigenvalues",
      "The rank of $A$"
    ],
    "answer": "B",
    "explanation": "Each block contributes its size to the exponent of $(t-\\lambda)$ in the characteristic polynomial."
  },
  {
    "prompt": "When is a complex square matrix diagonalizable in terms of its Jordan blocks?",
    "options": [
      "Every block has the same eigenvalue",
      "At least one block has size two",
      "Every block has size one",
      "Every eigenvalue is nonzero"
    ],
    "answer": "C",
    "explanation": "Blocks of size one form a diagonal matrix, and larger blocks represent missing eigenvectors."
  },
  {
    "prompt": "The characteristic polynomial is $(t-4)^5$ and there are two Jordan blocks. Which sizes are possible?",
    "options": [
      "$2,2$",
      "$5$ alone",
      "$1,1,1,1,1$",
      "$3,2$"
    ],
    "answer": "D",
    "explanation": "The sizes must sum to five and there must be exactly two blocks; $3+2$ meets both conditions."
  },
  {
    "prompt": "If a nilpotent $5\\times5$ matrix has nullities $2,4,5$ for $N,N^2,N^3$, what are its block sizes?",
    "options": [
      "$3,2$",
      "$4,1$",
      "$5$",
      "$2,2,1$"
    ],
    "answer": "A",
    "explanation": "Nullity increments $2,2,1$ count blocks of sizes at least $1,2,3$, giving one block of size three and one of size two."
  },
  {
    "prompt": "For blocks $J_3(2)$ and $J_2(2)$, what is the minimal polynomial?",
    "options": [
      "$(t-2)^5$",
      "$(t-2)^3$",
      "$(t-2)^2$",
      "$t-2$"
    ],
    "answer": "B",
    "explanation": "The exponent in the minimal polynomial is the largest block size for that eigenvalue."
  },
  {
    "prompt": "What is the geometric multiplicity of $2$ for $A=\\operatorname{diag}(J_2(2),J_1(2))$?",
    "options": [
      "$3$",
      "$1$",
      "$2$",
      "$0$"
    ],
    "answer": "C",
    "explanation": "There are two blocks, hence two independent eigenvectors for eigenvalue two."
  },
  {
    "prompt": "For $J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, what is entry $(1,2)$ of $J^4$?",
    "options": [
      "$16$",
      "$8$",
      "$4$",
      "$32$"
    ],
    "answer": "D",
    "explanation": "The binomial expansion gives $J^k=2^kI+k2^{k-1}N$, so the entry is $4\\cdot2^3=32$."
  },
  {
    "prompt": "For $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, what is $e^{tN}$?",
    "options": [
      "$I+tN$",
      "$tI+N$",
      "$e^tI$",
      "$I+tN+t^2I$"
    ],
    "answer": "A",
    "explanation": "The exponential series terminates because $N^2=0$."
  },
  {
    "prompt": "Can a real $90^\\circ$ rotation matrix have a real Jordan form made only of real scalar-eigenvalue Jordan blocks?",
    "options": [
      "Yes; its eigenvalue is zero",
      "No; its eigenvalues are $i$ and $-i$",
      "Yes; it is the identity",
      "No; it is singular"
    ],
    "answer": "B",
    "explanation": "Its polynomial $t^2+1$ does not split over the real field; complex Jordan form or real canonical blocks are needed."
  },
  {
    "prompt": "Why is exact Jordan structure a poor default tool for noisy numerical data?",
    "options": [
      "It always has fewer entries than a diagonal matrix",
      "It requires every matrix entry to be positive",
      "Tiny perturbations can change block sizes or split repeated eigenvalues",
      "It cannot describe exact matrices"
    ],
    "answer": "C",
    "explanation": "Jordan block structure is sensitive to perturbations; Schur decompositions are generally preferred numerically."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&3\\\\0&2\\end{pmatrix}$ and $v_1=(1,0)^T$, which vector can be $v_2$ in a chain?",
    "options": [
      "$(0,3)^T$",
      "$(1,0)^T$",
      "$(0,1)^T$",
      "$(0,1/3)^T$"
    ],
    "answer": "D",
    "explanation": "$(A-2I)(0,1/3)^T=(1,0)^T=v_1$."
  }
];

export const LA_A_NORMS_QUIZ = [
  {
    "prompt": "Which property distinguishes a norm from a function that vanishes at some nonzero vector?",
    "options": [
      "$\\|x\\|=0$ if and only if $x=0$",
      "$\\|x\\|=1$ for every $x$",
      "$\\|x+y\\|=\\|x\\|+\\|y\\|$ always",
      "$\\|-x\\|=-\\|x\\|$"
    ],
    "answer": "A",
    "explanation": "Positive definiteness of a norm requires only the zero vector to have zero norm."
  },
  {
    "prompt": "For $x=(3,-4)^T$, what is $\\|x\\|_1$?",
    "options": [
      "$5$",
      "$7$",
      "$4$",
      "$-1$"
    ],
    "answer": "B",
    "explanation": "Add absolute entries: $3+4=7$."
  },
  {
    "prompt": "For $x=(3,-4)^T$, what is $\\|x\\|_2$?",
    "options": [
      "$7$",
      "$25$",
      "$5$",
      "$4$"
    ],
    "answer": "C",
    "explanation": "Euclidean length is $\\sqrt{3^2+(-4)^2}=5$."
  },
  {
    "prompt": "For $x=(2,-5,1)^T$, what is $\\|x\\|_\\infty$?",
    "options": [
      "$8$",
      "$\\sqrt{30}$",
      "$-5$",
      "$5$"
    ],
    "answer": "D",
    "explanation": "The infinity norm is the largest absolute component."
  },
  {
    "prompt": "What is the induced matrix norm associated with a chosen vector norm?",
    "options": [
      "$\\max_{x\\ne0}\\|Ax\\|/\\|x\\|$",
      "$\\sum_i a_{ii}$",
      "$\\det A$",
      "The smallest entry of $A$"
    ],
    "answer": "A",
    "explanation": "It measures maximum relative vector stretch in that norm."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_1$?",
    "options": [
      "$7$",
      "$6$",
      "$10$",
      "$4$"
    ],
    "answer": "B",
    "explanation": "Absolute column sums are $4$ and $6$; take their maximum."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_\\infty$?",
    "options": [
      "$6$",
      "$4$",
      "$7$",
      "$10$"
    ],
    "answer": "C",
    "explanation": "Absolute row sums are $3$ and $7$; take their maximum."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_F$?",
    "options": [
      "$30$",
      "$10$",
      "$\\sqrt{10}$",
      "$\\sqrt{30}$"
    ],
    "answer": "D",
    "explanation": "The squared Frobenius norm is $1+4+9+16=30$."
  },
  {
    "prompt": "Which singular value equals the induced matrix 2-norm?",
    "options": [
      "The largest singular value",
      "The smallest singular value",
      "The sum of singular values",
      "The product of singular values"
    ],
    "answer": "A",
    "explanation": "The spectral norm measures maximum Euclidean stretch."
  },
  {
    "prompt": "For invertible $A$, which formula defines $\\kappa_2(A)$?",
    "options": [
      "$\\|A\\|_2+\\|A^{-1}\\|_2$",
      "$\\|A\\|_2\\|A^{-1}\\|_2$",
      "$\\det A$",
      "$\\operatorname{tr}A$"
    ],
    "answer": "B",
    "explanation": "The product equals $\\sigma_{\\max}/\\sigma_{\\min}$."
  },
  {
    "prompt": "Find $\\kappa_2(\\operatorname{diag}(8,2))$.",
    "options": [
      "$16$",
      "$10$",
      "$4$",
      "$1/4$"
    ],
    "answer": "C",
    "explanation": "The largest and smallest singular values are eight and two."
  },
  {
    "prompt": "If $c\\ne0$, how does $\\kappa_2(cA)$ compare with $\\kappa_2(A)$?",
    "options": [
      "It is multiplied by $c^2$",
      "It is divided by $c$",
      "It becomes one",
      "They are equal"
    ],
    "answer": "D",
    "explanation": "Scaling multiplies singular values by $|c|$, leaving their ratio unchanged."
  },
  {
    "prompt": "What is the 2-norm condition number of a square orthogonal matrix?",
    "options": [
      "$1$",
      "$0$",
      "Its dimension",
      "Its determinant"
    ],
    "answer": "A",
    "explanation": "All singular values of an orthogonal matrix equal one."
  },
  {
    "prompt": "A nonsingular matrix has a tiny determinant. What can be concluded from that fact alone about conditioning?",
    "options": [
      "It must be ill-conditioned",
      "A large condition number does not follow without further information",
      "It must be singular",
      "Its condition number is negative"
    ],
    "answer": "B",
    "explanation": "A small scalar multiple of identity has tiny determinant but condition number one."
  },
  {
    "prompt": "For fixed nonsingular $A$ and nonzero $b$, what bound holds when only $b$ is perturbed?",
    "options": [
      "Relative solution error always equals relative data error",
      "$\\delta x=0$ for every perturbation",
      "$\\|\\delta x\\|/\\|x\\|\\le\\kappa(A)\\|\\delta b\\|/\\|b\\|$",
      "Relative error is always exactly $\\kappa(A)$"
    ],
    "answer": "C",
    "explanation": "Combine $\\delta x=A^{-1}\\delta b$ with $\\|b\\|=\\|Ax\\|\\le\\|A\\|\\|x\\|$ in the compatible induced norm."
  },
  {
    "prompt": "Why does a small relative residual not always imply a small relative solution error?",
    "options": [
      "Residual and error always have identical values",
      "The residual ignores $A$ entirely",
      "A small residual proves the matrix is orthogonal",
      "An ill-conditioned matrix can amplify the residual into a large error"
    ],
    "answer": "D",
    "explanation": "$x-\\hat x=A^{-1}(b-A\\hat x)$; a condition-number bound is needed for relative errors."
  },
  {
    "prompt": "Which inequality is submultiplicativity of an induced matrix norm?",
    "options": [
      "$\\|AB\\|\\le\\|A\\|\\|B\\|$",
      "$\\|AB\\|\\ge\\|A\\|+\\|B\\|$",
      "$\\|AB\\|=\\|A\\|+\\|B\\|$ always",
      "$\\|AB\\|=0$ always"
    ],
    "answer": "A",
    "explanation": "Apply the maximum-stretch bounds successively to $B$ and $A$."
  },
  {
    "prompt": "For rank-$r$ nonzero $A$, which relationship holds?",
    "options": [
      "$\\|A\\|_F\\le\\|A\\|_2/\\sqrt r$",
      "$\\|A\\|_2\\le\\|A\\|_F\\le\\sqrt r\\,\\|A\\|_2$",
      "$\\|A\\|_2=\\|A\\|_F$ for every rank",
      "$\\|A\\|_F=r\\|A\\|_2$ always"
    ],
    "answer": "B",
    "explanation": "Frobenius norm is the root sum of squared singular values; at most $r$ are nonzero."
  },
  {
    "prompt": "If full-column-rank $A$ has $\\kappa_2(A)=10$, what is $\\kappa_2(A^TA)$?",
    "options": [
      "$10$",
      "$20$",
      "$100$",
      "$\\sqrt{10}$"
    ],
    "answer": "C",
    "explanation": "Eigenvalues of $A^TA$ are squared singular values, so the condition number is squared."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(1,10^{-4})$, $b=(1,0)^T$, and $\\delta b=(0,10^{-4})^T$, find $\\delta x$.",
    "options": [
      "$(0,10^{-4})^T$",
      "$(1,0)^T$",
      "$(0,10^{-8})^T$",
      "$(0,1)^T$"
    ],
    "answer": "D",
    "explanation": "Multiplication by $A^{-1}=\\operatorname{diag}(1,10^4)$ amplifies the second component to one."
  }
];
