import os
from os.path import isfile, join
from flask import Flask, flash, request, redirect, url_for, jsonify
import json
app = Flask(__name__)
app.secret_key = b'sese'



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

tags = ["Java","JavaScript","Java Isle","JavaEE"]

steps = [
    {   
        "planWeek":1,
        "endDate": "12.02.2022",
        "title": "Variables",
        "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
        "planName": "0 to Java in 5 Weeks",
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
    {   
        "planWeek":2,
        "endDate": "12.02.2022",
        "title": "Loops",
        "subtitle": "Let's dive into the loops! We will discover the for, while and the do while!",
        "planName": "0 to Java in 5 Weeks",
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
    {   
        "planWeek":3,
        "endDate": "12.02.2022",
        "title": "Lists",
        "subtitle": "Here comes the lists where there are Arrays and Lists!",
        "planName": "0 to Java in 5 Weeks",
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
    {   
        "planWeek":4,
        "endDate": "12.02.2022",
        "title": "Functions",
        "subtitle": "Which better way to reuse your code than using functions?",
        "planName": "0 to Java in 5 Weeks",
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
    {   
        "planWeek":5,
        "endDate": "12.02.2022",
        "title": "OOP",
        "subtitle": "Scratching the surface of Object Oriented Programming!",
        "planName": "0 to Java in 5 Weeks",
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
]


plans = [
        {"id":0,
        "title": "0 to Java in 5 Weeks",
        "subtitle" : "Plan to introduce Java and its main concepts: loops, variables, lists, functions. Object Oriented Programming",
        "duration": 5,
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png",
        "level":1,
        "steps": steps,
        },
        {"id":1,
        "title": "How to Trail Braking",
        "duration": 5,
        "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg"},
        {"id":2,
        "title": "Reading Spider-Man Ultimate",
        "duration": 5,
        "imageUrl": "https://i.pinimg.com/originals/87/74/9d/87749dade5d236a1665f6c37c0258fe7.jpg"},
        {"id":3,
        "title": "Intro to YOLOv5",
        "duration": 5,
        "imageUrl": "https://www.mdpi.com/remotesensing/remotesensing-12-01667/article_deploy/html/images/remotesensing-12-01667-g002.png"}
    ]

content= [{"gigi":1}]
activeStep = [
    {   

        "endDate": "12.02.2022",
        "title": "Variables",
        "subtitle": "We will see how variables can store different types of data: int, float, strings and booleans!",
        "planName": "0 to Java in 5 Weeks",
        "planId": 0,
        "week": 1,
        "userId":0,
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png",
        "content":content
    },
    {
        "endDate": "12.02.2022",
        "title": "Braking Basics",
        "subtitle": "The braking phase is one of the most important in racing, we will discover how a driver should apply the pressure.",
        "planName": "How to Trail Braking",
        "planId": 1,
        "week": 1,
        "userId":0,
        "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg"
    },
]



users = {0: {'username': 'ironman', 
             'email': 'tony.stark@ironman.avg', 
             'password': 'ironmanbest', 
             'bio': 'I am Iron Man and I am part of the Avengers. I have saved the world quite a few times... and hey, I defeated Thanos!', 
             'name': 'Tony', 
             'surname': 'Stark', 
             'level':4,
             'interests': [
                    {"inter": "ML",
                    "url": "https://st2.depositphotos.com/3907761/43381/v/600/depositphotos_433814350-stock-illustration-machine-learning-icon-vector-illustration.jpg",
                    "level" : 5},
                    {"inter": "Coding",
                    "url": "https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg",
                    "level" : 1}, 
                    {"inter": "English",
                    "url": "https://banner2.cleanpng.com/20180729/bp/kisspng-logo-primera-air-organization-business-english-lan-british-flag-5b5e7d460d5b11.4916650115329191100547.jpg",
                    "level" : 3}, 
                    {"inter": "Engineering",
                    "url": "https://t3.ftcdn.net/jpg/03/90/45/84/360_F_390458464_c2oKzb2yXAVQrgLPG1N5mfRqqdEuOaLq.jpg",
                    "level" : 4},
              ],
             'imageUrl' : 'https://avatarfiles.alphacoders.com/217/thumb-217097.jpg',
             'plans': plans,
             'activeStep': activeStep

            }
        }

@app.route('/create-user', methods=['GET', 'POST'])
def create_user():
    data = json.loads(request.data.decode('utf-8'))
    id = len(users)
    users[id]={
        "username":data["username"],
        "email" : data["email"],
        "password" : data["password"]}
    # if request.method == 'POST':
    response = jsonify(id)
    return createResponse(response)

@app.route('/login-user', methods=['GET', 'POST'])
def login():
    data = json.loads(request.data.decode('utf-8'))
    print(data)
    print(users)
    for id in users:
        if users[id]["email"] == data["email"] and users[id]["password"] == data["password"]:
            response = jsonify(id)
            print(users[id])
            print(id)
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
    print(data)
    if(data["id"] in users) : 
        users[data["id"]]["bio"] = data["bio"]
        users[data["id"]]["name"] = data["name"]
        users[data["id"]]["surname"] = data["surname"]
        users[data["id"]]["plans"] = plans
        inter = []
        for interest in data["interests"]:
            for i in interests:
                if(interest == i["inter"]):
                    inter.append(i)
                    inter[-1]["level"] = 3
        users[data["id"]]["interests"] = inter
    print(users)
    response = jsonify("gigi")
    return createResponse(response)


@app.route('/user-page', methods=['GET', 'POST'])
def get_user():
    data = json.loads(request.data.decode('utf-8'))
    print(data)
    print(i for i in users)
    if(data in users):
        return createResponse(jsonify(users[data]))
    else:
        return jsonify(False)

@app.route('/get-current-goals', methods=['GET', 'POST'])
def get_current_goals():
    data = json.loads(request.data.decode('utf-8'))
    if(data in users):
        return createResponse(jsonify(users[data]["activeStep"]))
    else:
        return jsonify(False)


@app.route('/search', methods=['GET', 'POST'])
def search():
    substring = json.loads(request.data.decode('utf-8'))
    print(substring)
    plansFound = [string for string in plans if substring.lower() in string["title"].lower()]
    tagsFound = [string for string in tags if substring.lower() in string.lower()]
    data = {"plans":plansFound,"tags":tagsFound}
    print(data)
    return createResponse(jsonify(data))


@app.route('/get-plan', methods=['GET', 'POST'])
def getPlan():
    planId = json.loads(request.data.decode('utf-8'))
    print(planId)
    planFound = [plan for plan in plans if plan["id"]==planId]
    print(planFound)
    return createResponse(jsonify(planFound[0]))

@app.route('/start-plan', methods=['GET', 'POST'])
def startPlan(): #userId:number, plan:Plan, from:string, to:string
    data = json.loads(request.data.decode('utf-8'))
    planFound = [plan for plan in plans if plan["id"]==data["planId"]]
    interestFound = [interest for interest in planFound[0]["steps"] if interest["planWeek"]==1]

    obj = {"endDate": data["dateTo"],
        "title": interestFound[0]["title"],
        "subtitle": interestFound[0]["subtitle"],
        "planName": planFound[0]["title"],
        "planId": planFound[0]["id"],
        "week": 1,
        "userId":data["userId"],
        "imageUrl": planFound[0]["imageUrl"],
        "content":content}
    activeStep.append(obj)
    
    return createResponse(jsonify({"userId":data["userId"], "planId": planFound[0]["id"]}))



def createResponse(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         "Origin, X-Requested-With, Content-Type, Accept")
    return response





if __name__ == '__main__':
    port = 8000  # the custom port you want
    app.run(host='192.168.1.135', port=port, debug=True)
