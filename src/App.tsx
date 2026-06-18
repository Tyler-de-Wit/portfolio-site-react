import "./App.css";
import Navigation from "./components/Navigation";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <HeaderSection />
      </header>
      <main>
        <hr />
        <section id="about">
          <h2>About Section</h2>
        </section>
        <hr />
        <section id="my-work">
          <h2>My Work Section</h2>
        </section>
        <hr />
        <section id="services">
          <h2>Services Section</h2>
        </section>
        <hr />
        <section id="contact">
          <h2>Contact Section</h2>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
