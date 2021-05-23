import React from "react";
import { Card, Button } from "react-bootstrap";
import BoardComp from "../components/BoardComp";

const DashboardCards = (props) => {
  const { Board } = props; // same as -> const user = props.user;

  function callcard() {
    var pass = { Board };
    console.log(props);
    return <BoardComp board={pass} />;
  }
  console.log(Board);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{Board.boardName}</Card.Title>
          <Card.Text>{Board.boardDesc}</Card.Text>
          <Button variant="primary" href="/board" onClick={callcard()}>
            Go to Board
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardCards;
