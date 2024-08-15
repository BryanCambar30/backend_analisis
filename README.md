#nodejs_sqlserver
Creación de un Rest API Microsoft SQL Server &amp; Nodejs CRUD

Pasos para instalar los modulos
1. npm install mssql express morgan cors dotenv
2. npm i @babel/core @babel/cli @babel/preset-env @babel/node @babel/plugin-transform-runtime nodemon -D
3. Agregar en el package.json en "scripts": 
"                                "dev": "nodemon src/index.js --exec babel-node"
4. Dentro de la carpeta "src" crear las siguientes carpetas: "routes", "controllers", "database" y archivos: "app.js", "config.js"

Configracion de sql server configuration manager
5. Ir a la ruta de C:\Program Files (x86)\Microsoft SQL Server\150\Shared
6. Ejecutar el cmd como administrador y luego colocar el comando mofcomp sqlmgmproviderxpsp2up.mof
7. Habilitar el TCP/IP en SQL Server Network Congfiguration, dentro de la configuracion TC/IP agregar el puero 1433 a ambos los dos ultimos TCP Port

Para crear una distribucion
8. Agregar en package.json en "scripts": 
                                "build": "babel src -d dist", 
                                "start": "node dist"
