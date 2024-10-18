import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Brands from "./Components/Brands";
import { Routes, Route } from "react-router-dom";
import OmSaiTravels from "./Pages/OmSaiTravels";
import Nakshaghar from "./Pages/Nakshaghar";
import TethysTechnologies from "./Pages/TethysTechnologies";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Contactsai from "./Pages/Contactsai";
import Aboutsai from "./Pages/aboutsai";
import Aboutarch from './Pages/Aboutarch';
import Contactarch from './Pages/Contactarch'
import Imagepg from './Components/Imagepg1'
import Tethaboutus from './Pages/Tethaboutus'
import Tethcontact from './Pages/Tethcontact'
const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <TethysTechnologies/> */}
      <Routes>
        <Route path="*" element={<Navbar />}></Route>
        <Route path="/" element={<TethysTechnologies />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/omsaitravels" element={<OmSaiTravels />}></Route>
        <Route path="/contactsai" element={<Contactsai />}></Route>
        <Route path="/aboutsai" element={<Aboutsai />}></Route>
        <Route path="/nakshaghar" element={<Nakshaghar />}></Route>
        <Route path="/aboutarch" element={<Aboutarch />}></Route>
        <Route path="/contactarch" element={<Contactarch />}></Route>
        <Route
          path="/cad"
          element={<Hero />}
        ></Route>
        <Route
          path="/tethabout"
          element={<Tethaboutus />}
        ></Route>
        <Route
          path="/tethcontact"
          element={<Tethcontact />}
        ></Route>
        <Route path="/certificate"  element={<Imagepg/>} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
