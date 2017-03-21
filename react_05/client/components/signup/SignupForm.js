import React from "react";
import timezones from "../../data/timezones";
import map from "lodash/map";

export default class SignupForm extends React.Component {


  constructor() {
      super();
      this.state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        timezone:''
      }
      this.onChange  = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }
  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Confrim Password</label>
          <input type="text" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select className="form-control" name="timezone" onChange={this.onChange} value={this.state.timezone}>
            <option value="" disabled>Choose Your timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}
