import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/register">Register</NavLink>
		</>
	);
};

export default Nav;
