import './Form.css';
import { useState } from "react";
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Form = () => {
  const { insertDocument, response } = useInsertDocument('agenda');
  const { documents: datas } = useFetchDocuments("agenda");

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    data: "",
    hora: "",
    servico: "",
  });

  const [duracao, setDuracao] = useState("");

  const servicosEDuracoes = {
    "Corte Feminino": 60, // minutos
    "Manicure e Pedicure": 90,
    "Coloração": 120,
    "Maquiagem": 90,
    "Depilação": 60,
    "Tratamento Capilar": 150,
    "Design de Sobrancelhas": 60,
    "Luzes": 180,
    "Escova": 120,
    "Limpeza de Pele": 60,
    "Massagem Modeladora": 60,
    "Extenção de Cílios": 90
  };

  const horariosDisponiveis = [];
  for (let hora = 7; hora <= 21; hora++) {
    horariosDisponiveis.push(`${hora.toString().padStart(2, "0")}:00`);
    if (hora != 21) {
    horariosDisponiveis.push(`${hora.toString().padStart(2, "0")}:30`);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "servico") {
      setDuracao(servicosEDuracoes[value] || "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.endereco || !formData.data || !formData.hora || !formData.servico) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    await insertDocument({ ...formData, duracao });

    alert("Formulário enviado com sucesso!");
    setFormData({
      nome: "",
      endereco: "",
      data: "",
      hora: "",
      servico: "",
    });
    setDuracao("");
  };

  const horariosIndisponiveis = datas
    ? datas.flatMap((doc) => {
        const horaInicial = doc.hora;
        const duracaoMinutos = servicosEDuracoes[doc.servico] || 0;

        const [hora, minuto] = horaInicial.split(":").map(Number);
        const horaFinal = new Date();
        horaFinal.setHours(hora, minuto + duracaoMinutos);
        const horaServicoMarcadoAtual = new Date()
        horaServicoMarcadoAtual.setHours(hora, minuto - duracao)

        const bloqueados = [];
        let current = new Date();
        current.setHours(hora, minuto);

        while (current < horaFinal) {
          bloqueados.push(current.toTimeString().slice(0, 5));
          current.setMinutes(current.getMinutes() + 30);
        }

        let current2 = new Date()
        current2.setHours(hora, minuto);

        while (current2 > horaServicoMarcadoAtual) {
          bloqueados.push(current2.toTimeString().slice(0, 5));
          current2.setMinutes(current2.getMinutes() - 30);
        }

        return bloqueados.map((hora) => ({
          data: doc.data,
          hora,
        }));
      })
    : [];

  const horariosDisponiveisFiltrados = horariosDisponiveis.filter((horario) => {
    const isIndisponivel = horariosIndisponiveis.some(
      (ind) => ind.data === formData.data && ind.hora === horario
    );
    return !isIndisponivel;
  });

  return (
    <div className="form-container" id='form'>
      <h2 className="form-title">Agendar Serviço:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="servico">Serviço:</label>
          <select
            id="servico"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione um serviço
            </option>
            {Object.keys(servicosEDuracoes).map((servico) => (
              <option key={servico} value={servico}>
                {servico}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="duracao">Duração:</label>
          <input
            type="text"
            id="duracao"
            name="duracao"
            value={`${duracao} minutos`}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <select
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione um horário
            </option>
            {horariosDisponiveisFiltrados.map((horario) => (
              <option key={horario} value={horario}>
                {horario}
              </option>
            ))}
          </select>
        </div>
        {!response.loading && <button type="submit" className="enviar-btn">Agendar</button>}
        {response.loading && <button disabled type="submit" className="enviar-btn">Aguarde...</button>}
        {response.error && (
          <p className="error shake2">{response.error}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
