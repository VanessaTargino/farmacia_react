import { useEffect, useState } from 'react';
import { consultar } from '../../services/Service';

interface Categoria {
  id: number;
  name: string;
  descricao: string;
}

function ListarCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function consultarCategorias() {

    try {
      await consultar('/categorias', setCategorias);
    } catch (error: any) {
      alert('Erro!')
    }
    
  }

  useEffect(() => {
    consultarCategorias();
  }, []);

  return (
    <div className='lista'>
      <h1>Lista de usuários - Gerada pelo Axios</h1>
      <ul>
        {categorias.map( (categoria) => (
          <li key={categoria.id}>{categoria.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarCategorias;