import './App.css';
import QuotesSlider from './QuotesSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <QuotesSlider interval={5000} quotesfileurl="./quotes.json"
        />
      </header>
    </div>
  );
}

export default App;
