# Notifications Service - Ignite Lab NodeJS

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Notifications&message=Service&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/notifications-service?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/notifications-service?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/notifications-service?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#notifications-service">Notifications Service</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br>

## Sobre

Projeto desenvolvido durante o Ignite Lab de NodeJS, evento criado pela Rocketseat. Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 12 ao dia 14 de Dezembro de 2022 e teve como intuito mostrar como construir um microsserviço moderno com NodeJS, NestJS, Prisma, TypeScript, Redis e diversas outras tecnologias.

<img src="./readme/wallpaper.png" alt="Wallpaper" />

## Notifications Service

O Notifications Service é um microsserviço responsável por lidar com notificações de diversas fontes. A ideia do projeto é entender como arquitetar um microsserviço de melhor maneira afim de tê-lo desacoplado de qualquer tecnologia do meio externo e que seja altamente escalável, seguindo as melhores praticas de programação com esse tipo de arquitetura e as tecnologias mais modernas do momento no mundo do NodeJS.

Esse projeto é um consumer do Kafka que irá consumir mensagens de um tópico chamado `notifications.send-notification` e irá realizar registros das notificações em uma tabela no banco de dados.

O cluster Kafka pode ser criado de diversas formas e integrado ao projeto, a maneira realizada aqui foi utilizando o serviço [Upstash](https://console.upstash.com/kafka). Ao acessa-lo, basta criar uma conta, criar o cluster e tópico e conectar a aplicação a ele. Deixo abaixo um exemplo do dashboard de uso do serviço aonde realizei os testes da aplicação:

![Upstash Dashboard](./readme/upstash-dash.png)

Como podemos ver acima, no momento do print-screen, havia produzido 30 mensagens, das quais 27 foram consumidas por esse microsserviço e registradas em nosso banco de dados.

Ao executar a aplicação, ela se conecta ao nosso cluster e consome as mensagens que estão no tópico:

![App start log](./readme/app-start-log.png)

Caso existam mensagens a serem consumidas, a aplicação as consome e gera os registros em nosso BD, nesse caso, um banco SQLite. Vamos ver os registros no exemplo abaixo:

![Notification table](./readme/notifications-table.png)

A aplicação utiliza o Prisma e executando o comando `prisma studio` conseguimos subir uma interface web para visualizar nosso banco de dados, aonde podemos ver as notificações sendo registradas.

Para manipular nossos registros a aplicação conta com uma API REST contendo endpoints para criar e cancelar notificações, marca-las como lidas e não lidas, além de rotas para obter o total de notificações ou as próprias notificações de um usuário.

Deixarei abaixo a coleção das requisições para serem importadas no Insomnia:

[![Run in Insomnia](https://insomnia.rest/images/run.svg)](./readme/endpoints.json)

Como esse microsserviço é apenas um consumer, deixarei nesse repositório a pasta `notifications-kafka-producer`, a qual contem o código de um simples producer kafka para gerar as mensagens a serem consumidas pelo notifications-service.

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/notifications-service.git

# Acesse a pasta do projeto no terminal/cmd
$ cd notifications-service

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:dev

# Execute os testes da aplicação
$ npm run start:test
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:test

# O servidor inciará na porta 3000 - acesse <http://localhost:3333>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/8/30/ccdab75832d3da51023b07c109c3971a~tplv-t2oaga2asx-image.image" alt="NestJS" height="75"/>

<img align="left" src="https://images.velog.io/images/euneun/post/e030edaf-3157-480c-9b86-fc4e7846f9c5/jest.png" alt="Jest" height="75" />

<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/2560px-Apache_kafka_wordtype.svg.png" alt="Kafka" height="75" />

<br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
