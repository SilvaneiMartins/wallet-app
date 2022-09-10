# GitHub

    Nome da Organização: Sam Agenda
    Nome do Repositório: sam-agenda
    Descrição: Agenda do comercio de Vilhena
    Linguagem: Node Js, Typescript
    URL: www.samagenda.com.br
    URL do Repositório:
    URL do Repositório no GitHub:

# Ferramentas para deploy do Back-End:

    Render: Ferramentas para subir servidor backend e deixar online.
    Url: www.render.com
    ORM: Prisma
    Framework: Express
    Banco de Dados: PostgresSQL

# Configuração a realizar no projeto;

    Terminar de configurar script start:dev:  -r --exit-child -respawn

# Comando GitHub

    npm init -y
    yarn add typescript -D
    yarn add @types/node -D
    yarn add @types/express -D
    yarn add @types/body-parser -D
    yarn add @types/mongoose -D
    yarn add @types/morgan -D
    yarn add @types/cors -D
    yarn add @types/jwt -D
    yarn add @types/bcryptjs -D
    yarn add @types/jsonwebtoken -D
    yarn add @types/moment -D
    yarn add @types/request-promise -D
    yarn add @types/winston -D
    yarn add @types/winston-mongodb -D

# Subir código para GitHub pela primeira vez;

    1 - git init
    2 - git add .
    3 - git commit -m "feat: Criação inicial da API"
    4 - git branch -M main
    5 - git remote add origin 'endereço do repositório'
    6 - git push -u origin main

# Criar um commit no GitHub;

    1 - git add .
        # Adiciona as mudanças feito no projeto;
    2 - git commit -m "feat: Criação inicial da API"
        # Nome do commit e comenta as o que voce fez;
    3 - git push
        # Enviar para GitHub
    4 - git pull
        # Buscar atualizações no GitHub referente ao projeto;

# Trabalhando com branch main e develop no GitHub;

    1 - git push origin main:develop
    2 - git checkout develop
    3 - git checkout -b feature/new-feature
    3 - yarn install

# Realizar um merge para o branch main;

    1 - git checkout main
    2 - git merge develop           # nome da branch
    3 - git merge --abort           # para cancelar o merge
    4 - git add .
    5 - git commit -m "feat: fusão das branch develop e main"
