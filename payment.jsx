var Payment = React.createClass({

	onSubmit: function(e) {

		e.preventDefault();
	},

	showLock: function() {
	// We receive lock from the parent component in this case
	// If you instantiate it in this component, just do this.lock.show()

	//this.props.lock.show();
	},

	renderPaymentForm: function() {
		;
	},

	render: function() {

		return (
			<div>
				<h3>Logged in, not yet paid</h3>
				<p>Please select a plan: </p>
				<SelectPlan profile={this.props.profile} />
			</div>
		);
	}
});
