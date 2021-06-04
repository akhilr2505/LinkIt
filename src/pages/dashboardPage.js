import React from "react";
import DashboardCards from "../components/DashboardCards";
import "./dashboardPage.css"

//Should work i guess try once

const DashboardPage = ({User}) => {
  return (
    <div className="dashboardMain">
      {/* User.map((card) => {<DashboardCards user={User} />}) */}
      <div className="cards">
        {User.boards.map((item, i) => (
          <DashboardCards ident={i} key={i} Board={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
