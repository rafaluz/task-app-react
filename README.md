# 📝 Gerenciador de Tarefas em React

Este repositório contém o projeto **Gerenciador de Tarefas**, desenvolvido como parte do aprendizado em React, com base no curso do [Felipe Mota](https://github.com/felipemotarocha/curso-de-react-yt). A aplicação permite adicionar, listar, excluir e marcar tarefas como concluídas, com uso de recursos modernos do ecossistema React.

---

## 🚀 Tecnologias e ferramentas utilizadas

- **[React](https://reactjs.org/)** + **[Vite](https://vitejs.dev/)** (`vite@5.5.2`)
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização rápida com classes utilitárias
- **React Hooks**
  - `useState` — para controle de estado
  - `useEffect` — para carregar e salvar dados no `localStorage`
- **[UUID](https://www.npmjs.com/package/uuid)** (`uuid@10.0.0`) — para gerar IDs únicos
- **[React Router DOM](https://reactrouter.com/en/main)** (`react-router-dom@6.26.1`) — rotas e múltiplas páginas
- **[Lucide React](https://www.npmjs.com/package/lucide-react)** (`lucide-react@0.435.0`) — ícones SVG modernos
- **LocalStorage** — para persistência dos dados das tarefas no navegador

> 🔧 Há também um trecho comentado com integração a uma API externa, que pode ser ativado futuramente.

---

## 📦 Instalação e uso

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/aprendendo-react.git
cd aprendendo-react
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador: [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura do projeto

```
.
├── public/
├── src/
│   ├── components/       # Componentes reutilizáveis (.jsx)
│   ├── pages/            # Páginas do app com React Router
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos com Tailwind
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🧠 Funcionalidades

- ✅ Adicionar tarefas com título e descrição
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas
- ✅ Armazenar tarefas no navegador (localStorage)
- ✅ Interface responsiva com Tailwind
- ✅ Rotas entre páginas com React Router
- ⚙️ Integração com API externa (comentada no código)

---

## 🛠️ Extensões VSCode recomendadas

- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
  > Ativar “Format on Save” e definir o Prettier como default formatter
- **ESLint**
  > Desativar aviso de `prop-types`: `"react/prop-types": "off"` no `eslint.config.js`

---

## 📚 Anotações do ambiente de desenvolvimento

- Projeto iniciado com:
  ```bash
  npm create vite@5.5.2 .
  ```
- TailwindCSS configurado com:
  ```bash
  npm install -D tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
  npx tailwindcss init -p
  ```
- `tailwind.config.js`:
  ```js
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  ```
- `index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 📷 Screenshot

![Preview do aplicativo](./app.PNG)

---

## 📚 Referência

Este projeto foi inspirado e baseado no curso de React disponível em:

🔗 [Repositório original do curso](https://github.com/felipemotarocha/curso-de-react-yt)

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais. Sinta-se à vontade para adaptar e expandir!
