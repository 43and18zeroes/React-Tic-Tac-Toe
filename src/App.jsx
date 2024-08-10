// import Player from './components/Player';

// function App() {
//   return (
//     <main>
//       <div id="game-container">
//         <ol id="players">
//           <Player initialName="Player 1" symbol="X" />
//           <Player initialName="Player 2" symbol="O" />
//         </ol>
//         GAME BOARD
//       </div>
//       LOG
//     </main>
//   );
// }

// export default App;

import React from 'react';
import { useState } from 'react';

function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

function App() {
  const [studentName, setStudentName] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleChangeName(event) {
    setStudentName(event.target.value);
  }

  function handleChangeFeedback(event) {
    setFeedback(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChangeFeedback} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChangeName} value={studentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={studentName} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
