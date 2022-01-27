from dataclasses import dataclass
import os
from os.path import isfile, join
from re import S
from flask import Flask, flash, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename
from flask import send_file
import json
app = Flask(__name__)
app.secret_key = b'sese'


UPLOAD_FOLDER = '/home/lorem/Documents/assets/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

baseUrl = "http://ngrok.io"
interests = [
    {"inter": "Racing",
     "url": "https://assets.materialup.com/uploads/d6522050-2ab3-4c75-945c-90fbb0ddd5ac/preview.jpg"},
    {"inter": "Sing",
     "url": "https://images-platform.99static.com/AE9lvXzVWzFcSodN0yuWc5d5Ow8=/0x9:2040x2049/500x500/top/smart/99designs-contests-attachments/80/80662/attachment_80662469"},
    {"inter": "Piano",
     "url": "https://i.fbcd.co/products/original/57456898a463e6cebbeacf1e406891d962044e6bb26e4b973e0998cb3ac0d452.jpg"},
    {"inter": "ML",
     "url": "https://st2.depositphotos.com/3907761/43381/v/600/depositphotos_433814350-stock-illustration-machine-learning-icon-vector-illustration.jpg"},
    {"inter": "Coding",
     "url": "https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"},
    {"inter": "Baking",
     "url": "https://img.myloview.it/quadri/bakery-logo-design-bakery-sign-vector-whisk-logo-design-700-247463813.jpg"},
    {"inter": "Reading",
     "url": "https://cdn4.vectorstock.com/i/1000x1000/71/28/logo-girl-reading-a-book-vector-4227128.jpg"},
    {"inter": "Gaming",
     "url": "https://dbdzm869oupei.cloudfront.net/img/alfombretaratoli/preview/40906.png"},
    {"inter": "English",
     "url": "https://banner2.cleanpng.com/20180729/bp/kisspng-logo-primera-air-organization-business-english-lan-british-flag-5b5e7d460d5b11.4916650115329191100547.jpg"},
    {"inter": "Engineering",
     "url": "https://t3.ftcdn.net/jpg/03/90/45/84/360_F_390458464_c2oKzb2yXAVQrgLPG1N5mfRqqdEuOaLq.jpg"},
    {"inter": "Gardening",
     "url": "https://img.myloview.it/carta-da-parati/gardening-logo-with-shovel-icon-and-tree-with-green-leaves-logo-template-700-251748350.jpg"},
    {"inter": "Painting",
     "url": "https://t3.ftcdn.net/jpg/02/82/94/36/360_F_282943611_ga5RuA5niWY8wEUmR8ZjNT9AyEt0aRD6.jpg"},
]

tags = ["Java", "JavaScript", "Java Isle", "JavaEE", "Programming",
        "Program", "Java Programming", "Python Programming", "Machine Learning", "Python", "Coding", "Cook", "Sing", "Read", "Riding Bike", "Painting", ]

mainMaterial = [
    {
        "type": "YouTube",
        "title": "Introduction to variables (in italian)",
        "link": "7Aotk1edPlM",
        "description": "Variables is a concept indipendent to the coding language. Variables are used in all kind of scenarios: from videogames to smartphone apps and so on."
    },
    {
        "type": "Link",
        "link": "https://www.w3schools.com/java/java_variables.asp",
        "title": "Java Variables",
        "description": "An overview of how the variables are declared and managed in Java!"
    },
    {
        "type": "Spreaker",
        "title": "Listen to some coding music",
        "link": "https://widget.spreaker.com/player?episode_id=17577829",
        "description": ""
    },
    {
        "type": "Text",
        "title": "Loops Intro",
        "text": "<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">In this lesson, you’ll learn about loops. </span><span style=\"color: #43b02a;\"><b>Loops</b></span><span style=\"font-weight: 400;\">\n are a way to tell a computer to do something many times in a row. \nComputers are really good at doing things over and over again, and doing\n them fast. </span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">Imagine\n you were asked to write your name down 100 times in a row. This might \ntake you a long time, and you might make a few mistakes along the way. \nThis is a perfect task for a computer, which would be able to do it \nreally fast and without any mistakes. You can take advantage of this by \nusing loops. A loop is a block of code that will repeat over and over \nagain.</span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">There are two types of loops, “while loops” and “for loops”. </span><span style=\"color: #43b02a;\"><b>While loops</b></span><span style=\"font-weight: 400;\"> will repeat&nbsp;while a condition is true, and </span><span style=\"color: #43b02a;\"><b>for loops</b></span><span style=\"font-weight: 400;\"> will repeat a certain number of times. You’ll also learn about </span><b><span style=\"color: #43b02a;\">for each loops </span></b><span style=\"font-weight: 400;\">which are a type of </span><span style=\"color: #43b02a;\"><b>for loop</b></span><span style=\"font-weight: 400;\"> that repeats once for each item in a list. Let’s go through each of them in more detail.</span></span></p>"
    },
    {
        "type": "PDF",
        "title": "Deep dive into OOP",
        "file": baseUrl + "/get_pdf/OOProgWithJava-notes.pdf"
    }]

