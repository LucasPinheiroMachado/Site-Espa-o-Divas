import './Social.css';

const Social = () => {
  return (
    <div className="social-container">
      <h3>Veja nossas redes sociais:</h3>
      <div className="social-icons">
        <a href="https://wa.me/+5522981607841" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/michelesouzaesteticista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/michele.desouza.71868" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="mailto:michelecosme9@gmail.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;

