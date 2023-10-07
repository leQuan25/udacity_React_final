import {Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
                <Route path="/home" exact element={<RequireAuth props={props}> <HomePage /> </RequireAuth>} />
                <Route path="/new" element={<RequireAuth props={props}><NewPoll /></RequireAuth>}  />
                <Route path="/poll/:id" element={<RequireAuth props={props}><Poll /></RequireAuth>}  />
                <Route path="/leaderboard" element={<RequireAuth props={props}><Leaderboard /></RequireAuth>} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </div>
      </Fragment>
    );
  };

  function RequireAuth({ children, props }) {
    const authed  = props.loading;
    const location = useLocation();
  
    return authed === true ? (
      children
    ) : (
      <Navigate to="/" replace state={{ path: location.pathname }} />
    );
  } 

  const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser !== null,
  });

  export default connect(mapStateToProps)(App);