plans = [
    {"id": 0,
     "title": "0 to Java in 5 Weeks",
     "subtitle": "Plan to introduce Java and its main concepts: loops, variables, lists, functions. Object Oriented Programming",
     "duration": 5,
     "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png",
     "level": 1,
     "steps": [
         {
             "planWeek": 1,
             "endDate": "12.02.2022",
             "title": "Variables",
             "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
             "planName": "0 to Java in 5 Weeks",
             "material": [
                 {
                     "type": "YouTube",
                     "title": "Introduction to variables (in italian)",
                     "link": "7Aotk1edPlM",
                     "description": "Variables is a concept indipendent to the coding language. Variables are used in all kind of scenarios: from videogames to smartphone apps and so on."
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_intro.asp",
                     "title": "Intro to Java ",
                     "description": "First of all let's see some Java syntax"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_variables.asp",
                     "title": "Java Variables",
                     "description": "An overview of how the variables are declared and managed in Java!"
                 },
                 {
                     "type": "Spreaker",
                     "title": "Listen to some coding music",
                     "link": "https://widget.spreaker.com/player?episode_id=17577829",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 2,
             "endDate": "12.02.2022",
             "title": "Loops",
             "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!",
             "planName": "0 to Java in 5 Weeks",
             "material": [
                 {
                     "type": "Text",
                     "title": "Loops Intro",
                     "text": "<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">In this lesson, you’ll learn about loops. </span><span style=\"color: #43b02a;\"><b>Loops</b></span><span style=\"font-weight: 400;\">\n are a way to tell a computer to do something many times in a row. \nComputers are really good at doing things over and over again, and doing\n them fast. </span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">Imagine\n you were asked to write your name down 100 times in a row. This might \ntake you a long time, and you might make a few mistakes along the way. \nThis is a perfect task for a computer, which would be able to do it \nreally fast and without any mistakes. You can take advantage of this by \nusing loops. A loop is a block of code that will repeat over and over \nagain.</span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">There are two types of loops, “while loops” and “for loops”. </span><span style=\"color: #43b02a;\"><b>While loops</b></span><span style=\"font-weight: 400;\"> will repeat&nbsp;while a condition is true, and </span><span style=\"color: #43b02a;\"><b>for loops</b></span><span style=\"font-weight: 400;\"> will repeat a certain number of times. You’ll also learn about </span><b><span style=\"color: #43b02a;\">for each loops </span></b><span style=\"font-weight: 400;\">which are a type of </span><span style=\"color: #43b02a;\"><b>for loop</b></span><span style=\"font-weight: 400;\"> that repeats once for each item in a list. Let’s go through each of them in more detail.</span></span></p>"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_conditions.asp",
                     "title": "If-Else",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_while_loop.asp",
                     "title": "While",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_for_loop.asp",
                     "title": "For",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 3,
             "endDate": "12.02.2022",
             "title": "Lists",
             "subtitle": "Here comes the lists where there are Arrays and Lists!",
             "planName": "0 to Java in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_arrays.asp",
                     "title": "Arrays",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://docs.oracle.com/javase/8/docs/api/java/util/List.html",
                     "title": "Lists dive into the documentation",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 4,
             "endDate": "12.02.2022",
             "title": "Functions",
             "subtitle": "Which better way to reuse your code than using functions?",
             "planName": "0 to Java in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods.asp",
                     "title": "Intro to Java Methods",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods_param.asp",
                     "title": "How to use parameters",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_recursion.asp",
                     "title": "Recursion!",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 5,
             "endDate": "12.02.2022",
             "title": "OOP",
             "subtitle": "Scratching the surface of Object Oriented Programming!",
             "planName": "0 to Java in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_oop.asp",
                     "title": "Intro to OOP",
                     "description": ""
                 },
                 {
                     "type": "PDF",
                     "title": "Deep dive into OOP",
                     "file": baseUrl + "/get_pdf/OOProgWithJava-notes.pdf"
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
     ],
     },
    {"id": 1,
     "title": "How to Trail Braking",
     "subtitle": "Here you will learn how to bring the braking phase into the corner",
     "duration": 5,
     "level": 2,
     "steps": [
         {"planWeek": 1, "title": "Braking Basics",
             "subtitle": "The braking phase is one of the most important in racing, we will discover how a driver should apply the pressure.", "material": mainMaterial},
         {"planWeek": 2, "title": "Braking Straight",
             "subtitle": "This week we will learn how to make the car more stable under braking", "material": []},
         {"planWeek": 3, "title": "Brake, Lift, Accelerate",
             "subtitle": "The first step to get into the trail braking mindset", "material": []},
         {"planWeek": 4, "title": "Brake Into The Corner",
             "subtitle": "So close to trail braking", "material": []},
         {"planWeek": 5, "title": "Trail Braking",
             "subtitle": "Apply the brake into the corner and rotate the car faster!", "material": []}
     ],
     "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg"},
    {"id": 2,
     "title": "Reading Spider-Man Ultimate",
     "subtitle": "The Michael Bendis remake of one of the best superheroes in the Marvel Comics ",
     "duration": 5,
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "Vol 1-6 Week 1",
             "subtitle": "Reading Spider-Man Ultimate 1-6", "material": mainMaterial},
         {"planWeek": 2, "title": "Vol 7-12 Week 2",
             "subtitle": "Reading Spider-Man Ultimate 7-12", "material": []},
         {"planWeek": 3, "title": "Vol 13-18 Week 3",
             "subtitle": "Reading Spider-Man Ultimate 13-18", "material": []},
         {"planWeek": 4, "title": "Vol 19-24 Week 4",
             "subtitle": "Reading Spider-Man Ultimate 19-24", "material": []},
         {"planWeek": 5, "title": "Vol 25-30 Week 5",
             "subtitle": "Reading Spider-Man Ultimate 25-30", "material": []},
     ],
     "imageUrl": "https://i.pinimg.com/originals/87/74/9d/87749dade5d236a1665f6c37c0258fe7.jpg"},
    {"id": 3,
     "title": "Intro to YOLOv5",
     "subtitle": "Deep dive into the YOLOv5 theory and programming",
     "duration": 3,
     "level": 4,
     "steps": [
         {"planWeek": 1, "title": "What is the Yolo",
             "subtitle": "How it works a CNN? How it predicts the output?", "material": mainMaterial},
         {"planWeek": 2, "title": "Programming the Yolo",
             "subtitle": "Write some code using PyTorch!", "material": []},
         {"planWeek": 3, "title": "Yolo online training", "subtitle": "Let's train the Yolo using our custom dataset", "material": []}, ],
     "imageUrl": "https://www.mdpi.com/remotesensing/remotesensing-12-01667/article_deploy/html/images/remotesensing-12-01667-g002.png"},
    {"id": 4,
     "title": "0 to Python in 5 Weeks",
     "subtitle": "Plan to introduce Python and its main concepts: loops, variables, lists, functions. Object Oriented Programming",
     "duration": 5,
     "level": 1,
     "steps": [
         {
             "planWeek": 1,
             "endDate": "12.02.2022",
             "title": "Variables",
             "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
             "planName": "0 to Python in 5 Weeks",
             "material": [
                 {
                     "type": "YouTube",
                     "title": "Introduction to variables (in italian)",
                     "link": "7Aotk1edPlM",
                     "description": "Variables is a concept indipendent to the coding language. Variables are used in all kind of scenarios: from videogames to smartphone apps and so on."
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_intro.asp",
                     "title": "Intro to Java ",
                     "description": "First of all let's see some Java syntax"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_variables.asp",
                     "title": "Java Variables",
                     "description": "An overview of how the variables are declared and managed in Java!"
                 },
                 {
                     "type": "Spreaker",
                     "title": "Listen to some coding music",
                     "link": "https://widget.spreaker.com/player?episode_id=17577829",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 2,
             "endDate": "12.02.2022",
             "title": "Loops",
             "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!",
             "planName": "0 to Python in 5 Weeks",
             "material": [
                 {
                     "type": "Text",
                     "title": "Loops Intro",
                     "text": "<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">In this lesson, you’ll learn about loops. </span><span style=\"color: #43b02a;\"><b>Loops</b></span><span style=\"font-weight: 400;\">\n are a way to tell a computer to do something many times in a row. \nComputers are really good at doing things over and over again, and doing\n them fast. </span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">Imagine\n you were asked to write your name down 100 times in a row. This might \ntake you a long time, and you might make a few mistakes along the way. \nThis is a perfect task for a computer, which would be able to do it \nreally fast and without any mistakes. You can take advantage of this by \nusing loops. A loop is a block of code that will repeat over and over \nagain.</span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">There are two types of loops, “while loops” and “for loops”. </span><span style=\"color: #43b02a;\"><b>While loops</b></span><span style=\"font-weight: 400;\"> will repeat&nbsp;while a condition is true, and </span><span style=\"color: #43b02a;\"><b>for loops</b></span><span style=\"font-weight: 400;\"> will repeat a certain number of times. You’ll also learn about </span><b><span style=\"color: #43b02a;\">for each loops </span></b><span style=\"font-weight: 400;\">which are a type of </span><span style=\"color: #43b02a;\"><b>for loop</b></span><span style=\"font-weight: 400;\"> that repeats once for each item in a list. Let’s go through each of them in more detail.</span></span></p>"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_conditions.asp",
                     "title": "If-Else",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_while_loop.asp",
                     "title": "While",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_for_loop.asp",
                     "title": "For",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 3,
             "endDate": "12.02.2022",
             "title": "Lists",
             "subtitle": "Here comes the lists where there are Arrays and Lists!",
             "planName": "0 to Python in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_arrays.asp",
                     "title": "Arrays",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://docs.oracle.com/javase/8/docs/api/java/util/List.html",
                     "title": "Lists dive into the documentation",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 4,
             "endDate": "12.02.2022",
             "title": "Functions",
             "subtitle": "Which better way to reuse your code than using functions?",
             "planName": "0 to Python in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods.asp",
                     "title": "Intro to Java Methods",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods_param.asp",
                     "title": "How to use parameters",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_recursion.asp",
                     "title": "Recursion!",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 5,
             "endDate": "12.02.2022",
             "title": "OOP",
             "subtitle": "Scratching the surface of Object Oriented Programming!",
             "planName": "0 to Python in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_oop.asp",
                     "title": "Intro to OOP",
                     "description": ""
                 },
                 {
                     "type": "PDF",
                     "title": "Deep dive into OOP",
                     "file": baseUrl + "/get_pdf/OOProgWithJava-notes.pdf"
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
     ],
        "imageUrl": "https://blog.giotech.net/wp-content/uploads/2018/07/Python.png",
     },
    {"id": 5,
     "title": "0 to C++ in 5 Weeks",
     "subtitle": "Plan to introduce C++ and its main concepts: loops, variables, lists, functions. Object Oriented Programming",
     "duration": 5,
     "imageUrl": "https://www.ambrix.net/wp-content/uploads/2019/05/cpp-logo.png",
     "level": 1,
     "steps": [
         {
             "planWeek": 1,
             "endDate": "12.02.2022",
             "title": "Variables",
             "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
             "planName": "0 to C++ in 5 Weeks",
             "material": [
                 {
                     "type": "YouTube",
                     "title": "Introduction to variables (in italian)",
                     "link": "7Aotk1edPlM",
                     "description": "Variables is a concept indipendent to the coding language. Variables are used in all kind of scenarios: from videogames to smartphone apps and so on."
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_intro.asp",
                     "title": "Intro to Java ",
                     "description": "First of all let's see some Java syntax"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_variables.asp",
                     "title": "Java Variables",
                     "description": "An overview of how the variables are declared and managed in Java!"
                 },
                 {
                     "type": "Spreaker",
                     "title": "Listen to some coding music",
                     "link": "https://widget.spreaker.com/player?episode_id=17577829",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 2,
             "endDate": "12.02.2022",
             "title": "Loops",
             "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!",
             "planName": "0 to C++ in 5 Weeks",
             "material": [
                 {
                     "type": "Text",
                     "title": "Loops Intro",
                     "text": "<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">In this lesson, you’ll learn about loops. </span><span style=\"color: #43b02a;\"><b>Loops</b></span><span style=\"font-weight: 400;\">\n are a way to tell a computer to do something many times in a row. \nComputers are really good at doing things over and over again, and doing\n them fast. </span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">Imagine\n you were asked to write your name down 100 times in a row. This might \ntake you a long time, and you might make a few mistakes along the way. \nThis is a perfect task for a computer, which would be able to do it \nreally fast and without any mistakes. You can take advantage of this by \nusing loops. A loop is a block of code that will repeat over and over \nagain.</span></span></p>\n<p><span style=\"font-size: 14px;\"><span style=\"font-weight: 400;\">There are two types of loops, “while loops” and “for loops”. </span><span style=\"color: #43b02a;\"><b>While loops</b></span><span style=\"font-weight: 400;\"> will repeat&nbsp;while a condition is true, and </span><span style=\"color: #43b02a;\"><b>for loops</b></span><span style=\"font-weight: 400;\"> will repeat a certain number of times. You’ll also learn about </span><b><span style=\"color: #43b02a;\">for each loops </span></b><span style=\"font-weight: 400;\">which are a type of </span><span style=\"color: #43b02a;\"><b>for loop</b></span><span style=\"font-weight: 400;\"> that repeats once for each item in a list. Let’s go through each of them in more detail.</span></span></p>"
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_conditions.asp",
                     "title": "If-Else",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_while_loop.asp",
                     "title": "While",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_for_loop.asp",
                     "title": "For",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 3,
             "endDate": "12.02.2022",
             "title": "Lists",
             "subtitle": "Here comes the lists where there are Arrays and Lists!",
             "planName": "0 to C++ in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_arrays.asp",
                     "title": "Arrays",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://docs.oracle.com/javase/8/docs/api/java/util/List.html",
                     "title": "Lists dive into the documentation",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 4,
             "endDate": "12.02.2022",
             "title": "Functions",
             "subtitle": "Which better way to reuse your code than using functions?",
             "planName": "0 to C++ in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods.asp",
                     "title": "Intro to Java Methods",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_methods_param.asp",
                     "title": "How to use parameters",
                     "description": ""
                 },
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_recursion.asp",
                     "title": "Recursion!",
                     "description": ""
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
         {
             "planWeek": 5,
             "endDate": "12.02.2022",
             "title": "OOP",
             "subtitle": "Scratching the surface of Object Oriented Programming!",
             "planName": "0 to C++ in 5 Weeks",
             "material": [
                 {
                     "type": "Link",
                     "link": "https://www.w3schools.com/java/java_oop.asp",
                     "title": "Intro to OOP",
                     "description": ""
                 },
                 {
                     "type": "PDF",
                     "title": "Deep dive into OOP",
                     "file": baseUrl + "/get_pdf/OOProgWithJava-notes.pdf"
                 }
             ],
             "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
         },
     ],

     },
    {"id": 6,
     "title": "Unifi Programming Course SWE",
     "subtitle": "Università degli Studi di Firenze course of programming in C++ for Software Engineering",
     "duration": 8,
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoRHWt2d3aN_6NJmN_MSdPknQh0eHpWDePFiFFepCRLXdduNDszHoUczrf5d109TsY5Y&usqp=CAU",
     "level": 3,
     "steps": [
         {"planWeek": 1, "title": "Variables",
             "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!", "material": mainMaterial},
         {"planWeek": 2, "title": "Loops",
             "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!", "material": []},
         {"planWeek": 3, "title": "Lists",
             "subtitle": "Here comes the lists where there are Arrays and Lists!", "material": []},
         {"planWeek": 4, "title": "Functions",
             "subtitle": "Which better way to reuse your code than using functions?", "material": []},
         {"planWeek": 5, "title": "OOP",
             "subtitle": "Scratching the surface of Object Oriented Programming!", "material": []},
         {"planWeek": 6, "title": "Inheritance",
             "subtitle": "How the Inheritance works", "material": []},
         {"planWeek": 7, "title": "Interfaces",
             "subtitle": "How the Interfaces works", "material": []},
         {"planWeek": 8, "title": "Design Patterns", "subtitle": "The best Design Patterns are here!", "material": []}]
     },
    {"id": 7,
     "title": "Unifi Programming Course CS",
     "subtitle": "Università degli Studi di Firenze course of programming in C++ for Computer Science",
     "duration": 8,
     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nfc8xDlMLykpEOCj1TBBj9IeNmzADLkWlQ&usqp=CAU",
     "level": 3,
     "steps": [
         {"planWeek": 1, "title": "Variables",
             "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!", "material": mainMaterial},
         {"planWeek": 2, "title": "Loops",
             "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!", "material": []},
         {"planWeek": 3, "title": "Lists",
             "subtitle": "Here comes the lists where there are Arrays and Lists!", "material": []},
         {"planWeek": 4, "title": "Functions",
             "subtitle": "Which better way to reuse your code than using functions?", "material": []},
         {"planWeek": 5, "title": "OOP",
             "subtitle": "Scratching the surface of Object Oriented Programming!", "material": []},
         {"planWeek": 6, "title": "Inheritance",
             "subtitle": "How the Inheritance works", "material": []},
         {"planWeek": 7, "title": "Interfaces",
             "subtitle": "How the Interfaces works", "material": []},
         {"planWeek": 8, "title": "Design Patterns", "subtitle": "The best Design Patterns are here!", "material": []}]
     },
    {"id": 8,
     "title": "Fitness Program",
     "subtitle": "How to be fit for the summer time!",
     "duration": 10,
     "imageUrl": "https://energy.roma.it/wp-content/uploads/2015/04/fitness2016.jpg",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "Week 1",
             "subtitle": "Squats", "material": mainMaterial},
         {"planWeek": 2, "title": "Week 1", "subtitle": "PushUps", "material": []},
         {"planWeek": 3, "title": "Week 1", "subtitle": "Lunges", "material": []},
         {"planWeek": 4, "title": "Week 1",
             "subtitle": "Standing overhead dumbbell presses", "material": []},
         {"planWeek": 5, "title": "Week 1",
             "subtitle": "Dumbbell rows", "material": []},
         {"planWeek": 6, "title": "Week 1",
             "subtitle": "Single-leg deadlifts", "material": []},
         {"planWeek": 7, "title": "Week 1", "subtitle": "Burpees", "material": []},
         {"planWeek": 8, "title": "Week 1",
             "subtitle": "Side planks", "material": []},
         {"planWeek": 9, "title": "Week 1", "subtitle": "Planks", "material": []},
         {"planWeek": 10, "title": "Week 1", "subtitle": "Glute bridge", "material": []}, ]
     },
    {"id": 9,
     "title": "Python Data Structures",
     "subtitle": "How can we represent all the data we would like? Python helps us with some already programmed",
     "duration": 2,
     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/1200px-6n-graf.svg.png",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "Using Dictionaries",
             "subtitle": "Discionaries are so useful in Python. Yo can even create a Json with them", "material": mainMaterial},
         {"planWeek": 2, "title": "Using Graphs", "subtitle": "Graphs are one of the best struftures for software. Let's dive into them!", "material": []}, ]
     },
    {"id": 10,
     "title": "Music Production Programs",
     "subtitle": "Let's see wich are the most famous tools to produce music!",
     "duration": 5,
     "imageUrl": "https://m.media-amazon.com/images/I/71MRnKJ3XfL._AC_SL1500_.jpg",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "GarageBand",
             "subtitle": "The easiest and most famous DAW, only for IOS", "material": mainMaterial},
         {"planWeek": 2, "title": "Audacity",
             "subtitle": "More or less a DAW... You can edit your tracks!", "material": []},
         {"planWeek": 3, "title": "FlStudio",
             "subtitle": "One of the most famous and easier! Used by Martin Garrix and some more Djs", "material": []},
         {"planWeek": 4, "title": "Ableton",
             "subtitle": "One of the most famous and difficult! Used by Nicky Romero and some more Djs", "material": []},
         {"planWeek": 5, "title": "Logic Pro", "subtitle": "Surely the best for production itself. Used by real producers and cinema artists.", "material": []}, ]
     },
    {"id": 11,
     "title": "Python and Machine Learning",
     "subtitle": "ML is increasing its market and it is necessary for everyone to know how to write a program using it!",
     "duration": 4,
     "imageUrl": "https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/deep-learning-vs-machine-learning-t.jpg",
     "level": 4,
     "steps": [
         {"planWeek": 1, "title": "Probability Basics",
             "subtitle": "Some basic tools of probability that will make your life easier.", "material": mainMaterial},
         {"planWeek": 2, "title": "What is a Neural Network",
             "subtitle": "An excursus of the different generes of NN: CNN, RNN, LSTM and so on", "material": []},
         {"planWeek": 3, "title": "PyTorch",
             "subtitle": "How to program with PyTorch!", "material": []},
         {"planWeek": 4, "title": "TensorFlow", "subtitle": "How to program with TensorFlow!", "material": []}, ]
     },
    {"id": 12,
     "title": "Algorithms in Python",
     "subtitle": "Python is a easy to program language, let's find out how to code some cool algorithms",
     "duration": 4,
     "imageUrl": "https://miro.medium.com/max/868/1*WbGV7i6CyOQ5jt6hRnK2Zw.png",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "What is an Algorithm",
             "subtitle": "", "material": []},
         {"planWeek": 2, "title": "Search Algorithm",
             "subtitle": "Searching a certain value of a function is not so straightforward. Let's optimize it", "material": mainMaterial},
         {"planWeek": 3, "title": "Graph Algorithms",
             "subtitle": "Using graphs to optimize routes: telecommunication and autonomous driving will thank for that!", "material": []},
         {"planWeek": 4, "title": "Cryptographic Algorithms", "subtitle": "Some cryptography algoritmhs explained: RSA, El Gamal, Diffie Hellman", "material": []}, ]
     },
    {"id": 13,
     "title": "Plotting with Python",
     "subtitle": "It seems easy and it is: programming and plotting!",
     "duration": 1,
     "imageUrl": "https://matplotlib.org/3.1.1/_images/sphx_glr_simple_plot_001.png",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "How to use Matplotlib", "subtitle": "Plotting everything with Python!", "material": mainMaterial}, ]
     },
    {"id": 14,
     "title": "Programming for CyberSecurity",
     "subtitle": "Have you ever wandered how the cyberdefender and hacker do their job?",
     "duration": 4,
     "imageUrl": "https://media-assets.wired.it/photos/615da10b5a8281a8f96c9d06/master/w_1600%2Cc_limit/hacker-3655668_1920.jpg",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "CTFs",
             "subtitle": "An introduction of the CTF challenges where everyone can test their abilities with cybersecurity", "material": mainMaterial},
         {"planWeek": 2, "title": "Reverse",
             "subtitle": "Let's see how to reverse engineer every program you have", "material": []},
         {"planWeek": 3, "title": "Web",
             "subtitle": "Let's find some bugs in web intefraces! Have you ever heard of RCE?", "material": []},
         {"planWeek": 4, "title": "Cryptography", "subtitle": "Some cryptography algoritmhs explained: RSA, El Gamal, Diffie Hellman", "material": []}, ]
     },
    {"id": 15,
     "title": "Autonomous Driving",
     "subtitle": "How will our cars will be driven autonomously and how will the programming will work.",
     "duration": 5,
     "imageUrl": "https://www.torinowireless.it/wp-content/uploads/2020/12/Self-Driving-Cars.jpg",
     "level": 5,
     "steps": [
         {"planWeek": 1, "title": "Main Concepts",
             "subtitle": "An overview on how an autonomous car works", "material": mainMaterial},
         {"planWeek": 2, "title": "Vision",
             "subtitle": "How can a camera or a lidar help an autonomous car to percieve the environment?", "material": []},
         {"planWeek": 3, "title": "Mapping",
             "subtitle": "Let's see how a slam can reproduce the map of the environment percieved by the Vision", "material": []},
         {"planWeek": 4, "title": "Planning",
             "subtitle": "Planning defines the trajectory the car will have!", "material": []},
         {"planWeek": 5, "title": "Controlling", "subtitle": "An overview on the most famous controlling algorithms: PID, LQR, MPC; and how robust they are!", "material": []}, ]
     },
    {"id": 16,
     "title": "Path Planning Algorithms",
     "subtitle": "How robots can find their way into the environment. Let's program together.",
     "duration": 3,
     "imageUrl": "https://user-images.githubusercontent.com/29633052/48624148-c8fdcd80-e9bc-11e8-97de-60b8adf9d3b6.png",
     "level": 3,
     "steps": [
         {"planWeek": 1, "title": "Theory",
             "subtitle": "Why we have to create path planning algoritms?", "material": mainMaterial},
         {"planWeek": 2, "title": "A*",
             "subtitle": "Let's find out why the A* is the most famous search algorithm", "material": []},
         {"planWeek": 3, "title": "RRT", "subtitle": "Dive into the Random Recursive Tree algorithm!", "material": []}, ]
     },
    {"id": 17,
     "title": "UI Programming",
     "subtitle": "Let's code some cool UI together",
     "duration": 3,
     "imageUrl": "https://www.cercacorso.it/online/wp-content/uploads/2021/12/immagini_ui-ux-design.jpg.png",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "Idea",
             "subtitle": "We will see how to aggregate all the ideas and define the UI goals!", "material": mainMaterial},
         {"planWeek": 2, "title": "Mockup",
             "subtitle": "Overview of AdobeXD and Figma... and decide which one to use!", "material": []},
         {"planWeek": 3, "title": "Programming", "subtitle": "A brief overview of the main topics of programming a UI with Angular!", "material": []}, ]
     },
    {"id": 18,
     "title": "Web Programming",
     "subtitle": "Create your first web page!",
     "duration": 3,
     "imageUrl": "https://www.sicurezzainformatica.ltd/wp-content/uploads/2020/05/AdobeStock_256229414.jpg",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "HTML + CSS",
             "subtitle": "The basics of web programming. Let's create a static web page!", "material": mainMaterial},
         {"planWeek": 2, "title": "JavaScript",
             "subtitle": "No more statics here... here comes dynamics!", "material": []},
         {"planWeek": 3, "title": "Angular", "subtitle": "Building a complete and professional web app!", "material": []}, ]
     },
    {"id": 19,
     "title": "Java Intermediate",
     "subtitle": "Explaining how Java handles the OOP and describing some design patterns, useful for programming",
     "duration": 4,
     "imageUrl": "https://www.antsrl.com/wp/wp-content/uploads/2019/03/Java.jpg",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "OOP",
             "subtitle": "How the OOP works", "material": mainMaterial},
         {"planWeek": 2, "title": "Inheritance",
             "subtitle": "How the Inheritance works", "material": []},
         {"planWeek": 3, "title": "Interfaces",
             "subtitle": "How the Interfaces works", "material": []},
         {"planWeek": 4, "title": "Design Patterns", "subtitle": "The best Design Patterns are here!", "material": []}, ]
     },
    {"id": 20,
     "title": "Python Most Famous Libraries",
     "subtitle": "Let's dive into the programming with Scikit, NumPy and so on!",
     "duration": 2,
     "imageUrl": "https://static.javatpoint.com/tutorial/numpy/images/numpy-tutorial.png",
     "level": 1,
     "steps": [
         {"planWeek": 1, "title": "Scikit",
             "subtitle": "Learn together Scikit", "material": mainMaterial},
         {"planWeek": 2, "title": "NumPy", "subtitle": "Learn together NumPy", "material": []}, ]
     },

]


