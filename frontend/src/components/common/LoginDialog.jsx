import {
	Box,
	Button,
	Dialog,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

import PropTypes from "prop-types";
import loginBg from "../../assets/big-basket-login-image.png";
import API_URL from "../../constants/API_URL";
import React from "react";
import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/userSlice";
import { toast } from "sonner";
export default function LoginDialog({ open, handleClose }) {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [cookies, setCookie] = useCookies(["access_token"]);
	const dispatch = useDispatch();
	const handleClickLoginButton = (e) => {
		e.preventDefault();
		console.log("login button clicked");
		const URL = API_URL.AUTH.LOGIN;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email, password: password }),
		};
		fetch(URL, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === "success") {
					setCookie("access_token", data.result.token, {
						path: "/",
						domain: import.meta.env.DEV
							? "localhost"
							: ".vercel.app",
					});
					dispatch(setCurrentUser(data.result));
					toast.success(data.message);
					handleClose();
				}
				if (data.status === "error") {
					toast.error(data.message || data.error);
				}
				console.log(data);
			})
			.catch((error) => {
				toast.error(error.message || error.error);
			});
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<Box
				sx={{
					display: "flex",
					maxWidth: "100%",
				}}
			>
				<img
					src={loginBg}
					alt="app helper image"
					className="bg-image"
				/>
				<Box sx={{ p: 2, minWidth: "320px" }}>
					<Typography variant="h5" mb={2}>
						Login / Sign Up
					</Typography>
					<Stack component={"form"} onSubmit={handleClickLoginButton}>
						<TextField
							label="Enter Email"
							size="small"
							placeholder="Enter Email"
							sx={{ my: 2 }}
							value={email}
							type="email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							size="small"
							label="Enter Password"
							placeholder="Enter Password"
							sx={{ mb: 2 }}
							type="password"
							value={password}
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button
							type={"submit"}
							variant="contained"
							sx={{ textTransform: "none" }}
						>
							{" "}
							Login
						</Button>
					</Stack>
				</Box>
			</Box>
		</Dialog>
	);
}

LoginDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};
