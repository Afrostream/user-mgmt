var App = React.createClass({
  componentWillMount: function() {
    this.setupAjax();
    this.createLock();
    this.setState({idToken: this.getIdToken()})
  },
  createLock: function() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  },
  setupAjax: function() {
    $.ajaxSetup({
      'beforeSend': function(xhr) {
        if (localStorage.getItem('afroToken')) {
          xhr.setRequestHeader('Authorization',
                'Bearer ' + localStorage.getItem('afroToken'));
        }
      }
    });
  },
  getIdToken: function() {
    console.log('*** here is the local storage ***');
    console.log(localStorage);
    console.log('*** end of local storage ***');

    var idToken = localStorage.getItem('afroToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('afroToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  },
  render: function() {
    console.log('*** here is the app state ***');
    console.log(this.state);

    console.log('*** end of app state ***');
    if (this.state.idToken) {
      return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);
    } else {
      return (<Home lock={this.lock} />);
    }
  }
});
