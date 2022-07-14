import './assets/App.css';
import './components/bouton_suivant/bouton_suivant.css';
import Bouton_suivant from "./components/bouton_suivant/bouton_suivant";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tuto bouton</h1>
      </header>
      <Bouton_suivant />
    </div>
  );
}

export default App;
