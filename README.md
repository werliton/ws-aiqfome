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
│   ├── app/
│   ├── components/ui/               # Componentes atômicos e compostos
│   ├── contexts/                 # Contexto do ticket
│   ├── pages/                    # Rotas e páginas
│   ├── styles/                   # Temas e estilização global
│   ├── lib/                    # Helpers como persistência local
│   └── ...WIP
```

## Layout

### Quebra de layout

Criei um mapeamento de componentes que precisei utilizar e reaproveitar do ShadcnUI.

![parte1](./docs/shadcnui-components.png)

Componentes instalados:

- [Input](https://ui.shadcn.com/docs/components/input)
- [Scroll-area](https://ui.shadcn.com/docs/components/scroll-area)
- [Card](https://ui.shadcn.com/docs/components/card)
- [Collapsible](https://ui.shadcn.com/docs/components/collapsible)

![parte2](./docs/shadcnui-components-part2.png)

Componentes instalados:

- [Checkbox](https://ui.shadcn.com/docs/components/checkbox)
- [Radio Group](https://ui.shadcn.com/docs/components/radio-group)

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

## Aprendizados

- https://oklch.com
- https://extensions.zeplin.io/
- Cuidado ao usar icones do Lucid. Eles podem limitar a alterar de tamanhao, devido ao viewbox.
