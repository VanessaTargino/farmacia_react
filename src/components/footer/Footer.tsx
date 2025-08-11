import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="bg-white text-verde-escuro">
      <div className="container mx-auto flex flex-col items-center py-6 px-4 space-y-3">
        <p className="text-xl font-bold">Farma Tech | Copyright: {data}</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-4">
          <LinkedinLogoIcon size={48} weight="bold" className="hover:text-verde-principal transition-colors cursor-pointer" />
          <GithubLogoIcon size={48} weight="bold" className="hover:text-verde-principal transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
