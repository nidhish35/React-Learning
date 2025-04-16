import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';

function App() {

  const [orderPopup, setorderPopup] = useState(false);

  const handleorderPopup = () => {
    setorderPopup(!orderPopup);
  }
  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 1000,
      easing : 'ease-in-out',
      delay : 100,});
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <AboutUs />
      </div>
    </>
  )
}

export default App
