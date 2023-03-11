# Sugestões de melhorias

## 1. Gerenciador de pacotes

Conversem entre vocês para determinar que gerenciador de pacotes deverá ser usado no projeto, ou só `npm`ou só `yarn`.

## 2. Alterar o favicon e título do projeto

Link de como fazer -> https://blog.cod3r.com.br/como-adicionar-um-favicon-ao-seu-projeto/

## 3. Padronizar a estrutra de pastas do projeto

Não existe uma forma de estrutura definitiva na comunidade, o que é unânime é que a estrutura tenha uma lógica e siga um padrão lógico.

Aqui vai duas sugestões de leitura:

- https://www.freecodecamp.org/portuguese/news/uma-maneira-melhor-de-estruturar-projetos-em-react/
- https://medium.com/reactbrasil/react-estruturando-projetos-e-nomeando-componentes-b62ddad69a11

Estou alterando o projeto para ficar desta forma a partir do diretório `src`:

```shell
$ tree
.src
├── assets # todas as imagens usadas no projeto
│   ├── botao-de-inicio-changed.png
│   └── outras-imagens...
├── components # todo e qualquer componente que não seja uma rota/page
│   └── forms
│       ├── Cadastro
│       │   ├── FormCadastro.jsx
│       │   ├── FormCadastro.module.css
│       │   └── FormInput.jsx
│       └── Login
├── pages # todas os componentes react que são uma rota na url
│   ├── Cadastro
│   │   ├── Cadastro.js
│   │   └── Cadastro.module.css
│   ├── Home
│   ├── Login
│   ├── Perfil
```

Percebam que toda pasta que tem um componente react está com a [nomenclatura padrão](https://www.alura.com.br/artigos/boas-praticas-escrever-codigo-react-js) que é a `PascalCase`. E dentro da pasta do componente, coloquei o arquivo javascript ou JSX junto com seu arquivo de CSS.

Qualquer dúvida me pinguem.

Atenciosamente,

Gildo Neto
