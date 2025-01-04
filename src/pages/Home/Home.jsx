import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuHome from "../../components/MenuHome/MenuHome";
import Services from "../../components/Services/Services";
import Form from "../../components/Form/Form";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash === '#form') {
      document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (window.location.hash === '#form') {
          window.location.hash = 'menu';
        }
      }, 1000);
    }

    if (currentHash === '#services-container') {
      document.getElementById('services-container').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (window.location.hash === '#services-container') {
          window.location.hash = '#menu';
        }
      }, 1000);
    }
  }, [location]);

  return (
    <div>
      <MenuHome />
      <Services />
      <Form />
    </div>
  );
};

export default Home;
