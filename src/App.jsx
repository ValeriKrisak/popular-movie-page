import "./App.css";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <main>
        <div className="inner-container">
          <div className="inner-wrapper">
            <section>
              <div className="title">
                <h2>Popular Movies</h2>
              </div>
            </section>
            <section className="content">
              <div className="submenu">
                <Sidebar />
              </div>
              <div className="white-column">
                <div className="cards">
                  <div className="cards-wrapper">
                    <CardList />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
