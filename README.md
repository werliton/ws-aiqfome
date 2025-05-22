# AiqFome Teste Frontend

Aplicação web desenvolvida em Next.js com foco na experiência mobile e fluidez da interface. Criada como parte de um desafio técnico de front-end.

## Features

> Todas as features acompanham o planejamento realizado e gerenciado no Project do GitHub

- Listagem de lojas por categoria
- Exibição de produtos de cada loja
- Adição de produtos ao ticket
- Visualização do ticket atual
- Persistência local com `localStorage`
- Design responsivo e mobile-first
- Performance otimizada com Server Components
- Boas práticas com componentes funcionais, hooks e contextos

## Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Atomic Design](https://atomicdesign.bradfrost.com/) + Clean Architecture

## Estrutura

```
├── public/
│   └── data/products.json        # Mock de dados
├── src/
│   ├── components/               # Componentes atômicos e compostos
│   ├── contexts/                 # Contexto do ticket
│   ├── pages/                    # Rotas e páginas
│   ├── styles/                   # Temas e estilização global
│   ├── utils/                    # Helpers como persistência local
│   └── ...WIP
```

## Como usar

### 1. Clone o projeto

```bash
git clone https://github.com/werliton/ws-aiqfome.git

cd ws-aiqfome
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Inicie o app

```bash
pnpm run dev
```

A aplicação local está disponível na seguinte [url](http://localhost:3000)

## Testes

Para executar testes, basta executar o comando abaixo:

```bash
pnpm run test
```

## Build de produção

```bash
pnpm run build && pnpm start
```

## Plugins VSCode utilizados

- VSCode Conventional Commits

## Autor

- Werliton Silva
  - [Linkedin](https://www.linkedin.com/in/werliton-silva/)
  - [Dev.to](https://dev.to/werliton)

## Licença

MIT
