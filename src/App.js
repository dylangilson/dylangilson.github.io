/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * January 31, 2022 (Start date of project)
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages'
import BlueJuly from "./Pages/BlueJuly";
import RustBoy from "./Pages/RustBoy";
import VoxelEngine from "./Pages/VoxelEngine";
import EmailForm from "./Pages/EmailForm/EmailForm";

const App = () => {
	return (
		<>
			<HashRouter basename='/'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/BlueJuly' element={<BlueJuly />} />
					<Route path='/RustBoy' element={<RustBoy />} />
					<Route path='/VoxelEngine' element={<VoxelEngine />} />
					<Route path='/EmailForm' element={<EmailForm />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
