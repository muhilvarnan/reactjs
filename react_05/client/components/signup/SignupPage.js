import React from "react";
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {userSignupRequest, isUserExists } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <SignupForm  addFlashMessage={addFlashMessage} isUserExists={isUserExists} userSignupRequest={userSignupRequest} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null,{userSignupRequest, addFlashMessage, isUserExists})(SignupPage)
