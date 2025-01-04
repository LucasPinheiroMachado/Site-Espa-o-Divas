import './Services.css';
import { Link } from 'react-router-dom';
import coloracao from '../../assets/coloracao.jpg'
import pintarUnha from '../../assets/pintarUnha.jpg'
import tratamentoCapilar from '../../assets/tratamentoCapilar.jpg'
import maquiagem from '../../assets/maquiagem.jpg'
import depilacao from '../../assets/depilacao.jpg'
import cortarCabelo from '../../assets/cortarCabelo.jpg'
import designSobrancelhas from '../../assets/sobrancelha.jpg'
import luzes from '../../assets/luzes.jpg'

const servicesData = [
  {
    id: 1,
    image: cortarCabelo,
    name: 'Corte Feminino',
    description: 'Corte moderno e estiloso para realçar sua beleza.',
  },
  {
    id: 2,
    image: pintarUnha,
    name: 'Manicure e Pedicure',
    description: 'Cuidados especiais para suas mãos e pés.',
  },
  {
    id: 3,
    image: coloracao,
    name: 'Coloração',
    description: 'Tons vibrantes ou naturais para o seu cabelo.',
  },
  {
    id: 4,
    image: maquiagem,
    name: 'Maquiagem',
    description: 'Para todas as ocasiões, do dia a dia ao glamour.',
  },
  {
    id: 5,
    image: depilacao,
    name: 'Depilação',
    description: 'Pele macia e suave com nossos tratamentos.',
  },
  {
    id: 6,
    image: tratamentoCapilar,
    name: 'Tratamento Capilar',
    description: 'Saúde e brilho para seus fios.',
  },
  {
    id: 7,
    image: designSobrancelhas,
    name: 'Design de Sobrancelhas',
    description: 'Sobrancelhas perfeitas para harmonizar seu rosto.',
  },
  {
    id: 8,
    image: luzes,
    name: 'Luzes',
    description: 'Transforme seu visual com mechas sutis e iluminadas.',
  },
];

const Services = () => {
  return (
    <div className="services-container" id='services-container'>
      <div className='services-presentation'>
      <h2 className="services-title">Nossos Serviços:</h2>
      <Link to={'/services'} className='allServices-link'>Ver todos</Link>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <Link to="#form" className="service-button">
                Agendar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
