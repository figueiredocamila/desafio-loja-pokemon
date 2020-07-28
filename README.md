# PokeStore

Aplicação desenvolvida como parte do processo seletivo da vaga de desenvolvedora Front-End Junior na B2W.

Repositório no [GitHub](https://github.com/figueiredocamila/desafio-loja-pokemon).


## Conteúdo

- [Tecnologias utilizadas no desenvolvimento](#tecnologias-utilizadas-no-desenvolvimento)
- [Tecnologias utilizadas para testes](#tecnologias-utilizadas-para-testes)
- [Como instalar e rodar o projeto](#como-instalar-e-rodar-o-projeto) 
	- [Instalação](#instalação) 
	- [Rodando os testes](#rodando-os-testes)
	-  [Rodando o projeto](#rodando-o-projeto) 
- [Projeto rodando em produção](#projeto-rodando-em-produção)

## Tecnologias utilizadas no desenvolvimento

- Vue.js
- Vuex
- Axios
- Sass

Escolhi **Vue.js** pois é a framework que tenho mais domínio, assim como o **Vuex** para gerenciamento de estado global.
Para o css, utilizei o **Sass** pois ele é muito bom para trabalhar com estilos de componentes e ao mesmo tempo me permite utilizar padrões css como o **BEM**.

## Tecnologias utilizadas para testes

- Jest

Escolhi essa tecnologia por ser mais popular e ao mesmo tempo eficaz e de fácil utilização em conjunto com o **Vue.js**.

Foi implementado os testes do **Jest** para os componentes de resumo da compra e indicador de quantidade de produtos no carrinho.

## Como instalar e rodar o projeto

### Instalação
Faça o clone ou download e extraia o **.zip** do repositório da aplicação no [GitHub](https://github.com/figueiredocamila/desafio-loja-pokemon)

### Rodando os testes
Para rodar os testes execute o comando `yarn test:unit` ou `npm run test:unit`.

### Rodando o projeto
Pelo terminal, vá até a raiz do projeto e instale as dependências usando o `yarn install` ou `npm i`.

O projeto consiste em duas lojas com temas diferentes e cada uma possui seu próprio comando para rodar o ambiente de desenvolvimento e gerar o build de produção. 

Para isso criei um arquivo de variáveis de ambiente (produção e desenvolvimento) para cada loja.

#### - Ambiente de desenvolvimento

 - **Red PokeStore**: execute o comando `yarn serve:fire` ou `npm run serve:fire`.
 - **Blue PokeStore**: execute o comando `yarn serve:water` ou `npm run serve:water`.
 
#### - Build de produção
 
 - **Red PokeStore**: execute o comando `yarn build:fire` ou `npm run build:fire`.
 - **Blue PokeStore**: execute o comando `yarn build:water` ou `npm run build:water`.
 
## Projeto rodando em produção

Cada loja foi publicada no **Surge.sh** para ser acessada publicamente em qualquer dispositivo.

- **Red PokeStore**: http://red-poke-store.surge.sh
 - **Blue PokeStore**: http://blue-poke-store.surge.sh
 


