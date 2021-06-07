import React from "react";
import DashboardCards from "../components/DashboardCards";
// import "./dashboardPage.css"
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


//Should work i guess try once

const DashboardPage = ({ User }) => {
  return (
    <div className="dashboardMain">



      {/* User.map((card) => {<DashboardCards user={User} />}) */}
      <div className="cards">
        
          <MDBCol sm='12'>
          <MDBRow>
            {User.boards.map((item, i) => (
              <DashboardCards ident={i} key={i} Board={item} />

            ))}
            </MDBRow>
          </MDBCol>
      </div>
    </div>
  );
};

export default DashboardPage;
