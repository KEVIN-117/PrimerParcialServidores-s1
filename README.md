# Primer Parcial Servidores

1.- En Docker montar un contenedor de Mysql, con el nombre “contenedor-examen”, redireccionando los mismos puertos que usa mysql.

```bash
docker run --name contenedor-examen-db -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=q1-app mysql
```

2.- En Docker montar un contenedor para Wordpress con el nombre “wordpress-examen”, redireccionando el puerto que usa apache, este contenedor debe conectarse a la base de datos del primer contenedor “contenedor-examen”.

```bash
docker run --name contenedor-examen-app -d -p 8080:80 WORDPRESS_DB_HOST=172.17.0.2 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=123 -e WORDPRESS_DB_NAME=q1-app wordpress
```


3.- Crear un pequeño proyecto (sin estilos ni detalles visuales o de validacion) para que una aplicación web escrita en nodejs se conecte a una base de datos para insertar y listar libros. (con los campos de titulo y autor.) 



4.- Escribir un archivo Dockerfile para desplegar el sistema de la pregunta 3, redireccionando los puertos apropiados.