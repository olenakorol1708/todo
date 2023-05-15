import { Routes, Route} from 'react-router-dom';
import { Loginpage } from './pages/Loginpage';
import { Todopage } from './pages/Todopage';
import { Layout } from './components/Layout';

import './App.css';

function App() {
  return (
    <div className='todoapp'>

      <Routes>
        <Route path = '/' element = {<Layout/>}>
           <Route index  element={<Loginpage />} />
           <Route path="todo" element={<Todopage />} />
           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
