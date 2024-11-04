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
import Gallery from "./Pages/Gallery";
import Imagepg from './Components/Imagepg1'
import Tethaboutus from './Pages/Tethaboutus'
import Tethcontact from './Pages/Tethcontact'
import Imagepg2 from "./Pages/Imagepg2";
const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <TethysTechnologies/> */}
      <Routes>
        <Route path="*" element={<Navbar />}></Route>
        <Route path="/" element={<TethysTechnologies />}></Route>
        <Route path="/tethbrands" element={<Brands />}></Route>
        <Route path="/omhome" element={<OmSaiTravels />}></Route>
        <Route path="/omcontactus" element={<Contactsai />}></Route>
        <Route path="/omabout" element={<Aboutsai />}></Route>
        <Route path="/nakshahome" element={<Nakshaghar />}></Route>
        <Route path="/nakshaabout" element={<Aboutarch />}></Route>
        <Route path="/nakshacontact" element={<Contactarch />}></Route>
        <Route path='/tethgallery' element={<Gallery/>} ></Route>
        <Route
          path="/cad"
          element={<Hero />}
        ></Route>
        <Route
          path="/tethabout"
          element={<Tethaboutus />}
        ></Route>
        <Route
          path="/tethcontactus"
          element={<Tethcontact />}
        ></Route>
        <Route path="/certificate"  element={<Imagepg/>} ></Route>
        <Route path="/certificatemsme"  element={<Imagepg2/>} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
