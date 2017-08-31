# meli
MELI Mini WebApp

Ejecutar npm install para ambos directorios (backend y frontend) de modo que se instalen las dependencias necesarias.

Para correr el servidor, posicionarse en la raiz del proyecto backend desde la CLI y ejecutar:
node server.js

Si no tiene los modulos de node 

Con la configuración actual, el servidor estará escuchando en el puerto 3000. El puerto es configurable desde el archivo config.js

Para correr el cliente, posicionarse en la raiz del proyecto de frontend desde la CLI y ejecutar:
npm start

Por defecto corre en el puerto 4200. Puede parametrizar el puerto desde el archivo package.json.

Ejemplo, cambiando el puerto al 4201:

"scripts": {
    "start": "ng serve --port 4201 --proxy-config proxy.config.json",
}

De tener Angular CLI instalado, puede ejecutarse el siguiente comando en lugar de npm start:

ng server --port 4201 --proxy-config proxy.config.json --open

Automaticamente abrirá una pestaña con el cliente corriendo en el puerto parametrizado (4201). Url: http://localhost:4201. De no especificar --port, correrá en el puerto 4200.

La URL del ExpressJS API Server es parametrizable desde el archivo proxy.config.json
