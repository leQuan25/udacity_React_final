import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/styles.css"

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navitem">
          <Link to="/home">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li className="navitem">
          <Link to="/new">New</Link>
        </li>
        <ul className="navbar-right">
          <li className="navitem">
            {props.authedUser}
          </li>
          <li className="navitem">
            <Link to="/"> Logout </Link>
          </li>
        </ul>
        
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  const { authedUser } = state;
  return { authedUser: authedUser }
} 

export default connect(mapStateToProps)(Nav);
