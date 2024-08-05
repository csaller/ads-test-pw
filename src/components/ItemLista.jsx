import { toast } from 'sonner';
import './ItemLista.css'
import { FaCalendarAlt } from "react-icons/fa";

function ItemLista({carro, carros, setCarros}) {

  function avaliaCarro() {
    const data_agendamento_prompt = String(prompt(`Qual a data do test drive do carro "${carro.nome}"?`))
    const data_agendamento = data_agendamento_prompt.split("/").reverse().join("/")
    if (new Date(data_agendamento) == "Invalid Date") {
      toast.error("Insira uma data válida")
      return
    }
    const hora_agendamento = prompt("Qual a hora do test drive?")
    if (hora_agendamento == "") {
      toast.error("Erro... Digite um comentário para avaliar o carro")
      return
    }

    const carros2 = [...carros]

    const indice = carros2.findIndex(x => x.nome == carro.nome)

    carros2[indice].data_agendamento = data_agendamento
    carros2[indice].hora_agendamento = hora_agendamento

    setCarros(carros2)
    localStorage.setItem("carros", JSON.stringify(carros2))
    toast.warning("Test drive agendado com sucesso!")
  }

  return (
    <div className="grid-item">
      <div className='foto-container'>
        <img src={carro.foto} alt="Carro"/>
      </div>
      <div>
        <h3>{carro.nome} - {carro.ano}</h3>
        <p className='comentario'>{carro.comentarios}</p>
        {!carro.data_agendamento ?
          <div>
            <p><button onClick={avaliaCarro}>
              Agendar test drive <FaCalendarAlt />
              </button></p>
          </div> :
          <div>
            <h4>Data do test drive:</h4>
            <p className='agendamento'>{new Date(carro.data_agendamento).toLocaleDateString('pt-BR')} - {carro.hora_agendamento}</p>
          </div>  
        }        
      </div>
    </div>
  )
}

export default ItemLista