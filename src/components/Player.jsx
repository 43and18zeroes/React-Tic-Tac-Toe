import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState();

  function editName() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input>{name}</input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editName}>Edit</button>
    </li>
  );
}
