var Browse = React.createClass({
	showLock: function() {
	// We receive lock from the parent component in this case
	// If you instantiate it in this component, just do this.lock.show()

	//this.props.lock.show();
	},

	getInitialState: function() {
		return {
			loggedIn: true
		}
	},

	logOut: function() {

		console.log('*** this dude is logging out!!! ***');
		localStorage.removeItem('userToken');

		this.setState({
			loggedIn: false
		});
	},

	render: function() {

		if (this.state.loggedIn === true) {

			return (
				<div>
					<h3>Logged In and Paid</h3>
					<p>You can now start to browse our video content!</p>
					<button
						id="subscribe"
						form="subscription-create"
						className="btn btn-primary"
						onClick={this.logOut}>Log Out
					</button>
				</div>
			);
		} else {
			return (<Home lock={this.props.lock} />);
		}
	}
});
