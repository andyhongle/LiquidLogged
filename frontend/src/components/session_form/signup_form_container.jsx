import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { clearErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
	return {
		errors: Object.values(state.errors.session),
		formType: "Sign Up",
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (user) => dispatch(signup(user)),
		clearErrors: () => dispatch(clearErrors()),
		closeModal: () => dispatch(closeModal()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
