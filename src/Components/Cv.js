import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



function Navh() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="mobdev">
			<h3>Shubham Roy</h3>
			<nav ref={navRef}>
				<a href="#home"onClick={showNavbar}>Home </a>
				<a href="#experience"onClick={showNavbar}>Experience</a>
				<a href="#education" onClick={showNavbar}>Education</a>
				<a href="#skills" onClick={showNavbar}>Skills</a>
                <a href="#projects" onClick={showNavbar}>Projects</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navh;