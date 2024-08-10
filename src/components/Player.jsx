import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing(editing => !editing);
    // function form is best practise to schedule a state update to true because of React
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={playerName} />;
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
