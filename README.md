# Simple api calendario semana a semana

## Como usar?

_1. Debes tener instalado NodeJs y MongoDb en tu maquina_

_2. Abre una terminal en la carpeta raiz del proyecto y ejecuta el siguiente comando: "npm install"_

_3. ejecuta el comando "npm run start"_

## Que hace?

_Es una simple api calendario, devuelve la semana en curso, en funcion de una variable "count" donde 1=semana actual, 2 semana siguiente etc..._

## ENDPOINTs

* **GET**: _"/api/week/:count"_

_"count" debe ser un numero entero y positivo min 1_

_si "count" es igual a 1 debe regresar la semana actual_