activeStep = [
    {

        "endDate": "12.02.2022",
        "title": "Variables",
        "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
        "planName": "0 to Java in 5 Weeks",
        "planId": 0,
        "planWeek": 1,
        "userId": 0,
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png",
        "material": [
            {
                "type": "YouTube",
                "title": "Introduction to variables (in italian)",
                "link": "7Aotk1edPlM",
                "description": "Variables is a concept indipendent to the coding language. Variables are used in all kind of scenarios: from videogames to smartphone apps and so on."
            },
            {
                "type": "Link",
                "link": "https://www.w3schools.com/java/java_intro.asp",
                "title": "Intro to Java ",
                "description": "First of all let's see some Java syntax"
            },
            {
                "type": "Link",
                "link": "https://www.w3schools.com/java/java_variables.asp",
                "title": "Java Variables",
                "description": "An overview of how the variables are declared and managed in Java!"
            },
            {
                "type": "Spreaker",
                "title": "Intro to coding podcast",
                "link": "https://widget.spreaker.com/player?episode_id=17577829",
                "description": ""
            }
        ]
    },
    {
        "endDate": "12.02.2022",
        "title": "Braking Basics",
        "subtitle": "The braking phase is one of the most important in racing, we will discover how a driver should apply the pressure.",
        "planName": "How to Trail Braking",
        "planId": 1,
        "planWeek": 1,
        "userId": 0,
        "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg",
        "material" : mainMaterial
    },
]


