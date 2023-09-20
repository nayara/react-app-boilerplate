# react-app-boilerplate

## Descrição

Boilerplate para criar aplicações web em react sem utilizar o CRA.

## Informações gerais

Esse projeto utiliza react + typescript + react testing library + webpack.
A aplicação tem a possibilidade de ser executada também pelo Docker, facilitando para que seja executada em clusters.

## Dependências

- [nvm](https://github.com/nvm-sh/nvm)
- [Node v18+](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (opcional para executar local)

## Instalação das dependências

Execute o comando abaixo para utilizar a versão do node determinada no arquivo `.nvmrc`

```shell
nvm use
```

_Para executar esse comando é necessário ter o nvm instalado globalmente._

Após configurar a versão do node, execute o comando abaixo para instalar os pacotes do projeto:

```shell
yarn install
```

_Para executar esse comando é necessário ter o yarn instalado globalmente._

## Padronização e estilo de código

- O projeto está configurado com eslint + prettier para estilização e padronização do código. Para formatar o código manualmente basta executar:

```shell
yarn install
```

- O projeto utiliza _hooks_ do [husky](https://github.com/typicode/husky) como:

- pre-commit: executa _lint_ e _prettier_ nos arquivos modificados.
- pre-push: executa _lint_ e testes unitários em todo código.
- commit-msg: valida a descrição do commit.

Para facilitar a criação de mensagens de commit você pode usar o commando:

```bash
yarn commit
```

E seguir as instruções na tela para preencher a mensagem de commit.

_Para que o husky seja habilitado é necessário executar o comando `yarn prepare` antes de fazer o primeiro commit_

## Scripts disponíveis

```bash
yarn start:dev
```

Executa a aplicação em modo de desenvolvimento e abre automáticamente o navegado no [http://localhost:3000](http://localhost:3000).

```bash
yarn test
```

Executa os testes unitários.

```bash
yarn build
```

Builda o app na pasta `build`.

## Saber mais!

[React documentation](https://reactjs.org/)

[Testing Library documentation](https://testing-library.com/)

[husky](https://github.com/typicode/husky)
