import React from "react";
import "./DashboardCards.css";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit'

const DashboardCards = (props) => {
  const { ident, Board } = props; // same as -> const user = props.user;


  console.log(Board);
  console.log(ident);
  return (
    <div className="dash">
      <MDBCard id="card"  alignment='center' >
        <MDBCardBody>
          <MDBCardTitle>{Board.boardName}</MDBCardTitle>
          <MDBCardText>{Board.boardDesc}</MDBCardText>
          <Link to={"/board/" + ident}>
            <MDBBtn id="button" >
              Visit Board
          </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default DashboardCards;
