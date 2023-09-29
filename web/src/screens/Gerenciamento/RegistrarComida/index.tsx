import './style.css'
import Header from '../../../components/Header/index'
import { useEffect, useState } from 'react'
import axios from 'axios'



function RegistrarComida() {

  useEffect(() => {
    fetchComida();
  }, [])

  const fetchComida = async () => {
    try {
      const response = await axios.get('http://localhost:8090/comidas')
      setComida(response.data);
    } catch (error){
      console.log('erro', error);
      
    }
  };

  const [comida, setComida] = useState([]);
  const [nomeInput, setNomeInput] = useState('');
  const [caloriasInput, setCaloriasInput] = useState('');
  const [precoInput, setPrecoInput] = useState('');
  const [categoriaInput, setCategoriaInput] = useState('');
  const [ingredientesInput, setIngredientesInput] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      let novaComida ={
        nome: nomeInput,
        caloria: caloriasInput,
        preco: precoInput,
        categoria: categoriaInput,
        ingredientes: ingredientesInput
      }
      await axios.post('http://localhost:8090/comidas', novaComida);
      fetchComida();
      setNomeInput('');
      setCaloriasInput('');
      setPrecoInput('');
      setCategoriaInput('');
      setIngredientesInput('')
    } catch(error) {
      console.error('Erro ao criar comida', error)
    }
  }

  return (
    <>
      <Header />

      <main className='mainRegistrarComida'>
       <h1 className='titleRegistrarComida'>Cadastro de Comida</h1>
       <form onSubmit={handleSubmit} className='gridRegistrarComida'>

        <div className='titleInfoRegistrarComida'>
          <p>Nova Comida</p>
        </div>
        <section className='infosRegistrarComida'>
          <article className='inputsRegistrarComida'>
            <p>Informações</p>
            <input type='text' placeholder='Nome' value={nomeInput} onChange={(event) => setNomeInput(event.target.value)}></input>
            <input type='number' placeholder='Calorias' value={caloriasInput}  onChange={(event) => setCaloriasInput(event.target.value)}></input>
            <input type='number' placeholder='Preço' value={precoInput}  onChange={(event) => setPrecoInput(event.target.value)}></input>
            <input type='text' placeholder='Categoria' value={categoriaInput}  onChange={(event) => setCategoriaInput(event.target.value)}></input>
            <input type='text' placeholder='Ingredientes' value={ingredientesInput}  onChange={(event) => setIngredientesInput(event.target.value)}></input>
          </article>
          <article className='imagemRegistrarComida'>
            <p>Imagem</p>
            <div>

            </div>
          </article>
        </section>
        <div className='botoesRegistrarComida'>
          <button type="submit">Registrar Comida</button  >
          <button>Resetar Informações</button>
          <button>Editar Cardapio</button>
        </div>
       </form>
      </main>
    </>
  )
}

export default RegistrarComida


