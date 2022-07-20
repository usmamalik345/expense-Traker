import './App.css';
import Header from './Components/Header';
import Blance from './Components/Blance';
import IncomeExpensive from './Components/IncomeExpensive';
import Transition from './Components/Transition';
import AddTransition from './Components/AddTransition';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="container">
          <Blance />
          <IncomeExpensive />
          <Transition />
          <AddTransition />
        </div>

        

    </div>
  );
}

export default App;
