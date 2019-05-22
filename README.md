# Desafio Linx Impulse
> Aplicação front-end com Javascript.
### Objetivo

O desafio consiste na construção de uma vitrine, em javascript puro e sem frameworks, das recomendações de nossa Linx Impulse Suite, que solicita as informações do produto referência e da lista de produtos recomendados com paginação de um serviço remoto.

### Quesitos Avaliados

> - Boas práticas na construção do HTML, CSS e Javascript.
> - Atenção nos detalhes da vitrine.
> - Interação com as funcionalidades (links, mouse hover, paginação...).
> - Clean code e bom aproveitamento uso da linguagem.
> - Carregamento dos dados no servidor remoto.

### Tecnologias utilizadas

> * HTML5
> * CSS3
> * Javascript

### Como instalar e iniciar o projeto

Baixe o zip do projeto ou clone para sua área de trabalho e navegue até onde se encontra a pasta do projeto através do seu **Terminal**. Em seguida escreva as instruções:

```sh
 cd js-vitrine-linx-impulse
 abrir arquivo index.html
```

### Documentação da aplicação

A aplicação esta estruturada no padrão MVC. O arquivo **index.html** localizada na raiz do projeto faz a chamada de todos os arquivos de estilização e scripts necessários para roda a aplicaçaõ. A pasta **style** é responsável pelos arquivos relacionados a estilização do projeto, onde é possivel encontrar o arquivo **style.css**. A pasta **controller** é responsável pelos scripts relácionados a aplicação, o arquivo **index.js** faz a chamada dos objetos instanciados das classes encontradas na pasta **classes**, onde é possivel encontrar os arquivos **Service.js** e **Vitrine.js**.


### App Skeleton

```sh
├── README.md
├── index.html
├── style
│   ├── style.css
├── controller
│   ├── index.js
│   ├── classes
│   │   ├── Services.js
│   │   ├── Vitrine.js
