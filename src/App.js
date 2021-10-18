
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';

import Menu from './components/navbar/Menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Header></Header>
    </div>
  );
}

export default App;
