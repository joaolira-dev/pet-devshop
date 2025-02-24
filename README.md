# Pet DevShop

## Sobre o projeto
Este é um backend desenvolvido em **Node.js** com **TypeScript** e **Mustache** para renderização de templates HTML. O projeto permite filtrar animais para adoção com base na categoria (**dog, cat, fish**) e realizar buscas por nome.

## Tecnologias utilizadas
- **Node.js**
- **TypeScript**
- **Express.js**
- **Mustache** (para renderização de templates)

## Funcionalidades
- Listagem de animais disponíveis para adoção.
- Filtro por categoria (**dog, cat, fish**).
- Pesquisa por nome do animal.

## Imagem do projeto
![Image](https://github.com/user-attachments/assets/89e736e2-9ae0-41ce-964b-2bbf8ac5eadc)

## Instalação e Execução
### Pré-requisitos globais:
Certifique-se de ter instalado os pacotes globais necessários:
```sh
npm install -g nodemon typescript ts-node
```

### Instalação do projeto
1. Clone o repositório:
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Acesse a pasta do projeto:
```sh
cd seu-repositorio
```
3. Instale as dependências:
```sh
npm install
```

### Executando o projeto
Para iniciar o servidor em ambiente de desenvolvimento, utilize:
```sh
npm run start-dev
```

O servidor será iniciado e poderá ser acessado via **http://localhost:3000** (caso a porta padrão seja mantida).

## Estrutura do projeto
```
/seu-repositorio
│── src/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   ├── routes/
│   ├── server.ts
│── public/
│── package.json
│── tsconfig.json
│── README.md
```

## Contribuição
Fique à vontade para contribuir com o projeto! Para isso:
1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature ou correção: `git checkout -b minha-feature`
3. Faça o **commit** das suas alterações: `git commit -m 'Minha nova feature'`
4. Envie para o repositório remoto: `git push origin minha-feature`
5. Abra um **Pull Request**.

##
Desenvolvido por [João Lira](https://github.com/joaolira-dev).

