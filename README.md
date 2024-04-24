# Primer Parcial Servidores

```
docker rm -f $(docker ps -aq)
```

1.- En Docker montar un contenedor de Mysql, con el nombre “contenedor-examen”, redireccionando los mismos puertos que usa mysql.

```bash
docker run --name contenedor-examen -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=q1-app mysql
```

2.- En Docker montar un contenedor para Wordpress con el nombre “wordpress-examen”, redireccionando el puerto que usa apache, este contenedor debe conectarse a la base de datos del primer contenedor “contenedor-examen”.

```bash
docker run --name wordpress-examen -d -p 8080:80 -e WORDPRESS_DB_HOST=172.17.0.2 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=123 -e WORDPRESS_DB_NAME=q1-app wordpress
```


3.- Crear un pequeño proyecto (sin estilos ni detalles visuales o de validacion) para que una aplicación web escrita en nodejs se conecte a una base de datos para insertar y listar libros. (con los campos de titulo y autor.) 

```bash
git clone https://github.com/KEVIN-117/PrimerParcialServidores-s1.git
cd PrimerParcialServidores-s1
```


4.- Escribir un archivo Dockerfile para desplegar el sistema de la pregunta 3, redireccionando los puertos apropiados.

- envs

```
PORT
DB_HOST
DB_PORT
DB_NAME
```

- Run Dockerfile

- ejecutar un contenedor con la imagen de mongo
```
docker run --name some-mongo -p 27017:27017 --volume --volume ${pwd}/data/mongo:/data/db -e MONGO_INITDB_DATABASE=books -d mongo:latest
```

- crear la imagen de la aplicacion
```
docker build -t node-app .
```

- crear un contenedor a partir de la unagen

```
docker run --name node-app -e PORT=3000 -e DB_HOST=172.17.0.2 -e DB_PORT=27017 -e DB_NAME=books -p 3000:3000 node-app
```