import { useForm } from "react-hook-form"
import './NovoCarro.css'
import { toast } from "sonner"

function NovoCarro({carros, setCarros}) {
  const { register, handleSubmit, reset } = useForm()

  function cadastraCarro(dados) {
    const carros2 = [...carros]
    carros2.push({
      nome: dados.nome,
      ano: dados.ano,
      foto: dados.foto,
      comentarios: dados.comentarios,
      data_agendamento: "",
      hora_agendamento: ""
    })
    setCarros(carros2)
    reset()
    localStorage.setItem("carros", JSON.stringify(carros2))
    toast.success("Carro cadastrado com sucesso!")
  }

  return (
    <div>
      <h2>Inclusão de Carros</h2>
      <form onSubmit={handleSubmit(cadastraCarro)}>
        <p>
          <label htmlFor="nome">Marca e modelo</label>
          <input type="text" id="nome" required size={40}
            {...register("nome")} />
        </p>
        <p>
          <label htmlFor="ano">Ano</label>
          <input type="number" id="ano" required size={20}
            {...register("ano")} />
        </p>
        <p>
          <label htmlFor="foto">URL da Foto</label>
          <input type="text" id="foto" required size={60}
            {...register("foto")} />
        </p>
        <p>
          <label htmlFor="comentarios" className="comentarios">
            Comentários
          </label>
          <textarea id="comentarios" required cols={60} rows={3}
            {...register("comentarios")}></textarea>
        </p>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default NovoCarro