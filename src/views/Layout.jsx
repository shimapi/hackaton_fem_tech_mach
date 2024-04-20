import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
	const divRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (divRef.current) {
			divRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.pathname]);

	return (
		<>
			<Outlet />
		</>
	);
};

export default Layout;
