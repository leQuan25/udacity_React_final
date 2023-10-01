import { connect } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import {Fragment } from "react";
import {handleToggleQuestion} from "../actions/questions"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Poll = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    if(!props.userList.users) {
        return <Navigate replace={true} to='/404' />
    }

    let answerList = Object.keys(props.userList.users[props.authedUser].answers);
    
    const question = props.questions.questions[params.id];

    const {
        author,
        optionOne,
        optionTwo,
        id,
      } = question;

    const selectPoll = (e, optionText) => {
    e.preventDefault();
    props.dispatch(
        handleToggleQuestion({
            qid : id,
            authedUser: props.authedUser,
            answer: optionText,
        })
        );
     navigate("/home");
    }

    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
        <Fragment>
            <Nav></Nav>
            <div>
                <h3>Poll by {author}</h3>
                <img src={props.userList.users[author].avatarURL} />
                <h3>Would you rather</h3>

                <div>{optionOne.text}
                <br />
                <button disabled={answerList.includes(params.id)} onClick={(e) => selectPoll(e, 'optionOne')}>Click</button>
                <br />
                <p>Number people voted: {optionOne.votes.length}</p>
                {optionOne.votes.length !== 0 && totalVotes !== 0 ? <p>Percentage people voted: {Math.round((optionOne.votes.length / totalVotes) * 100)} %</p> : <p>Percentage people voted: 0%</p>}
                </div>
                <p> ------------------------------------------------------------------------------------</p>
                <div>{optionTwo.text}
                <br />
                <button disabled={answerList.includes(params.id)} onClick={(e) => selectPoll(e, 'optionTwo')}>Click</button>
                <br />
                <p>Number people voted: {optionTwo.votes.length}</p>
                {optionTwo.votes.length !== 0 && totalVotes !== 0 ? <p>Percentage people voted: {Math.round((optionTwo.votes.length / totalVotes) * 100)} %</p> : <p>Percentage people voted: 0%</p>}
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
    return {
      authedUser,
      questions: questions,
      userList: users,
    };
  };
  
  export default connect(mapStateToProps)(Poll);