import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Logs from './Components/Logs';
import LogDetails from './Components/LogDetails';


function App() {
  return (
    <div className='App'>
      <Nav />
      <main>
        <h1>Captain's Log</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/:index" element={<LogDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
