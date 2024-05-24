import "./App.css";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="grid-container">
        <section className="title">
          <h2>Popular Movies</h2>
        </section>

        <section className="submenu">
          <Sidebar />
        </section>
        <section className="cards">
          <CardList />
        </section>
      </main>
    </>
  );
}

export default App;
