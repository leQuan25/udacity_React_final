import {Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../component/Login";
import HomePage from "../component/HomePage";
import NewPoll from "../component/PollCreation"
import Poll from "../component/Poll"
import Leaderboard from "../component/Leaderboard"
import PageNotFound from "../component/PageNotFound"
import { connect } from "react-redux";

const App = (props) => {
      
    return (
      <Fragment>
        <div className="container">
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" exact element={ props.loading === true ?  <Navigate to ="/" /> :  <HomePage />}  />
                <Route path="/new" element={props.loading === true ?  <Navigate to ="/" /> : <NewPoll />}  />
                <Route path="/poll/:id" element={<Poll />}  />
                <Route path="/leaderboard" element={props.loading === true ?  <Navigate to ="/" /> : <Leaderboard />}  />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </div>
      </Fragment>
    );
  };

  const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

  export default connect(mapStateToProps)(App);