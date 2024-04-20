import { useEffect, useRef } from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Layout = () => {
	const divRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (divRef.current) {
			divRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.pathname]);

	return (
		<div className="app" ref={divRef}>
			<Nav />
		</div>
	);
};

export default Layout;
