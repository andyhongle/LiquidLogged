import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { clearErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
	return {
		errors: Object.values(state.errors.session),
		formType: "Log In",
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (user) => dispatch(login(user)),
		processDemo: (user) => dispatch(login(user)),
		clearErrors: () => dispatch(clearErrors()),
		closeModal: () => dispatch(closeModal()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
