# Teste Técnico Prático-Backend

Repositório contendo o teste técnico referente ao processo seletivo da empresa seidor  é uma aplicação, desenvolvida utilizando as tecnologias NodeJS e Typescript.
Consiste em um sistema de agendamento de reservas para controlar a utilização dos  automoveis da empresa.

## Como fazer o download do projeto.

 #### 1ª Opção (Observação é necessário ter o git instalado na maquina para executar essa opção)

<li> Utilize o comando  git clone https://github.com/Luke0195/seidor-test-back-end.git  no seu terminal para fazer o download do repositório </li>

<li> Com o repositório clonado da sua maquina, basta extraiar a pasta baixada e abri-la no seu editor de código </li>

<li>  A maioria dos editores seguem  o seguinte modelo File > Open Folder > (arquivo do projeto descompactado) </li>

#### 2º Opção
<li>  Clique no botão verde(Code)  e depois clique no botão Download ZIP para ser capaz de fazer o download do  projeto compactado  </li>

<li> Com o projeto baixado em sua maquina basta extraiar o arquivo para o  seu local desejado e  abrir  projeto pelo seu editor de codigo </li>

## Gerenciadores de Pacotes (Yarn / Npm)


Antes de executar o projeto é necessario instalar as dependências  para que o projeto funcione.

#### YARN
Se você estiver utilizando o gerenciador de pacotes yarn , basta executar o comando yarn no terminal com o endereço referente a esse projeto.
Dica : Se você estiver utilizando o Vscode em um sistema operacional Linux ou Windows  o mesmo disponibiliza um terminal integrado  para executação dos comandos.

O comando para abrir o terminal é CTRL + SHIFT + P

#### NPM

Se você estiver utilizando o npm como gerenciador  de pacotes, o processo é um pouco diferente basta excluir o arquivo yarn.lock, após,  o arquivo ter sido deletado basta executar o comando npm install
para instalar as dependências necessárias.

### Script de Execução do projeto
 #### Para executar a aplicação no yarn basta utilizar o comando yarn dev:server
 #### Para executar a aplicação no npm basta utilizar o comando npx run dev:server


# Informação Importante!
Todos os dados que estão sendo persistidos na aplicação são estão sendo salvos em memória, logo
se o servidor for reiniciado  todas as informações salvas serão deletadas.

#  Camadas da aplicação

A aplicação foi divida em 3 camadas models , routes, repositories

### Models
 Representação de uma entidade na base de dados.

### Repositories

 Responsável pelas as informações persistidas na base de dados(nesse caso em questão é a memória).

### Routes
 Rotas da aplicação baseada em cada domínio.

 #### Rotas da aplicação

 ## Automóvel

 **/automobiles**  -> É responsavel por todas as rotas de automoveis

##### POST
**/automobiles** ->  Criar um novo automovél é necessário passar a placa, cor e marca do veículo
para se criar um novo automóvel foi adicionado um campo id após a criação da informação para auxiliar o
usuário na busca, atualização e na remoção de um automóvel.

#### GET
**/automobiles** -> Retorna todos os carros cadastrados na aplicação, nessa rota também é possivel filtrar todos dos veículos por cor, mas para isso acontecer é necessário passar um parâmetro de cor.

#### GET
**/automobiles/marcas** -> Retorna todas os veiculos cadastrados, tambémm é possivel passar um parâmetro por marca para realizar o filtro.

### GET
**/automobiles/:id**  -> Retorna uma veículo por  único referente ao id informado.

### PUT

**/automobiles/:id** -> Atualiza o veículo atualizado baseado no id informado.

### DELETE

**/automobiles/:id** -> Delete o veículo  baseado no id informado.

## Motoristas

 **/drivers**  -> É responsavel por todas as rotas de motoristas.

#### POST
 **/drivers** -> Cria um novo motorista é necessário informar o nome do motorista na requisição.

#### GET

**/drivers** -> Lista todos os motoristas cadastrados na aplicação


### GET
**/drivers/:id** -> Retorna um motorista baseado no id informado.

### PUT
**/drivers/:id** ->  Atualiza um motorista baseado no id informado.

### DELETE
**/drivers/:id** -> Deleta o motorista baseado no id informado.


## Agendamento

### POST
**/appointments** -> Cria um novo agendamento

**/appoitments** -> Lista todos os agendamentos cadastrados