users = {0: {'username': 'ironman',
             'email': 'tony.stark@ironman.avg',
             'password': 'ironmanbest',
             'bio': 'I am Iron Man and I am part of the Avengers. I have saved the world quite a few times... and hey, I defeated Thanos!',
             'name': 'Tony',
             'surname': 'Stark',
             'level': 4,
             'interests': [
                    {"inter": "ML",
                     "url": "https://st2.depositphotos.com/3907761/43381/v/600/depositphotos_433814350-stock-illustration-machine-learning-icon-vector-illustration.jpg",
                     "level": 5},
                    {"inter": "Coding",
                     "url": "https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg",
                     "level": 1},
                    {"inter": "English",
                     "url": "https://banner2.cleanpng.com/20180729/bp/kisspng-logo-primera-air-organization-business-english-lan-british-flag-5b5e7d460d5b11.4916650115329191100547.jpg",
                     "level": 3},
                    {"inter": "Engineering",
                     "url": "https://t3.ftcdn.net/jpg/03/90/45/84/360_F_390458464_c2oKzb2yXAVQrgLPG1N5mfRqqdEuOaLq.jpg",
                     "level": 4},
             ],
             'imageUrl': 'https://avatarfiles.alphacoders.com/217/thumb-217097.jpg',
             'plans': plans,
             'activeStep': activeStep

             }
         }


