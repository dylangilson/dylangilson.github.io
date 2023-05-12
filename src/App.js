/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * January 31, 2022 (Start date of project)
 */

// NOTE: launch webapp locally with command: yarn start
// NOTE: update the git by running the following commands: git add . ; git commit -m "message" ; git push origin master ; npm run deploy

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages"
import TetrisAI from "./Pages/TetrisAI";
import GameBoyC from "./Pages/GameBoyC";
import BlueJuly from "./Pages/BlueJuly";
import CellularAutomata from "./Pages/CellularAutomata";
import ReactWebsite from "./Pages/ReactWebsite"
import EmailForm from "./Pages/EmailForm/EmailForm";

const App = () => {
	return (
		<>
			<HashRouter basename='/'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/TetrisAI' element={<TetrisAI />} />
					<Route path='/GameBoyC' element={<GameBoyC />} />
					<Route path='/BlueJuly' element={<BlueJuly />} />
					<Route path='/CellularAutomata' element={<CellularAutomata />} />
					<Route path='/' element={<ReactWebsite />} />
					<Route path='/EmailForm' element={<EmailForm />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
