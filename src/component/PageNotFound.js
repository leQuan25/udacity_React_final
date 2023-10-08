import { connect } from "react-redux";
import Nav from "./Nav";

const PageNotFound = () => {
    return (
    	<div>
			<Nav></Nav>
      		<p>404 Page not found</p>
    	</div>
  	);
};


export default connect()(PageNotFound);