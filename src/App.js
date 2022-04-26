import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path='/Home' element={<Home/>}></Route>
					<Route path='/About' element={<About/>}></Route>
					<Route path='/Contact' element={<Contact/>}></Route>
					<Route path='/Products' element={<Products/>}></Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	);
}

export default App;
