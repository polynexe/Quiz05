import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
// import LeftSideBar from './components/LeftSideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <LeftSideBar /> */}
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
