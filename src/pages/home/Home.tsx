import'react';
import home from '../../assets/home.svg';

function Home() {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-verde-lima px-4">
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 text-verde-escuro py-12">
        {/* Texto */}
        <section className="flex flex-col gap-4 items-center justify-center text-center md:text-left">
          <h1 className="text-5xl font-bold font-poppins">
            Bem-vindo ao FarmaTech
          </h1>
          <h2 className="text-xl font-nunito">
            Inovação que cuida
          </h2>
        </section>

        {/* Imagem */}
        <section className="flex justify-center items-center">
          <img
            src={home}
            alt="Imagem do FarmaTech"
            style={{ width: '100%', maxWidth: 300, height: 'auto' }}
            className="drop-shadow-lg"
          />
        </section>
      </div>
    </main>
  );
}

export default Home;
