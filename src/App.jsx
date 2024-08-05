import Titulo from "./components/Titulo"
import ItemLista from "./components/ItemLista"
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import './App.css'
import { useEffect, useState } from "react"
import NovoCarro from "./components/NovoCarro"
import { Toaster } from "sonner"

function App() {
  const [carros, setCarros] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("carros")) {
      const carros2 = JSON.parse(localStorage.getItem("carros"))
      setCarros(carros2)
    }
  }, [])

  const listaCarros = carros.map(carro => (
    <ItemLista key={carro.titulo} carro={carro} 
       carros={carros} setCarros={setCarros} />
  ))

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Titulo />
      <div className="container">
        <div className="lista-botao">
          <h1>Lista dos carros cadastrados</h1>
          <button className="bt-novo" onClick={onOpenModal}>
            Novo Carro
          </button>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <NovoCarro carros={carros} setCarros={setCarros} />
        </Modal>
        <div className="grid-container">
          {listaCarros}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
