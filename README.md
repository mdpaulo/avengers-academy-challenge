# avengers-academy-challenge

# Tecnologias utilizadas na construção do Backend
Node.JS
Express
Consign
Socket.IO
Body-Parser
MySQL


# Instruções para iniciar o backend 

Como a aplicação utiliza MYSQL como SGBD, é necessário que tenha uma instalação previa em sua máquina ou servidor.  

 

Caso esteja utilizando sistema operacional Linux com distro Ubuntu 20.04, basta utilizar os comandos no terminal: 

sudo apt update && sudo apt install mysql-server -y 

 

Após concluir a instalação, para acessar o MySql basta utilizar o comando abaixo  

sudo mysql 

 

Caso esteja utilizando o Windows, baixe o executável no site https://dev.mysql.com/downloads/mysql/5.7.html/ 

 

Com acesso a banco de dados utilize os comandos do script ( avengers-academy-challenge/database/MySqlDatabaseInit.sql), em sequência para iniciar a estrutura da base. 

 

OPCIONAL: Para testar os endpoints do backend, é aconselhável utilizar a ferramenta Postman. As urls já estão criadas nos arquivos de collection dentro da pasta  (avengers-academy-challenge/ postman/), basta importa-las na ferramenta. 

Você pode utilizar a versão web da ferramenta ou instala-la em seu sistema operacional. Caso esteja utilizando Ubuntu basta utilizar a gerenciador de pacotes snap digitando o comando abaixo em seu terminal: 

snap install postman 

Se estiver utilizando windows basta baixar o instalador em https://www.postman.com/downloads/ 

 

Para Iniciar a aplicação basta executar os comandos abaixo, pelo terminal, na pasta do backend (avengers-academy-challenge/aac-backend/) 

Para instalar: 

npm install 

Para Iniciar: 

npm start 
