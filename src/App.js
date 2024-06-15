import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieTable from './components/MovieTable';
import { Provider } from 'react-redux';
import store from './store';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" Component={MovieSearch}></Route>
        <Route path="/details" Component={MovieDetails}></Route>
    
    </Routes>
    </Router>
    </Provider>
  );
}

export default App;
