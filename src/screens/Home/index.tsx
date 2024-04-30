import About from "./About";
import Blog from "./Blog";
import Customers from "./Customers";
import Herosection from "./Herosection";
import Newsletter from "../Contact/Newsletter";
import Partners from "./Partners";
import Products from "./Products";
import WhyChooseUs from "./WhyChooseUs";

const Index = () => {
  return (
        <>
          <Herosection />
          <main>
            <About />
            <Partners />
            <WhyChooseUs />
            <Products />
            <Customers />
            <Blog />
            <Newsletter />
          </main>
        </>
  );
};

export default Index;
