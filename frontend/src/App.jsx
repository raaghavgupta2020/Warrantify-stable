import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Styling
import "./App.css";
import home from "./components/home/home";
import Login from "./components/login/login";
import CreatorLogin from "./components/login/creatorLogin";
import SignupForm from "./components/login/creatorLoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Common from "./Common";
import creatorNFTMint from "./components/creatorNFTMint";
import AdminItems from "./components/AdminItems";
import UserNFT from "./components/UserNFT";
import Start from "../src/starting/Start"
import sample from "./sample";
import DynamicCard from "./components/DynamicCard";
// import { Resale } from "./Resale";
import Resale from "./Resale";
import UserNFTDetailed from "./components/UserNFTDetailed";
class App extends Component {
	render() {
		return (
			<div className="">
				<Switch>
					{/* <Route exact path="/" component={Common} /> */}
					<Route exact path="/" component={Start} />
					<Route exact path="/qr/:id" component={DynamicCard} />
					<Route exact path="/landingPage" component={Common} />
					<Route exact path="/loginuser" component={Login} />
					<Route exact path="/logincreator" component={CreatorLogin} />
					<Route exact path="/signupform" component={SignupForm} />
					<Route exact path="/home" component={home} />
					{/* <Route path="/creator/:id" component={creatorprofile} /> */}
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/nftmint" component={creatorNFTMint} />
					<Route path="/adminitems" component={AdminItems} />
					<Route path="/usernfts" component={UserNFT} />
					<Route path="/usernftsdetailed" component={UserNFTDetailed} />
					<Route path="/repair" component={sample} />
					<Route path="/resale" component={Resale}/>
				</Switch>
			</div>
		);
	}
}
export default App;
