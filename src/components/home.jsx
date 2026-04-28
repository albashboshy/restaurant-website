import About from "./about";
import Counter from "./counter";
import Explore from "./explore";
import Header from "./header";
import Navigation from "./navigiation";
import Testimonial from "./testimonial";
import Frequently from "./frequently";
import Subscribe from "./subscribe";
import Footer from "./footer";
export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Counter />
      <About />
      <Explore />
      <Testimonial /> 
      <Frequently />
      <Subscribe />
      <Footer />  
    </div>
  );
}
