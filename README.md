![Logo](https://github.com/Ouyei/CriptoGateway/blob/main/images/logo_CG.png) 

CryptoGateway was born from the need for operators and consumers to have new payment methods and cryptocurrency. As a differential, our solution helps gas station operators to have a new collection method, but which in turn does not generate additional costs. On the consumer's side, you can add an easy, fast and secure method to your payment options.

## Table of contents

- [Motivations](#motivations)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Features](#features)
- [Landing Page](#landing_page)
- [Contact](#contact)
- [How to use](#how_to_use)

## Motivations

- Solve a real business problem
- Dive deep into Django and JS

## Screenshots

<p align="center">Select Pump</p>

<p align="center">
<img src="https://github.com/andresovichh/6.-Proyecto-Final/blob/master/images/select%20pump.jpeg" class="centerImage" width="600" height="400" />
</p>

<p align="center">Modify Info</p>

<p align="center">
<img src="https://github.com/andresovichh/6.-Proyecto-Final/blob/master/images/modify.jpeg" class="centerImage" width="600" height="400" />
</p>

## Technologies

### Architecture

<p align="center">
<img src="https://github.com/andresovichh/6.-Proyecto-Final/blob/master/images/arch.PNG" class="centerImage" width="600" height="400" />
></p>

### Libraries and tools

<p align="center">
<img src="https://github.com/Ouyei/CriptoGateway/blob/main/images/Stack.png" width="700" height="500">
</p>

## Features

- 

Considerations for improvement: 

- 

## Landing Page and Deployment

Landing page: [here](https://www.andreshenderson.tech/)

## Contact

Created by:

- [Andres Henderson](https://github.com/andresovichh)
- [Raymundo Barrera](https://github.com/RayBar72)
- [Diego Monfort](https://github.com/DiegoMHol)
- [Oscar Bedat](https://github.com/Ouyei)


## How to use

1. To install Django inside a server.

    First of all, you install Docker, and we have two ways to do so:
    
    1. First, you can run the script we have provided you to install Docker by following these steps:
        
        a. chmod u+x install_docker.sh
        b. ./install_docker.sh

    or you can use a way provided by Docker:

        a. curl -fsSL https://get.docker.com -o get-docker.sh

    2. run:

        chmod 666 /var/run/docker.sock

    3. Then we pull an image for our django project, here we will be installing
    the latest version of Django:

        sudo docker pull fnndsc/ubuntu_python3

    4. Then we RUN a container from this image we just downloaded. Special care should be taken as ports must be carefully chosen so the image can be accessed from outside the container and the server.

    For example:

        sudo docker run -ti --rm -d -p 8000:8000 --name <name of my container> -v ~/<local source path>:/home/<user>/<destination inside container path> fnndsc/ubuntu_python3
    
    This alows us to work using port 8000 and also change files inside the container by modifying the files at the local source path in the server.

    5. Then we can access the container from the host machine:
    
        sudo docker exec -ti <name of my container> bash
    
    6. Once inside the container, we install Django by running:
        'install_django.sh'
    
    7. After installing Django:

        'pip3 install tzdata'
    
    8. Inside settings.py:

        ALLOW CONNECTIONS FROM = [*]

    9. Then we can run the Django server:

        python3 manage.py runserver 0.0.0.0:8000


2. To install Nginx:

    1. Inside the server, run:
    
        docker_install.sh

        sudo chmod 666 /var/run/docker.sock

    2. Then we create an Nginx Docker that will be using files placed at the source in the host server with the following command:

        * docker run -it --rm -d -p 80(external port number):80 --name working-static-80(name for our container) -v ~/site-content(the source of files that will be used inside the Nginx Docker image):/usr/share/nginx/html nginx

        * Eg.
            
        docker run -it --rm -d -p 80:80 --name working-static-80 -v ~/site-content:/usr/share/nginx/html nginx

        A step by step guide: https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
    
        
