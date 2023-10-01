import { useState } from "react";
import { handleInitialData } from "../actions/shared"
import { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/Login.png"

const Login = (props) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
  
    useEffect(() => {
        props.dispatch(handleInitialData());
      }, []);


    const handleChangeUserName = (e) => {
        const text = e.target.value;
        setUserName(text);
      };

    const handleChangePassWord = (e) => {
        const text = e.target.value;
        setPassWord(text);
      };
   
      function handleLogin(userName, password, userList){
        for (const key in userList.users) {
            if (userList.users[key].id === userName && userList.users[key].password === password) {
                return true;
            }
        }
        return false;
    }

      const handleSubmit = (e) => {
        e.preventDefault();        
        if (handleLogin(userName, passWord, props.userList)) {
            props.dispatch(setAuthedUser(userName));
            navigate("/home");
        } else {
            alert("Wrong user or password");
        }
      };

    return (
        <div>
            <h3>Employee Polls</h3>
            <img src={loginImage} />
            <h3>Login</h3>

        <form className="login" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username"
            data-testid="username"
            name="username" 
            placeholder="User" 
            value={userName}
            onChange={handleChangeUserName} />
            <br></br>
            
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            data-testid="password"
            name="password" 
            placeholder="Password"
            value={passWord}
            onChange={handleChangePassWord}
            />
            <br></br>
            
            <button data-testid="submitButton" className="btn" type="submit" disabled={userName === "" && passWord === ""}>
            Submit
            </button>
        </form>  
        </div>
    );
};


function mapStateToProps(state) {
    const { users } = state;
    return { userList: users }
} 

export default connect(mapStateToProps)(Login);