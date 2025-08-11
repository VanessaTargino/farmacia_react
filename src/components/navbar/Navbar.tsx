import { Link } from 'react-router-dom';
import farma from '../../assets/farma.svg';
function Navbar() {
  return (
    <header className="bg-white text-verde-escuro">
      <div className="container mx-auto flex justify-between items-center text-lg px-4">
        <div className="flex items-center gap-1">
            <img src={farma} alt="Logo Farma Tech" className="h-20 w-auto" />
            <Link to= '/home' font-bold text-2xl > 
            <strong> Farma Tech</strong>
            </Link>
            
            </div>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-verde-lima transition-colors">Lista Categorias</a>
          <a href="#" className="hover:text-verde-lima transition-colors">Cadastrar Categoria</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
