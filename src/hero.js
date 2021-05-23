import React from 'react';
import { Switch, Route } from "react-router";
import BoardPage from "./pages/boardPage";
import dashboardPage from "./pages/dashboardPage";
import Header from "./components/Header";

const Hero =({handleLogOut})=>{
    return(
        <section className="hero">
            <main>
                <Header handleLogOut={handleLogOut} />
                <Switch>
                    <Route path="/board" component={BoardPage} />
                    <Route path="/dashboard" component={dashboardPage} />
                </Switch>
            </main>
        </section>
    );
};

export default Hero;