@app.route('/create-user', methods=['GET', 'POST'])
def create_user():
    data = json.loads(request.data.decode('utf-8'))
    id = len(users)
    users[id] = {
        "username": data["username"],
        "email": data["email"],
        "password": data["password"]}
    # if request.method == 'POST':
    response = jsonify(id)
    return createResponse(response)


@app.route('/login-user', methods=['GET', 'POST'])
def login():
    data = json.loads(request.data.decode('utf-8'))
    # print(data)
    # print(users)
    email = data["email"].replace(" ", "")
    for id in users:
        if users[id]["email"] == email and users[id]["password"] == data["password"]:
            response = jsonify(id)
            # print(usplanWeekd)
            return createResponse(response)
    else:
        response = jsonify(-1)
        return createResponse(response)


@app.route('/get-interests', methods=['GET', 'POST'])
def get_interests():
    response = jsonify(interests)
    return createResponse(response)


@app.route('/complete-user', methods=['GET', 'POST'])
def complete_user():
    data = json.loads(request.data.decode('utf-8'))
    # print(data)
    if(data["id"] in users):
        users[data["id"]]["bio"] = data["bio"]
        users[data["id"]]["name"] = data["name"]
        users[data["id"]]["surname"] = data["surname"]
        users[data["id"]]["imageUrl"] = data["imageUrl"]
        users[data["id"]]["level"] = 1

        users[data["id"]]["plans"] = plans  # []
        inter = []
        for interest in data["interests"]:
            for i in interests:
                if(interest == i["inter"]):
                    inter.append(i)
                    inter[-1]["level"] = 1
        users[data["id"]]["interests"] = inter
        # print(users[data["id"]])
    # print(users)
    response = jsonify("gigi")
    return createResponse(response)


