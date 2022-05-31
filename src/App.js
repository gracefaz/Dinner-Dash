import "./App.css";
import Header from "./components/App-Header";
import Menu from "./components/App-MenuItemsList";
import SpecialOffer from "./components/App-SpecialOffer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <SpecialOffer />
    </div>
  );
}

export default App;
