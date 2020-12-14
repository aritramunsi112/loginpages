import React from "react";
import ReactDOM from "react-dom";
//"ui placeholder segment"
class LoginPage extends React.Component {
  //initializing state
  state = { user: "", pw: "", sign_up: "" };

  on_InputChangeuser = (event) => {
    this.setState({ user: event.target.value });

    console.log(event.target.value);
  };

  on_InputChangepw = (event) => {
    this.setState({ pw: event.target.value });
    console.log(event.target.value);
  };

  on_InputSignup = () => {
    console.log("signup buton was clicked");
  };

  on_InputLogin = (event) => {
    event.preventDefault();
    console.log("Login button was clicked");
    console.log(`entered username is ->${this.state.user}`);
    console.log(`entered password is ->${this.state.pw}`);
  };

  render() {
    return (
      <div id="Middle" className="segment centered">
        <div className="ui placeholder segment">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="ui two column very relaxed stackable  grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="Username"
                      value={this.state.user}
                      onChange={this.on_InputChangeuser}
                    ></input>
                    <i className="blue user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      type="password"
                      placeholder="Password"
                      value={this.state.pw}
                      onChange={this.on_InputChangepw}
                    ></input>
                    <i className="blue lock icon"></i>
                  </div>
                </div>
                <div
                  onClick={this.on_InputLogin}
                  className="ui blue submit button"
                >
                  Login
                </div>
              </div>
            </div>
            <div className="middle aligned column">
              <div onClick={this.on_InputSignup} className="ui blue big button">
                <i className="signup icon"></i>
                Sign Up
              </div>
            </div>
          </div>
          <div className="ui vertical divider">OR</div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="ui  buttons">
            <button className="ui facebook icon button">
              <i className="facebook icon"></i>
              facebook
            </button>
            <button className="ui  twitter button">
              <i className="twitter icon"></i>
              twitter
            </button>
            <button className="ui  google plus button">
              <i className="google plus icon"></i>
              google-plus
            </button>
            <button className="ui  linkedin button">
              <i className="linkedin icon"></i>
              linkedin
            </button>
            <button className="ui  instagram button">
              <i className="instagram icon"></i>
              instagram
            </button>
            <button className="ui  youtube button">
              <i className="youtube icon"></i>
              youtube
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