@app.route('/user-page', methods=['GET', 'POST'])
def get_user():
    data = json.loads(request.data.decode('utf-8'))
    # print(data)
    # print(i for i in users)
    if(data in users):
        newUser = users[data]
        planny = []
        for p in newUser["plans"]:
            if(p["id"] != 0):
                planny.append(p)
        newUser["plans"] = planny
        return createResponse(jsonify(newUser))
    else:
        return jsonify(False)


@app.route('/get-current-goals', methods=['GET', 'POST'])
def get_current_goals():
    data = json.loads(request.data.decode('utf-8'))
    if(data in users):
        return createResponse(jsonify(users[data]["activeStep"]))
    else:
        return createResponse(jsonify([]))


@app.route('/search', methods=['GET', 'POST'])
def search():
    substring = json.loads(request.data.decode('utf-8'))
    # print(substring)
    plansFound = [string for string in plans if substring.lower()
                  in string["title"].lower()]
    plansFound1 = [string for string in plans if substring.lower()
                   in string["subtitle"].lower()]
    for p in plansFound1:
        if p not in plansFound:
            plansFound.append(p)
    tagsFound = [string for string in tags if substring.lower()
                 in string.lower()]
    data = {"plans": plansFound, "tags": tagsFound}
    # print(data)
    return createResponse(jsonify(data))


