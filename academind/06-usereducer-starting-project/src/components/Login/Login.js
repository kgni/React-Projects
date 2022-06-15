import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../Input/Input';

function emailReducer(state, action) {
	if (action.type === 'USER_INPUT_EMAIL') {
		return { value: action.payload, isValid: action.payload.includes('@') };
	}

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}

	return { value: '', isValid: false };
}

function passwordReducer(state, action) {
	if (action.type === 'USER_INPUT_PASSWORD') {
		return { value: action.payload, isValid: action.payload.trim().length > 6 };
	}

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
}

const Login = (props) => {
	const authCtx = useContext(AuthContext);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

	useEffect(() => {
		setFormIsValid(emailState.isValid && passwordState.isValid);
	}, [emailState.isValid, passwordState.isValid]);

	// useEffect(() => {
	//   const identifier = setTimeout(() => {
	//     console.log('Checking form validity!');
	//     setFormIsValid(
	//       enteredEmail.includes('@') && enteredPassword.trim().length > 6
	//     );
	//   }, 500);

	//   return () => {
	//     console.log('CLEANUP');
	//     clearTimeout(identifier);
	//   };
	// }, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT_EMAIL', payload: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({
			type: 'USER_INPUT_PASSWORD',
			payload: event.target.value,
		});
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.loginHandler(emailState.value, passwordState.value);
		} else if (!emailState.isValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					label="E-Mail"
					type="email"
					isValid={emailState.isValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id="password"
					label="Password"
					type="password"
					isValid={passwordState.isValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
