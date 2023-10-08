import { connect } from "react-redux";
import {Fragment } from "react";
import Nav from "./Nav";

const Leaderboard = (props) => {

    return (
        <Fragment>
            <Nav></Nav>
            <table border="1">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Answered</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(props.users.users).sort((a,b) => ((Object.values(a.answers).length + a.questions.length > Object.values(b.answers).length + b.questions.length) ? -1 : (Object.values(a.answers).length + a.questions.length < Object.values(b.answers).length + b.questions.length) ? 1 : 0))
                .map((user) => (
                    <tr key={user.id}>
                        <td><img width="25" height="25" src={user.avatarURL} />{user.id}</td>
                        <td>{user.answers && Object.values(user.answers).length}</td>
                        <td>{user.questions && user.questions.length}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
        
    );
};

function mapStateToProps(state) {
    const { users } = state;
    return { users: users }
} 

export default connect(mapStateToProps)(Leaderboard);