@app.route('/get-plan', methods=['GET', 'POST'])
def getPlan():
    planId = json.loads(request.data.decode('utf-8'))
    # print(planId)
    planFound = [plan for plan in plans if plan["id"] == planId]
    # print(planFound)
    return createResponse(jsonify(planFound[0]))


@app.route('/start-plan', methods=['GET', 'POST'])
def startPlan():  # userId:number, plan:Plan, from:string, to:string
    data = json.loads(request.data.decode('utf-8'))
    planFound = [plan for plan in plans if plan["id"] == data["planId"]]
    interestFound = [interest for interest in planFound[0]
                     ["steps"] if interest["planWeek"] == 1]
    isAlreadyStarted = False
    for a in activeStep:
        if a["planId"] == data["planId"] and a["userId"] == data["userId"]:
            isAlreadyStarted = True
    obj = {"endDate": data["dateTo"],
           "title": interestFound[0]["title"],
           "subtitle": interestFound[0]["subtitle"],
           "planName": planFound[0]["title"],
           "planId": planFound[0]["id"],
           "planWeek": 1,
           "userId": data["userId"],
           "imageUrl": planFound[0]["imageUrl"],
           "material": interestFound[0]["material"]}
    if(not isAlreadyStarted):
        activeStep.append(obj)
        return createResponse(jsonify(planFound[0]["id"]))
    else:
        return createResponse(jsonify(-1))


