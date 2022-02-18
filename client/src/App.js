import React, { useState} from 'react'
import "./App.css"

import Instructions from './components/Instructions'
import Footer from './components/Footer'
import Home from './components/Home'
import Admin from './components/Admin'
import Game from './components/Game'
import LoginSignUp from './components/LoginSignUp'

function App() {
	// States
	const [route, setRoute] = useState('Game')

	const handleRoute = (event) => {
		setRoute(event.target.value)
		console.log(event.target.value)
	}


	return (
		<div className="App">

			{(() => {
        		switch (route) {
         			case 'Home':
            			return <Home />
         			case 'Game':
            			return <Game />
          			case 'Login-sign-up':
            			return <LoginSignUp />
					case 'Instructions':
            			return <Instructions />
          			case 'Admin':
            			return <Admin />
          			default:
            			return null
        		}
      		})()}
			<Footer 
				handleRoute={handleRoute}
				route = {route}
			/>
		</div>
	);
}

export default App