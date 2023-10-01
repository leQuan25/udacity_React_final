
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared"
import {formatDate} from "../utils/helpers"
import { useNavigate } from "react-router-dom";
import {Fragment } from "react";
import Nav from "./Nav";

const HomePage = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.dispatch(handleInitialData());
      }, []);

      let answerList = Object.keys(props.userList.users[props.authedUser].answers);

      const resultFilter = {
        unanswerList:  Object.values(props.questionList.questions).filter(questions => !answerList.includes(questions.id)),
        answerList:  Object.values(props.questionList.questions).filter(questions => answerList.includes(questions.id)),
      };

    const showDetailPoll = (e, id) => {
        e.preventDefault();
        navigate(`/poll/${id}`);
    }

    return (
        <Fragment>
            <Nav></Nav>
            <div>
                        <div>
                            <h3>New Questions</h3>
                            <ul>
                            {resultFilter.unanswerList.sort((a,b) => b.timestamp.valueOf() - a.timestamp.valueOf()).map((que) => (
                                    <li key={que.id}>
                                        {que.author}<br />
                                        {formatDate(que.timestamp)}<br />
                                        <button onClick={(e) => showDetailPoll(e, que.id)}>Show</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Done</h3>
                            <ul>
                            {resultFilter.answerList.sort((a,b) => b.timestamp.valueOf() - a.timestamp.valueOf()).map((que) => (
                                    <li key={que.id}>
                                    {que.author}<br />
                                    {formatDate(que.timestamp)}<br />
                                    <button onClick={(e) => showDetailPoll(e, que.id)}>Show</button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
            </Fragment>
    );
};


function mapStateToProps(state) {
    const { users, questions, authedUser } = state;
    return { userList: users,
             questionList: questions,
             authedUser: authedUser, }
} 

export default connect(mapStateToProps)(HomePage);
