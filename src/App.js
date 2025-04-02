import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import SEO from "./components/common/SEO/SEO";
import "./styles/global.css";
import "./i18n";

function App() {
	return (
		<HelmetProvider>
			<Router>
				<SEO />
				<MainLayout>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</MainLayout>
			</Router>
		</HelmetProvider>
	);
}

export default App;
