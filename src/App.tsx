import "./App.css";
import Navigation from "./components/Navigation";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import MyWorkSection from "./components/MyWorkSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <HeaderSection />
      </header>
      <main>
        <section id="about">
          <AboutSection />
        </section>
        <hr />
        <section id="my-work">
          <MyWorkSection />
        </section>
        <hr />
        <div className="container">
          <div className="row g-5">
            <section id="services" className="col-12 col-lg-6">
              <ServicesSection />
            </section>
            <section id="contact" className="col-12 col-lg-6">
              <h2>Contact Section</h2>
            </section>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
