var LoggedIn = React.createClass({
  callApi: function() {
  $.ajax({
    url: 'http://localhost:3002/api/subscriptions',
    method: 'GET'
  }).then(function(data, textStatus, jqXHR) {
    alert("The request to the secured enpoint was successfull");
  }, function() {
    alert("You need to download the server seed and start it to call this API");
  });
},

getInitialState: function() {
  return {
    profile: null
  }
},

componentDidMount: function() {
  this.props.lock.getProfile(this.props.idToken, function (err, profile) {
    if (err) {
      console.log("Error loading the Profile", err);
      alert("Error loading the Profile");
    }
    this.setState({profile: profile});
  }.bind(this));
},

render: function() {
  if (this.state.profile) {
    console.log('*** here is the user profile ***');
    console.log(this.state.profile);
    console.log('*** end of the profile info ***');
    console.log(this.state.profile.paymentStatus);
    console.log('*** end of payment status ***');

    if ( (typeof this.state.profile.paymentStatus != 'undefined')
      && (this.state.profile.paymentStatus === true) ) {

      return (<Browse lock={this.lock} idToken={this.state.idToken} profile={this.state.profile}  />);
    } else {

      return (<Payment lock={this.lock} idToken={this.state.idToken} profile={this.state.profile} />);
    }
  } else {

      return (<div></div>);
  }
}

});