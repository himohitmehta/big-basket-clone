import {
	AppBar,
	Toolbar,
	Container,
	Button,
	Menu,
	Box,
	List,
	MenuItem,
	Badge,
	Tooltip,
	IconButton,
} from "@mui/material";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import BigBasketIcon from "../../assets/icons/big-basket-icon";
import React from "react";
import categoriesList from "../../constants/CategoriesList";
import LoginDialog from "../common/LoginDialog";
import { useDispatch, useSelector } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal,
} from "../../store/cart/cart.selectors";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { signOutUser } from "../../store/user/userSlice";
import { toast } from "sonner";

const mapCartState = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	count: selectCartItemsCount,
});

const mapState = ({ user, cart }) => ({
	currentUser: user.currentUser,
});
// the app header component to handle the app navigation and search
export default function AppHeader() {
	// react router hook to navigate in the application
	const navigate = useNavigate();

	const dispatch = useDispatch();
	// handle the back button click to navigate to the previous page
	// const handleBackButton = () => {
	// 	navigate(-1);
	// };
	const { currentUser } = useSelector((state) => state.user);
	const { cartItems, total, count } = useSelector(mapCartState);

	const data = categoriesList;
	const [anchorEl, setAnchorEl] = React.useState(null);

	const [selectedMenu, setSelectedMenu] = React.useState(data[0].subMenu);
	const [selectedSubMenu, setSelectedSubMenu] = React.useState(
		selectedMenu[0].subMenu,
	);
	const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClickLoginButton = () => {
		console.log("login button clicked");
		setOpenLoginDialog(true);
	};
	const handleLogout = () => {
		dispatch(signOutUser());
		toast.success("Logged out successfully!");
	};
	return (
		<AppBar
			color={"default"}
			elevation={4}
			position="fixed"
			sx={{ m: 0, background: "white" }}
		>
			<Toolbar>
				<Container
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					{/* check if the AppHeader is used in home page or movie detail page
					then render the appropriate component
					*/}
					<Box sx={{ display: "flex" }}>
						<Link to="/">
							<BigBasketIcon />
						</Link>
						<Button
							onClick={handleClick}
							size="small"
							variant="contained"
							sx={{
								ml: 2,
								textTransform: "none",
								px: 2,
								background: "#5E9400",
								"&:hover": {
									background: "#5E9400",
								},
							}}
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
						>
							Shop By Categories
						</Button>
					</Box>
					<SearchInput />
					<Box>
						<Tooltip title={"cart"}>
							<IconButton
								// onClick={() => router.push("/cart")}
								sx={{ mr: 3 }}
							>
								<Badge
									badgeContent={count ?? 0}
									color="success"
								>
									{" "}
									<ShoppingBagOutlined color="black" />
								</Badge>
							</IconButton>{" "}
						</Tooltip>
						{currentUser.email ? (
							<>
								{/* <Button
									sx={{
										textTransform: "initial",
										mx: 2,
									}}
								>
									Logged in {currentUser.email}
								</Button> */}

								{currentUser.userRoles.includes("admin") && (
									<Link to="/admin">Admin</Link>
								)}
								<Button
									sx={{
										textTransform: "initial",
										mx: 2,
									}}
									onClick={() => handleLogout()}
								>
									Logout
								</Button>
							</>
						) : (
							<Button
								onClick={() => handleClickLoginButton()}
								sx={{
									background: "black",
									textTransform: "initial",
									color: "white",
									"&:hover": {
										background: "black",
										color: "white",
									},
								}}
							>
								Login / Sign up
							</Button>
						)}
					</Box>
				</Container>
			</Toolbar>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				sx={{
					background: "rgba(0,0,0,0.2)",
				}}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							mt: 1.5,
							background: "transparent",
						},
					},
				}}
				transformOrigin={{
					horizontal: "left",
					vertical: "top",
				}}
				anchorOrigin={{
					horizontal: "left",
					vertical: "bottom",
				}}
			>
				<Box
					sx={{
						display: "flex",
						borderRadius: "8px",
						overflow: "hidden",
					}}
				>
					<List sx={{ p: 1, background: "#202020", my: 0 }}>
						{data.map((item) => {
							return (
								<MenuItem
									sx={{
										color: "white",
										borderRadius: "4px",
										"&:hover": {
											background: "rgba(255,255,255,0.2)",
										},

										fontSize: "13.2px",
										fontWeight: 500,
									}}
									key={item.title}
									onMouseEnter={() => {
										setSelectedMenu(item.subMenu);
										if (
											Array.isArray(
												item.subMenu[0].subMenu,
											) &&
											item.subMenu[0].subMenu.length > 0
										) {
											setSelectedSubMenu(
												item.subMenu[0].subMenu,
											);
										}
									}}
									onClick={() =>
										item.key && navigate(`/${item.key}`)
									}
								>
									{item.title}
								</MenuItem>
							);
						})}
					</List>
					<List sx={{ p: 1, background: "#EEEEEE" }}>
						{selectedMenu.map((item) => {
							return (
								<MenuItem
									key={item.title}
									sx={{
										fontSize: "13.2px",
										fontWeight: 500,
									}}
									onMouseEnter={() => {
										if (
											Array.isArray(item.subMenu) &&
											item.subMenu.length > 0
										) {
											setSelectedSubMenu(item.subMenu);
										}
									}}
									onClick={() =>
										item.key && navigate(`/${item.key}`)
									}
									// slot={Link}
									// to={`?category=${item.key}`}
								>
									{item.title}
								</MenuItem>
							);
						})}
					</List>
					<List sx={{ p: 1, background: "#FFFFFF" }}>
						{Array.isArray(selectedSubMenu) &&
							selectedSubMenu.map((item) => {
								return (
									<MenuItem
										key={item.title}
										sx={{
											fontSize: "13.2px",
											fontWeight: 500,
										}}
										onClick={() =>
											item.key && navigate(`/${item.key}`)
										}

										// slot={Link}
										// to={`?subCategory=${item.key}`}
									>
										{item.title}
									</MenuItem>
								);
							})}
					</List>
				</Box>
			</Menu>
			<LoginDialog
				open={openLoginDialog}
				handleClose={() => setOpenLoginDialog(false)}
			/>
		</AppBar>
	);
}
// prop types for the AppHeader component
AppHeader.propTypes = {
	usedIn: PropTypes.oneOf(["home", "detail"]),
};
