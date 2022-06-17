
How to set up your working environment:

Option 1. Long way.

1. Install Docker.
2. Once docker is installed in your computer, you go to the Dashboard.
3. In the Dashboard, you go to the Dev Environments option.
4. There you press Create.
5. Pase the base directory of the Repo you want to copy.
6. And press create.
7. After the container is created and running, you press open in VisualStudio.
8. It will ask you to install a plug in if it is not already there.
9. Once you are in the container in VisualStudio these are the commands to install Django:
    - sudo apt-get update
    - sudo apt install python3-pip
    - pip3 install django
    - pip3 install djangorestframework

And that's it, you have the container set up and runing with the same setup I have.

Option 2. Short way.

1. Once you have been through steps 1 to 9. You make installs.sh executable with 
"chmod u+x installs.sh" and run it with "./installs.sh". 
