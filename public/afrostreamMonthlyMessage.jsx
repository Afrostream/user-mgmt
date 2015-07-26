var AfrostreamMonthlyMessage = React.createClass({
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
			localStorage.removeItem('afroToken');

			this.setState({
				loggedIn: false
			});
		},

		render: function() {

			if (this.state.loggedIn === true) {

				return (
					<div>
					<h3>You are subscribed to the formule "Think like a Man"</h3>
					<p>To start watching great movies and series on Afrostream,
						please visit us again on 1 October 2015!</p>
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
