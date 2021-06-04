import React from "react";
import Board from "react-trello";
import { useParams } from "react-router-dom";


function BoardComp({User,SetUser}) {
  const { id } = useParams(); 
  console.log(User);


  return (
    <div className="App">
      <div>
        <Board
        className="boardd"
          data={User.boards[id]}
          draggable
          editable
          id="EditableBoard1"
          onCardAdd={function noRefCheck() {}}
          onCardClick={function noRefCheck() {}}
          onCardDelete={function noRefCheck() {}}
          onDataChange={function noRefCheck() {}}
          tagStyle={{
            fontSize: "80%",
          }}
        />
      </div>
    </div>
  );
}

export default BoardComp;
