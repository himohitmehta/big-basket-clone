import { MenuItem, styled } from "@mui/material";

import PropTypes from "prop-types";
const StyledMenuItem = styled(MenuItem)(({ theme, ...props }) => ({
	...props,
    ...theme,
    
}));
export default function HeaderMenuItem({ children, ...props }) {
	return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
}

StyledMenuItem.propTypes = {
	children: PropTypes.node.isRequired,
};
