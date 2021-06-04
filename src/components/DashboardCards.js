import React from "react";
import { Card, Button } from "react-bootstrap";
import "./DashboardCards.css"
import {Link} from "react-router-dom"

const DashboardCards = (props) => {
  const { ident,Board } = props; // same as -> const user = props.user;

  
  console.log(Board);
  console.log(ident);
  return (
    <div className="dash">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{Board.boardName}</Card.Title>
          <Card.Text>{Board.boardDesc}</Card.Text>
          <Button variant="primary">
           <Link to={"/board/"+ident}><span> Visit Board</span></Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardCards;
