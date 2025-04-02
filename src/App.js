import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import "./styles/global.css";

function App() {
	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Add more routes as your site grows */}
				</Routes>
			</MainLayout>
		</Router>
	);
}

export default App;
