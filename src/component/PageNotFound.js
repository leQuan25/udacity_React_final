import { connect } from "react-redux";


const PageNotFound = () => {
    return (
    	<div>
      		<p>404 Page not found</p>
    	</div>
  	);
};


export default connect()(PageNotFound);