# LandingDuo

Teste de adimissão para os estúdios DUO, com front-end construído em Angular e backend simulado através da bilbioteca json-server para montar endpoints e permitir a execução de requisições http.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.


## DOCKER CONTAINER

Para rodar em um container Docker use a linha de comando `docker-compose up -d`.
Para interromper a execução dos containeres, utilize a linha `docker-compose down`

## LOCAL

Para rodar em um ambiente local, baixar o projeto e executar a linha de comando `npm install` para adicionar os pacores node.
Após a instalação dos pacotes, executar o json-server com a linha `json-server --watch /data/db.json` para que o servidor fique disponível em `http://localhost:3000/`.
Para disponibilizar a aplicação em `http://localhost:4200/`, executar a linha `ng serve`.

