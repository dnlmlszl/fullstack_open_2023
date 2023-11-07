import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Notification from './components/Notification';
import Footer from './components/Footer';
import AnecdoteList from './pages/AnecdoteList';
import About from './pages/About';
import CreateNew from './pages/CreateNew';
import Anecdote from './pages/Anecdote';

const App = () => {
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
        <Menu />
        <Notification />
        <Routes>
          <Route path="/" element={<AnecdoteList />} />
          <Route path="/anecdotes/:id" element={<Anecdote />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateNew />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
