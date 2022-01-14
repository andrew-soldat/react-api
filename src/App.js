import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import { IsAuthProvider } from './isAuthContext';


function App() {

   return (
		<IsAuthProvider>
			<BrowserRouter>
			<div className="wrapper">
				<Header />
				<AppRouter />
				{/* <Footer /> */}
			</div>
			</BrowserRouter>
		</IsAuthProvider>
   );
}

export default App;