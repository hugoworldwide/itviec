import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Page() {
	let history = useHistory();
	let dispatch = useDispatch();
	let [email, setEmail] = useState(null);
	let [password, setPassword] = useState(null);

	function login(e) {
		e.preventDefault();
		let user = { email: email, password: password };
		dispatch({ type: "LOGIN", payload: user });
		history.push("/jobs");
	}

	function handleInputChange(event) {
		setEmail(event.target.value);
	}

	function handleInputPassword(event) {
		setPassword(event.target.value);
	}

	return (
		<>
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<form
							className="login100-form validate-form"
							onSubmit={(e) => login(e)}
						>
							<span className="login100-form-title">Member Login</span>
							<div
								className="wrap-input100 validate-input"
								data-validate="Valid email is required: ex@abc.xyz"
							>
								<input
									className="input100"
									type="text"
									name="email"
									placeholder="Email"
									onChange={(e) => handleInputChange(e)}
								/>
								<span className="focus-input100" />
								<span className="symbol-input100">
									<i className="fa fa-envelope" aria-hidden="true" />
								</span>
							</div>
							<div
								className="wrap-input100 validate-input"
								data-validate="Password is required"
							>
								<input
									className="input100"
									type="password"
									name="pass"
									placeholder="Password"
									onChange={handleInputPassword}
								/>
								<span className="focus-input100" />
								<span className="symbol-input100">
									<i className="fa fa-lock" aria-hidden="true" />
								</span>
							</div>
							<div className="container-login100-form-btn">
								<button type="submit" className="login100-form-btn">
									Login
								</button>
							</div>
							<div className="text-center p-t-12">
								<span className="txt1">Forgot</span>
								<a className="txt2" href="#">
									Username / Password?
								</a>
							</div>
							<div className="text-center p-t-136">
								<a className="txt2" href="#">
									Create your Account
									<i
										className="fa fa-long-arrow-right m-l-5"
										aria-hidden="true"
									/>
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
