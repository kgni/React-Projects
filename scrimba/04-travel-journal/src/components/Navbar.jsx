import Logo from '../images/Logo.svg';

function Navbar() {
	return (
		<nav>
			<img src={Logo} alt="" />
			<h3>my travel journal.</h3>
		</nav>
	);
}

export default Navbar;
