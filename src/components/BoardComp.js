import React from "react";
import Board from "react-trello";

let User = require("../data.json");

function BoardComp(props) {

  console.log(props.board);

  return (
    <div className="App">
      <div>This is working but data is not passing</div>
      <div>
        <Board
          data={User.boards[0]}
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
