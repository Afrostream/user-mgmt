var Browse = React.createClass({
	showLock: function() {
	// We receive lock from the parent component in this case
	// If you instantiate it in this component, just do this.lock.show()

	//this.props.lock.show();
	},

	render: function() {
		return (
			<div>
				<h3>Logged In and Paid</h3>
				<p>You can now start to browse our video content!</p>
			</div>
		);
	}
});
