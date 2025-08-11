import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="bg-white text-verde-escuro">
      <div className="container mx-auto flex flex-col items-center py-6 px-4 space-y-3">
        <p className="text-xl font-bold">Farma Tech | Copyright: {data}</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/vanessa-targino/" target="_blank" rel="noopener noreferrer">
          <LinkedinLogoIcon size={48} weight="bold" className="hover:text-verde-principal transition-colors cursor-pointer" />
          </a>
          <a href="https://github.com/VanessaTargino" target="_blank" rel="noopener noreferrer">
          <GithubLogoIcon size={48} weight="bold" className="hover:text-verde-principal transition-colors cursor-pointer" />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
