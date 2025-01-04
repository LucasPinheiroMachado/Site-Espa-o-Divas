import './MenuHome.css';
import { Link } from 'react-router-dom';

const MenuHome = () => {
  return (
    <div className="menuHome">
      <section className="presentation">
        <h1>Bem-vindo <span className="break-line"></span>ao Espaço Divas!</h1>
        <p>Transforme sua beleza com nossos serviços exclusivos e agende seu próximo procedimento com facilidade!</p>
        <div className="button-container">
          <Link to={'/#services-container'} className="button button-primary">Ver Serviços</Link>
          <Link to={'/#form'} className="button button-secondary">Agendar Procedimento</Link>
        </div>
      </section>
    </div>
  );
};

export default MenuHome;
