import "./App.css";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import MyWorkSection from "./components/MyWorkSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <header id="header">
        <HeaderSection />
      </header>
      <main>
        <section id="about" className="pt-lg-5 pb-lg-5">
          <AboutSection />
        </section>
        <section id="my-work">
          <MyWorkSection />
        </section>
        <div className="container mb-5 mt-4">
          <div className="row g-5">
            <section id="services" className="col-12 col-lg-6">
              <ServicesSection />
            </section>
            <section id="contact" className="col-12 col-lg-6">
              <ContactSection />
            </section>
          </div>
        </div>
      </main>
      <footer className="dark-background">
        <FooterSection />
      </footer>
    </>
  );
}

export default App;
