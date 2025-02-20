import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  const playerName = <span className="player-name">{name}</span>;
  // const btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required />;
    // btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption ? "Save" : "Edit"}</button>
    </li>
  );
}
