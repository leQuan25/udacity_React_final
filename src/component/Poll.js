import { connect } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import {Fragment } from "react";
import {handleToggleQuestion} from "../actions/shared"
import Nav from "./Nav";

const Poll = (props) => {
    const params = useParams();

    if(!props.questions[params.id]) {
        return <Navigate replace={true} to='/404' />
    }

    let answerList = props.users[props.authedUser].answers;
    
    const question = props.questions[params.id];

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
    }

    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
        <Fragment>
            <Nav></Nav>
            <div>
                <h3>Poll by {author}</h3>
                <img src={props.users[author].avatarURL} />
                <h3>Would you rather</h3>

                <div>{optionOne.text}
                <br />
                <button disabled={Object.keys(answerList).includes(params.id)} onClick={(e) => selectPoll(e, 'optionOne')}>{answerList[params.id] === 'optionOne'? 'Option user choosen' : 'click'}</button>
                <br />
                <p>Number people voted: {optionOne.votes.length}</p>
                {optionOne.votes.length !== 0 && totalVotes !== 0 ? <p>Percentage people voted: {Math.round((optionOne.votes.length / totalVotes) * 100)} %</p> : <p>Percentage people voted: 0%</p>}
                </div>
                <p> ------------------------------------------------------------------------------------</p>
                <div>{optionTwo.text}
                <br />
                <button disabled={Object.keys(answerList).includes(params.id)} onClick={(e) => selectPoll(e, 'optionTwo')}>{answerList[params.id] === 'optionTwo'? 'Option user choosen' : 'click'}</button>
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
      questions,
      users,
    };
  };
  
  export default connect(mapStateToProps)(Poll);