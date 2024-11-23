import "./App.css";

import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Food from "./sections/Food";
import Book from "./sections/Book";
import Testimonial from "./sections/Testimonial";
import Blog from "./sections/Blog";

function App() {
  return (
    <>
      <Header />

      <Hero />
      <About />
      <Food />
      <Book />
      <Testimonial />
      <Blog />

      <Footer />
    </>
  );
}

export default App;
