import './Services.css'

import { Link } from 'react-router-dom'

import coloracao from '../../assets/coloracao.jpg'
import pintarUnha from '../../assets/pintarUnha.jpg'
import tratamentoCapilar from '../../assets/tratamentoCapilar.jpg'
import maquiagem from '../../assets/maquiagem.jpg'
import depilacao from '../../assets/depilacao.jpg'
import cortarCabelo from '../../assets/cortarCabelo.jpg'
import designSobrancelhas from '../../assets/sobrancelha.jpg'
import luzes from '../../assets/luzes.jpg'
import escova from '../../assets/escova.jpg'
import limpezaPele from '../../assets/limpezaPele.jpg'
import massagemModeladora from '../../assets/massagemModeladora.jpg'
import extencaoDeCilios from '../../assets/extencaoDeCilios.jpg'

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
  {
    id: 9,
    image: escova,
    name: 'Escova',
    description: 'Deixe seu visual mais sofisticado e iluminado com uma escova modelada que adiciona brilho e movimento.',
  },
  {
    id: 10,
    image: limpezaPele,
    name: 'Limpeza de Pele',
    description: 'Revitalize sua pele com uma limpeza profunda, removendo impurezas e deixando-a radiante.',
  },
  {
    id: 11,
    image: massagemModeladora,
    name: 'Massagem Modeladora',
    description: 'Defina seus contornos e melhore a firmeza da pele com a massagem modeladora.',
  },
  {
    id: 12,
    image: extencaoDeCilios,
    name: 'Extenção de Cílios',
    description: 'Realce seu olhar com cílios mais longos, volumosos e naturais.',
  },
];

const Services = () => {
  return <div className='services-page'>
          <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/#form" className="service-button">
                Agendar
              </Link>
            </div>
          ))}
        </div>
        </div>;
      };

export default Services;
