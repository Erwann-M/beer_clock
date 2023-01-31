import './App.scss';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='app-header__title'>C'est quand la bière ?</h1>
        <p className='app-header__subtitle'>Si tu pensais voir l'heure, c'est rapper !</p>
      </header>
      <div className='app-body'>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
