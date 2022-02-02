# <img width="70" height="70" src="images/favicon.png"> Litto User Interface

## To help everyone reaching their goals
It happens that when we are busy but we have plenty of time, we throw it anyway. Litto is an app that helps you to read, watch and even study about a certain topic you are interested in! Here users like you can create **plans** to help others learning what they have already learned. Litto is useful also to organize your study and work dividing it into **weeks**.

Here there are some screenshots of the main App pages. From left to right we have the one to create a plan, the one to overview and the one to complete.
<p float="left">
<img width="200" src="images/Create%20Plan.png"> 
<img width="200" src="images/Plan%20Overview.png"> 
<img width="200" src="images/Plan%20Complete.png"> 
</p>


## User Interface
In this repository you will find the UI of Litto with a quite dummy Flask backend (a more complete backend will be provided soon). This is a mobile project that you can decide to build as Web Application or Android Application. It is developed with Angular using the [Taiga UI](https://taiga-ui.dev/) Component Library for the pure frontend and Ionic + Capacitor to build it for Android (and even IOs). To be able to interact with the backend you have to use Ngrok tunneling your backend port.
This project has been developed starting from the main idea, to need finding, then prototyping, coding and finally testing. All the steps are well descripted into the [Project Report](Relazione%20Progetto%20Macchiarini.pdf) made for the Human Computer Interaction exam (in italian).  

### Application Architecture
The main aspects of the app are in *src/app*. Here you can find:
- **components**: that represent the View and the Controller in the MVC, they can also interact with the services asking for an HTTP request;
- **services**: the classes that execute the HTTP requests to the server;
- **model**: the classes that represent the data exchanged from the server to the service (e.g. DTO)

### Building Project
To build the project you have to build the web app at first and then, if you want, to build the Android App.
Install npm using this command `npm install -g npm` and then download the project to a specific folder and run here `ng install` to install the dependency needed.
To build and show a web interface you can run: to build run `ng build` and to show run `ng serve`. This will run the Litto web interface on http://localhost:4200/.

To make the web app usable you have to run also the Python server. To do so you have to install Flask and all its dependencies using `pip install flask`. 
To locally run the server you have to check your local ip address using `ifconfig` on Linux/MacOs or `ipconfig` on Windows. Paste the URL as http://localIP:8000 on *baseUrl* of restTesting.py and all the files of *src/app/services*. Now you are able to run the server with `python3 restServices.py`.

To run the Android App you first of all have to install Android Studio. Then, on Linux, you have to set the environment variable to the Android Studio location:

      export CAPACITOR_ANDROID_STUDIO_PATH=/path/to/android-studio/bin/studio.sh

and once you have done that run:

      sudo ionic build && npx cap copy && npx cap sync && npx cap open android
      
This will build your angular code and open your Android Studio app.
You can now start using Litto into your local network!

If you want to use it everywhere (as an Android App only, not a web app) you can use Ngrok. Install Ngrok and run 

      ngrok http -host-header=rewrite localIP:8000
      
This will give you an URL that you have to paste on *baseUrl* of restTesting.py and all the files of *src/app/services*.
So to rebuild your project run

      sudo ionic build && npx cap copy && npx cap sync

#### Credits
Project developed by Lorenzo Macchiarini for the Human Computer Interaction course tought by Prof. Andrew Bagdanov at Università degli Studi di Firenze.
