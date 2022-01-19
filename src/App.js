import './App.css';
import Transaction from './components/Transaction';
import TRANSACTION_DATA from './mock-data';

function App() {
  return (
    <div className="App container">
      {TRANSACTION_DATA.map((t, i) =>
        <Transaction user={t.user} amount={t.amount} date={t.date} place={t.place} key={i} />
      )}
      <Transaction />
    </div>
  );
}

export default App;
