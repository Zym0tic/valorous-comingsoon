import { HashRouter, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';

function App() {
  return (
    <div className="App">
      <HashRouter>
       <Routes>
        <Route path="/" element={<Welcome />} />
       </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
