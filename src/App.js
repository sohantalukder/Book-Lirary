import './App.css';
import Header from './components/header/Header';
import Library from './components/library/Library';
import Store from './components/store/Store';

function App() {
  return (
    <div>
      <Header></Header>
      <Store/>
      <Library></Library>
    </div>
  );
}

export default App;
