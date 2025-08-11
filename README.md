🏥 Atividade Farmácia - Front-end React
Este projeto é um Front-end desenvolvido em React para integrar com o backend de uma aplicação de Farmácia. Permite visualizar, cadastrar, atualizar e excluir Produtos e Categorias, consumindo a API fornecida no backend.

🚀 Funcionalidades
Home Page com layout responsivo.

NavBar e Footer padronizados.

CRUD completo para Categoria.

Consumo de API usando Axios.

React Router para navegação.

Estilização com Tailwind CSS.

Uso de Hooks (useState, useEffect) para gerenciamento de estado.

🛠 Tecnologias Utilizadas
React

TypeScript (se aplicável)

Axios

React Router

Tailwind CSS

Swagger (para teste da API)

Git & GitHub (controle de versão)

📂 Estrutura do Projeto
src/
├─ components/
│  ├─ Home.tsx
│  ├─ NavBar.tsx
│  ├─ Footer.tsx
│  └─ Categoria/
│     ├─ ListarCategorias.tsx
│     ├─ CriarCategoria.tsx
│     ├─ EditarCategoria.tsx
│     └─ DeletarCategoria.tsx
├─ services/
│  ├─ api.ts            # instancia do Axios com baseURL do .env
│  └─ categoriaService.ts
├─ routes/
│  └─ AppRoutes.tsx     # configuração do React Router
├─ App.tsx
├─ main.tsx
└─ index.css


📄 Rotas Principais
Rota	Componente	Descrição
/	Home	Página inicial
/categorias	ListarCategorias	Lista todas as categorias
/categorias/new	CriarCategoria	Cria nova categoria
/categorias/:id/edit	EditarCategoria	Edita categoria existente
/categorias/:id/delete	DeletarCategoria	Remove categoria


👩‍💻 Autora
Desenvolvido por Vanessa 🚀 
