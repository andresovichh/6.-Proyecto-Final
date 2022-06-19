Ok, 

La idea sería correr el backend con django, que sirva una API, que ya está creada por Ray.

Luego, correr el frontend desde otro lado. Posiblemente usando Nginx. Y tomar los datos para rellenar los campos desde la API que generó Ray.
Para esto, un método posible es usar javascript, con el método fetch y vincularlo al html.

Temas a ver:
1. No sé cómo se vincula js con el html, hay que verlo. No parece demasiado complicado.
2. No sé si la página puede ser servida por Nginx, porque creo que es dynamic content. Hay que investigar.


                        Para instalar Docker en el servidor Ubuntu
    1. corres el archivo docker_install.sh que está en la raiz de 8.NewAproach
    2. seguramente tengas que pasar, para que Docker te ande:
        sudo chmod 666 /var/run/docker.sock


                        Comandos de Docker

1. Para crear un servidor Nginx, que copie el contenido de un directorio específico para mostrarlo en el servidor, se puede usar:

    - docker run -it --rm -d -p 80(este es el numero de puerto externo, digamos):80 --name working-static-80(nombre que le querés poner al docker container) -v ~/site-content(el directorio desde el que nginx va a usar los archivos para mostrarlos):/usr/share/nginx/html nginx

    - docker run -it --rm -d -p 80:80 --name working-static-80 -v ~/site-content:/usr/share/nginx/html nginx

    Acá hay un vínculo que explica paso a paso cómo hacerlo:
        - https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/

2. Comandos básicos:
    Para frenar un container
    - docker stop <nombre o id del container>
    Para eliminar todos los containers detenidos
    - docker container prune

    