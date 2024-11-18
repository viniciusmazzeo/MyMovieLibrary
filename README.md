# **My Movie Library**  

**Bem-vindo ao My Movie Library**, uma aplicação React para pesquisar filmes, visualizar detalhes e gerenciar uma lista de favoritos. Este projeto é ideal para aprendizado, utilizando várias tecnologias modernas como **React**, **Vite**, **i18next**, **React Hook Form**, **Yup**, **nprogress**, e mais!  

---

## **Tabela de Conteúdos**  

- [Visão Geral](#visão-geral)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Funcionalidades](#funcionalidades)  
- [Instalação e Configuração](#instalação-e-configuração)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Aprendizado](#aprendizado)  
- [API Utilizada](#api-utilizada)  
- [Licença](#licença)  

---

## **Visão Geral**  

O My Movie Library é uma aplicação front-end que consome a API pública do **The Movie Database (TMDB)** para buscar e exibir filmes. O foco é ensinar conceitos modernos de desenvolvimento front-end por meio de um projeto prático e funcional.  

---

## **Tecnologias Utilizadas**  

- **React**: Biblioteca para construção de interfaces de usuário.  
- **Vite**: Ferramenta de build rápida e moderna.  
- **React Router**: Navegação entre páginas no React.  
- **i18next**: Internacionalização para múltiplos idiomas.  
- **React Hook Form**: Gerenciamento e validação de formulários.  
- **Yup**: Validação de dados.  
- **nprogress**: Barra de progresso para carregamentos.  
- **Axios**: Requisições HTTP para consumir APIs.  
- **Tree-shaking e Code-splitting**: Otimização de desempenho e tamanho do bundle.  

---

## **Funcionalidades**  

1. **Pesquisa de filmes:**  
   - Pesquise por filmes usando a API TMDB.  
2. **Detalhes do filme:**  
   - Visualize informações detalhadas sobre cada filme.  
3. **Gerenciamento de favoritos:**  
   - Adicione ou remova filmes da sua lista pessoal de favoritos.  
4. **Internacionalização:**  
   - Suporte a idiomas em inglês e português.  
5. **Feedback visual:**  
   - Barra de progresso exibida durante carregamentos.  

---

## **Instalação e Configuração**  

### **Pré-requisitos**  
- Node.js (versão 16 ou superior).  
- Uma conta na [TMDB](https://www.themoviedb.org/) para obter a API Key.  

### **Passos de Instalação**  
1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/my-movie-library.git
   cd my-movie-library
2. Instale as dependências:
   ```bash
   npm install
3. Crie um arquivo .env na raiz do projeto e adicione sua chave da API TMDB:
   ```bash
   VITE_TMDB_API_KEY=YOUR_API_KEY
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
5. Abra o navegador e acesse: http://localhost:5173.

---
## **Estrutura do Projeto** 
src/
├── components/
│   ├── Header.jsx        # Cabeçalho do app
│   ├── MovieCard.jsx     # Componente para exibir filmes
│   └── FavoritesList.jsx # Lista de filmes favoritos
├── pages/
│   ├── Home.jsx          # Página inicial
│   ├── Search.jsx        # Página de pesquisa
│   ├── Favorites.jsx     # Página de favoritos
├── locales/
│   ├── en.json           # Traduções em inglês
│   └── pt.json           # Traduções em português
├── hooks/
│   └── useMovies.js      # Hook customizado para lógica de filmes
├── App.jsx               # Arquivo principal do React
├── index.jsx             # Ponto de entrada do app
└── styles/
    └── global.css        # Estilos globais

---
## **Aprendizado** 

Este projeto explora os seguintes tópicos:

-Internacionalização: Adicionando suporte a múltiplos idiomas com i18next.
-Validação de formulários: Usando React Hook Form e Yup.
-Integração com APIs públicas: Consumindo dados em tempo real do TMDB.
-Navegação no React: Configuração e uso do React Router.
-Feedback visual: Implementação de barras de progresso com nprogress.
-Otimizações: Uso de tree-shaking e code-splitting para melhorar performance.

---
## **API Utilizada**

-**The Movie Database (TMDB):**
  -Documentação: https://developers.themoviedb.org/3.
  -Endpoints principais usados no projeto:
    -/search/movie: Buscar filmes.
    -/movie/{movie_id}: Obter detalhes de um filme.

---
## **Licença**
Este projeto está licenciado sob a MIT License. Sinta-se à vontade para usá-lo como base para aprendizado ou desenvolvimento pessoal.

Divirta-se aprendendo com o My Movie Library! 🎥✨