@app.route('/create-plan', methods=['GET', 'POST'])
def createPlan():
    data = json.loads(request.data.decode('utf-8'))
    # print(data["steps"])
    data["id"] = len(plans)
    for s in data["steps"]:
        for m in s["material"]:
            if(m["type"] == "YouTube"):
                m["link"] = get_yt_video_id(m["link"])
            if(m["type"] == "Spreaker"):
                m["link"] = getSpreakerUrl(m["link"])
        print(s)
    plans.append(data)
    # print(plans)

    return createResponse(jsonify(len(plans)-1))


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload-img', methods=['GET', 'POST'])
def uploadImg():

    if request.method == 'POST':
        # check if the post request has the file part
        # print(request.files)
        if 'image' not in request.files:
            flash('No file part')
            return createResponse(jsonify({"url": "False"}))
        file = request.files['image']
        # print(file)

        # print(file.filename)
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            # print("nnnnooo")
            flash('No selected file')
            return createResponse(jsonify({"url": "False"}))
        if file:

            # print("innnn")
            filename = secure_filename(file.filename)
            # print(os.path.join(UPLOAD_FOLDER+"image/", filename))
            path = os.path.join(UPLOAD_FOLDER+"image/", filename)
            file.save(path)
            return createResponse(jsonify({"url": baseUrl + "/get_image/"+filename}))
    return createResponse(jsonify({"url": "False"}))


@app.route('/get_image/<filename>')
def get_image(filename):
    return send_file(UPLOAD_FOLDER+"image/"+filename, mimetype='image/*')


@app.route('/upload-pdf', methods=['GET', 'POST'])
def uploadPdf():

    if request.method == 'POST':
        # check if the post request has the file part
        # print(request.files)
        if 'pdf' not in request.files:
            flash('No file part')
            return createResponse(jsonify({"url": "False"}))
        file = request.files['pdf']
        # print(file)

        # print(file.filename)
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            # print("nnnnooo")
            flash('No selected file')
            return createResponse(jsonify({"url": "False"}))
        if file:

            # print("innnn")
            filename = secure_filename(file.filename)
            # print(os.path.join(UPLOAD_FOLDER+"pdf/", filename))
            path = os.path.join(UPLOAD_FOLDER+"pdf/", filename)
            file.save(path)
            return createResponse(jsonify({"url": baseUrl + "/get_pdf/"+filename}))
    return createResponse(jsonify({"url": "False"}))


@app.route('/get_pdf/<filename>')
def get_pdf(filename):
    return send_file(UPLOAD_FOLDER+"pdf/"+filename, mimetype='pdf')


@app.route('/get-active-step', methods=['GET', 'POST'])
def getActiveStep():
    data = json.loads(request.data.decode('utf-8'))
    print(data)
    for a in activeStep:
        if(a["planId"] == data["planId"] and a["userId"] == data["userId"]):
            return createResponse(jsonify(a))
    return createResponse(jsonify(False))


@app.route('/next-active-step', methods=['GET', 'POST'])
def nextActiveStep():
    data = json.loads(request.data.decode('utf-8'))
    activeStep1 = activeStep
    for a in list(activeStep1):
        # print(a)
        if(a["planId"] == data["planId"] and a["userId"] == data["userId"]):
            p = searchPlan(a["planId"])
            pw = a["planWeek"]
            activeStep.remove(a)
            if(pw < len(p["steps"])):
                s = searchStep(pw+1, p["steps"])
                s["planId"] = data["planId"]
                s["endDate"] = a["endDate"]
                s["userId"] = data["userId"]
                activeStep.append(s)
                # print(activeStep)
                return createResponse(jsonify(False))
            return createResponse(jsonify(True))

    return createResponse(jsonify(False))


def searchPlan(id):
    for p in plans:
        if p["id"] == id:
            return p
    return False


def searchStep(week, steps):
    for s in steps:
        if s["planWeek"] == week:
            return s
    return False


def createResponse(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         "Origin, X-Requested-With, Content-Type, Accept")
    return response


def get_yt_video_id(url):
    """Returns Video_ID extracting from the given url of Youtube

    Examples of URLs:
      Valid:
        'http://youtu.be/_lOT2p_FCvA',
        'www.youtube.com/watch?v=_lOT2p_FCvA&feature=feedu',
        'http://www.youtube.com/embed/_lOT2p_FCvA',
        'http://www.youtube.com/v/_lOT2p_FCvA?version=3&amp;hl=en_US',
        'https://www.youtube.com/watch?v=rTHlyTphWP0&index=6&list=PLjeDyYvG6-40qawYNR4juzvSOg-ezZ2a6',
        'youtube.com/watch?v=_lOT2p_FCvA',

      Invalid:
        'youtu.be/watch?v=_lOT2p_FCvA',
    """

    from urllib.parse import urlparse, parse_qs

    if url.startswith(('youtu', 'www')):
        url = 'http://' + url

    query = urlparse(url)

    if 'youtube' in query.hostname:
        if query.path == '/watch':
            return parse_qs(query.query)['v'][0]
        elif query.path.startswith(('/embed/', '/v/')):
            return query.path.split('/')[2]
    elif 'youtu.be' in query.hostname:
        return query.path[1:]
    else:
        raise ValueError


def getSpreakerUrl(url):
    found = False
    link = ""
    str = ""
    strs = url.split()
    for st in strs:
        if("src" in st):
            str = st
    for s in str:
        if(s == '"'):
            found = not found
        if(found):
            link += s
    return link[1:]


if __name__ == '__main__':
    port = 8000  # the custom port you want
    app.run(host='192.168.1.135', port=port, debug=True)
