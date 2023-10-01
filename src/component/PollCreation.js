import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import {Fragment } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch }) => {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
  

    const handleChangeOptionOne = (e) => {
        const text = e.target.value;
        setOptionOne(text);
      };

    const handleChangeOptionTwo = (e) => {
        const text = e.target.value;
        setOptionTwo(text);
      };
   

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(optionOne,optionTwo));
        navigate("/home");
      };

    return (
        <Fragment>
            <Nav></Nav>
            <div>
                <h3>Would you rather</h3>
                <h1>Create yout own poll</h1>

                <form className="login" onSubmit={handleSubmit}>
                    <label htmlFor="optionOne">First option:</label>
                    <input 
                    type="text" 
                    id="optionOne" 
                    data-testid="optionOne"
                    name="optionOne" 
                    placeholder="Option One" 
                    value={optionOne}
                    onChange={handleChangeOptionOne} />
                    <br></br>
                    
                    <label htmlFor="optionTwo">Second option:</label>
                    <input 
                    type="text" 
                    id="optionTwo" 
                    data-testid="optionTwo"
                    name="optionTwo" 
                    placeholder="Option Two"
                    value={optionTwo}
                    onChange={handleChangeOptionTwo}
                    />
                    <br></br>
                    
                    <button data-testid="submitButton" className="btn" type="submit" disabled={optionOne === "" && optionTwo === ""}>
                    Submit
                    </button>
                </form>  
            </div>
        </Fragment>
    );
};

export default connect()(NewPoll);