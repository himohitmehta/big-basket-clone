import { InputBase, alpha } from "@mui/material";
import { styled } from "@mui/material";
import { useEffect } from "react";
import { useSubmit } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { Search as SearchIcon } from "@mui/icons-material";

// the loader method to load the data for the search input, it return the q parameter from the url
export async function loader({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q");
	// const movies = await getMovies(q);
	return { q };
}

//  the search input component, styled with material ui,
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.lightGray, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.gray, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

// search icon wrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

// the styled input base component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "45ch",
			"&:focus": {
				// width: "68ch",
			},
		},
	},
}));

export default function SearchInput() {
	/** q parameter from the url, used to search for movies, it is returned from the loader method, we are using the useLoaderData hook to get the data
	from the loader method
	 */
	const { q } = useLoaderData();
	const navigation = useNavigation();
	const submit = useSubmit();

	// set the value of the search input to the q parameter from the url
	useEffect(() => {
		document.getElementById("q").value = q;
	}, [q]);
	// check if the user is searching for a movie
	// const searching =
	// 	navigation.location &&
	// 	new URLSearchParams(navigation.location.search).has("q");

	return (
		<div>
			{/* Form is the component imported from  */}
			<Form id="search-form" role="search">
				<Search>
					<SearchIconWrapper>
						<SearchIcon
							sx={{
								color: (theme) => theme.palette.lightGray,
							}}
						/>
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search for products…"
						inputProps={{ "aria-label": "search" }}
						id="q"
						aria-label="Search Movies"
						type="search"
						name="q"
						defaultValue={q}
						onChange={(event) => {
							const isFirstSearch = q == null;
							submit(event.currentTarget.form, {
								replace: !isFirstSearch,
							});
						}}
						// className={searching ? "loading" : ""}
					/>
				</Search>
			</Form>{" "}
		</div>
	);
}
