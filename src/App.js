import logo from './logo.svg';
import './App.css';
import ViewQuotes from './Components/ViewQuotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuotes from './Components/AddQuotes';
import SearchQuotes from './Components/SearchQuotes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<AddQuotes/>}/>
      <Route path='/searchq' exact element={<SearchQuotes/>}/>
      <Route path='/viewq' exact element={<ViewQuotes/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
