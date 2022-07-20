import React, {useState} from 'react';
import "../ModalWindow/SingUpWin.scss"
import {Link, useLocation} from "react-router-dom"

const SingUpWin = ({active, setActive}) => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailUnCorrect, setEmailUnCorrect] = useState(false);
	const [passwordUnCorrect, setPasswordUnCorrect] = useState(false);
	const [emailError, setEmailError] = useState('Email cannot be empty');
	const [passwordError, setPasswordError] = useState('Password cannot be empty');
	
	const emailHandler = (e) => {
		setEmail(e.target.value);
		const s = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!s.test(String(e.target.value))){
			setEmailError('Email is not correct');
		} else setEmailError('');
	}
	
	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if(e.target.value.length<8){
			setPasswordError('Password is not correct');
		} else setPasswordError('');
	}
	
	const blurHandler = (e) => {
		switch (e.target.name){
			case 'email':
				setEmailUnCorrect(true);
				break;
			case 'password':
				setPasswordUnCorrect(true);
				break;
		}
	}
	
	const [change, setChange] = useState(false);
	
	const changeWin = () => {
		setChange(!change);
	}
	
	return (
		<div className={active ? "singUp-box active" : "singUp-box"} onClick={() => setActive(false)}>
			<div className="singUp-content" onClick={e => e.stopPropagation()}>
				<form className="registration">
					<p>{change ? 'Log In' : 'Sing Up'}</p>
					<input name="username" type="text" placeholder="Username..." className={change ? "input-Username" : ""}></input>
					{(emailUnCorrect && emailError) && <div style={{color:"red"}}>{emailError}</div>}
					<input onChange={emailHandler} value={email} onBlur={blurHandler} name="email" type="text" placeholder="Enter your email..."></input>
					{(passwordUnCorrect && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
					<input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."></input>
					<div className="wind-links">
						<a className="input-links" to="">Forgot password?</a>
						<a className="input-links" to="" onClick={() => changeWin(true)}>{change ? 'Have no account? Sign In' : 'Have an account? Log In'}</a>
					</div>
					<div className="wind-Buttons">
						<a href="#" className="buttonReg">{change ? "Log In" : "Registration"}</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SingUpWin;