# ToDoList-Website

This website helps you to prepare your todo list easily having simple and easy to use interface. You can even dynamically create a new page by adding */new_page_name* in url  you want and add items in the list that you want to do.
You can add as many items you want and also you can delete the items if done just by only ticking the chekbox present in front of the items.The items are stored in a database using mongodb. So,whatever you add will be inserted in the database and remain there unless you delete it manually. This website is also hosted on world wide web using the **Heroku** app. So, anyone from any part of the world can access this website. And the database is also hosted on **mongodb-Atlas**. So, 24*7 database of this website is hosted on world wide web. And anyone can easily prepare their todolist anytime or anywhere.
 

---

# Major Features Used
* EJS Templates
  * EJS(Embedded JavaScript) Templates are used.As EJS templates contains a basic code that we want in every web pages.And file which contains an extension *.ejs* will be a base template for creating all other html files.

* Layouts are used. Which are added to all pages easily.Example : *header.ejs* & *footer.ejs*.

* Express routing parameters are used.With the help of this we can tap to different webpages on the go easily instead of making get request for all pages.
  * with the help of this you can dinamically create a new page and list all items you want to do and after completing it you can delete it. Example you can create a page for Homework , Work etc.


* Heroku is used.
  * we hosted our website on heroku and with the help of this now anyone around the world can access it. Heroku host our node.js server to keep our website live on the internet 24*7.

* mongodb(NoSql) database is used.
 * Mongoose is one of the package of the mongodb.It allows node.js to be able to connect and talk with the mongodb database.Main objective of this mongoose is to simply writing of validation codes , shorter and easier to work with.

* mongoDB-Atlas is used
 * It hosts our mongodb database and serve up the data all time i.e 24*7 whenever needed.

 * So, node.js app on heroku will be able to make necessary request to our database(that is hosted on mongodbAtlas) and can be able to perform all **CRUD** operations.


---


# Running The Project


* you can use fork to get my repository directly on your github account.

* you can clone it to your local repository as well and then upload on it github.

*after doing this*

1. software requirements
  ```
  mongodb
  mongodbAtlas
  Ejs
 ```
2. open your command prompt/Terminal.

3. Go to directory in which project files are present.

4.Run command .
 ```bash
 npm install 
 or
 npm i
 ```
this will install all the project dependencies required in your pc.

5. After completion of installation , Run command:

```bash
nodemon app.js
or
node app.js
```

6. cmd or terminal should display 

```bash
server has started
```
means everything is running good and project has been sucsefully built and running.

7. open web browser and visit :

```bash
localhost:5000
```

  ---

# My website Link : i.e using HEROKU

[ToDoList](https://cryptic-stream-78043.herokuapp.com/  "Visit website")

---
# Thank you

