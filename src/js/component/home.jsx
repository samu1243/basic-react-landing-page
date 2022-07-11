import React from "react";
import Jumbotron from "./static/jumbotron.jsx";
import Webnav from "./static/navbar.jsx";
import Cards from "./static/cards.jsx"
import Footer from "./static/footer.jsx";

const Home = () => {
	return (
		<div>
			<div className="text-center">
				<Webnav/>
			</div>
			<div className="body">
			<Jumbotron/>
				<div className="cards">

				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
