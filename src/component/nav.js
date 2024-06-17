import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className="header-nav fixed-top">
		<header>
			<h3>An aS</h3>
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#skills">My skills</a>
				<a href="#project">Project</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
	);
}

export default Navbar;