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

tags = ["Java", "JavaScript", "Java Isle", "JavaEE"]

steps = [
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
                "file": "http://192.168.1.135:8000/get_pdf/OOProgWithJava-notes.pdf"
            }
        ],
        "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png"
    },
]


plans = [
    {"id": 0,
     "title": "0 to Java in 5 Weeks",
     "subtitle": "Plan to introduce Java and its main concepts: loops, variables, lists, functions. Object Oriented Programming",
     "duration": 5,
     "imageUrl": "https://uploads-ssl.webflow.com/5f75a99ea4169266c712b19e/5ff813eb07605c5ba93aa580_Java_logo.png",
     "level": 1,
     "steps": steps,
     },
    {"id": 1,
     "title": "How to Trail Braking",
     "duration": 5,
     "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg"},
    {"id": 2,
     "title": "Reading Spider-Man Ultimate",
     "duration": 5,
     "imageUrl": "https://i.pinimg.com/originals/87/74/9d/87749dade5d236a1665f6c37c0258fe7.jpg"},
    {"id": 3,
     "title": "Intro to YOLOv5",
     "duration": 5,
     "imageUrl": "https://www.mdpi.com/remotesensing/remotesensing-12-01667/article_deploy/html/images/remotesensing-12-01667-g002.png"}
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
                "link": "https://www.youtube.com/watch?v=7Aotk1edPlM",
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
        "imageUrl": "https://img.jpcycles.com/blog/images/2019/07/mjrt5ua6jg5212-1.jpg"
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
    for id in users:
        if users[id]["email"] == data["email"] and users[id]["password"] == data["password"]:
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
        return createResponse(jsonify(users[data]))
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

    obj = {"endDate": data["dateTo"],
           "title": interestFound[0]["title"],
           "subtitle": interestFound[0]["subtitle"],
           "planName": planFound[0]["title"],
           "planId": planFound[0]["id"],
           "planWeek": 1,
           "userId": data["userId"],
           "imageUrl": planFound[0]["imageUrl"],
           "material": interestFound[0]["material"]}
    activeStep.append(obj)

    return createResponse(jsonify(planFound[0]["id"]))


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
            return createResponse(jsonify({"url": "http://192.168.1.135:8000/get_image/"+filename}))
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
            return createResponse(jsonify({"url": "http://192.168.1.135:8000/get_pdf/"+filename}))
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
