import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BoardPage from "./pages/boardPage";
import DashboardPage from "./pages/dashboardPage";
import Header from "./components/Header";
import BoardComp from "./components/BoardComp";


const Hero = ({ handleLogOut }) => {
    let User = require("./data.json");

    const [user,setUser] = useState(User);

    return (
        <section className="hero">
            <main>
                <Header handleLogOut={handleLogOut} />
                <Router>
                    <Switch>
                        <Route path="/" exact  component={() => <DashboardPage User={user} />}/>

                        <Route path="/board/:id" component={() => <BoardComp User={user} SetUser={setUser} />}/>
                    </Switch>
                </Router>
            </main>
        </section>
    );
};

export default Hero;