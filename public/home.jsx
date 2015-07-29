var Home = React.createClass({

  showSigninLock: function() {

    this.props.lock.show(
      {
        dict: 'fr',
        connections: ['Username-Password-Authentication', 'facebook'],
        socialBigButtons: true,
        disableSignupAction: true
      }
    );
  },

  showSignupLock: function() {

    this.props.lock.showSignup(
      {
        dict: 'fr',
        connections: ['Username-Password-Authentication', 'facebook'],
        socialBigButtons: true
      }
    );
  },

  render: function() {
    return (
    <div className="login-box auth0-box before">
      <img src="https://i.cloudup.com/StzWWrY34s.png" />
      <h3>Auth0 Example</h3>
      <p>Zero friction identity infrastructure, built for developers</p>
      <a onClick={this.showSigninLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
      <a onClick={this.showSignupLock} className="btn btn-primary btn-lg btn-login btn-block">Sign Up</a>
    </div>);
  }
});
