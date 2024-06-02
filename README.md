Es un proyecto basado en un sistema bancario social, en donde se pueden ingresar usuarios, crear cuentas de préstamos, ahorro, crear grupos de cooperativas 
y de esa manera gestionarlas, mediante el proyecto podemos crear, editar, mostrar y eliminar cada función del proyecto.


Instalación y uso del sistema:

1- Se necesitan los siguientes componentes: Node.JS, Visual Studio Code
2- Se dirigen hacia la dirección del proyecto en Github:
https://github.com/rhonnyjaimes/sistema-bancario-servidor
3- Seleccionan a Code y Local, luego los descargamos en Download ZIP
4- A partir de esto, nos quedaria en ZIP y lo extraemos, se colocará en una carpeta
5- Luego, abrimos Visual Studio Code y pasamos/abrimos la carpeta dentro del programa, desde Archivo/Abrir Carpeta
6- Ahora que tenemos nuestro proyecto colocado, tan solo tenemos que abrir consola con CTRL + Ñ o Desde Terminal/Abrir Terminal 
7- Al iniciar la terminal, vamos a instalar los paquetes que tiene el proyecto, utilizando npm i o npm install 
8- Luego usamos el comando npm start y el programa se ejecutará
9- Vamos hacia el enlace http://localhost:3000/usuarios y ahí tendremos el proyecto ejecutándose.
10- Utilizar un cliente HTTP (como Thunder Client) para interactuar con los endpoints del sistema.


Instrucciones de uso para Thunderclient
Agregar una Cooperativa

Método: POST
Ruta: localhost:3000/cooperativas
Cuerpo de la solicitud (JSON):
{
  "id": "cooperativa1",
  "nombre": "Cooperativa Ejemplo",
  "usuarios": ["usuario1"]
}

{	
	"id":1,
	"nombre": "Cooperativa de Junio",
	"usuarios": ["Miguel, Rhonny"]
}
{	
	"id":2,
	"nombre": "Cooperativa de Julio",
	"usuarios": ["Suarez, Jaimes"]
}


Agregar una Cuenta de Ahorro
Método: POST
Ruta: localhost:3000/ahorros
Cuerpo de la solicitud (JSON):
{
  "id": "ahorro1",
  "saldo": 1000,
  "usuarioId": "usuario1"
}

{
  "id": "ahorro2",
  "saldo": 3500,
  "usuarioId": "Miguel"
}

{
  "id": "ahorro3",
  "saldo": 8100,
  "usuarioId": "Rhonny"
}



Agregar una Cuenta de Préstamo
Método: POST
Ruta: localhost:3000/prestamos
Cuerpo de la solicitud (JSON):

{
  "id": "prestamo1",
  "saldoPendiente": 5000,
  "tasaInteres": 5.0,
  "fechaProximoPago": "2024-07-01",
  "usuarioId": "usuario1"
}

Agregar un Usuario
Método: POST
Ruta: localhost:3000/usuarios
Cuerpo de la solicitud (JSON):

{
  "id": "usuario1",
  "nombre": "Usuario Ejemplo",
  "cuentaAhorro": "ahorro1",
  "cuentaPrestamo": "prestamo1"
}


Editar una Cooperativa
Método: PUT
Ruta: localhost:3000/cooperativas/:id
Cuerpo de la solicitud (JSON):
{
  "nombre": "Cooperativa Ejemplo Modificada",
  "usuarios": ["usuario1", "usuario2"]
}

Editar una Cuenta de Ahorro
Método: PUT
Ruta: localhost:3000/ahorros/:id
Cuerpo de la solicitud (JSON):
{
  "saldo": 2000,
  "usuarioId": "usuario1"
}





Editar una Cuenta de Préstamo
Método: PUT
Ruta: localhost:3000/prestamos/:id
Cuerpo de la solicitud (JSON):
{
  "saldoPendiente": 4000,
  "tasaInteres": 4.5,
  "fechaProximoPago": "2024-08-01",
  "usuarioId": "usuario1"
}

Editar un Usuario
Método: PUT
Ruta: localhost:3000/usuarios/:id
Cuerpo de la solicitud (JSON):
{
  "nombre": "Usuario Ejemplo Modificado",
  "cuentaAhorro": "ahorro2",
  "cuentaPrestamo": "prestamo2"
}




Eliminar una Cooperativa
Método: DELETE
Ruta: localhost:3000/cooperativas/:id

Eliminar una Cuenta de Ahorro
Método: DELETE
Ruta: localhost:3000/ahorros/:id

Eliminar una Cuenta de Préstamo
Método: DELETE
Ruta: localhost:3000/prestamos/:id

Eliminar un Usuario
Método: DELETE
Ruta: localhost:3000/usuarios/:id

Ver o Mostrar
Listar todas las Cooperativas
Método: GET
Ruta: localhost:3000/cooperativas
Listar todas las Cuentas de Ahorro
Método: GET
Ruta: localhost:3000 /ahorros

Listar todas las Cuentas de Préstamo
Método: GET
Ruta: /prestamos

Listar todos los Usuarios
Método: GET
Ruta: localhost:3000/usuarios

Obtener Detalles de una Cooperativa
Método: GET
Ruta: localhost:3000/cooperativas/:id

Obtener Detalles de una Cuenta de Ahorro
Método: GET
Ruta: localhost:3000 /ahorros/:id

Obtener Detalles de una Cuenta de Préstamo
Método: GET
Ruta: localhost:3000/prestamos/:id

Obtener Detalles de un Usuario
Método: GET
Ruta: localhost:3000/usuarios/:id


