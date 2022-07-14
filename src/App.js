import './assets/App.css';
import './components/bouton_suivant/bouton_suivant.css';
import Bouton_suivant from "./components/bouton_suivant/bouton_suivant";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="wrapper">
          <Bouton_suivant />
        </div>
      </header>
    </div>
  );
}

export default App;
