# Todo REST API Implementation


## Introduction

In here i have implemented a RESTfulAPI using nodeJs Express and MongoDB (to store data) for perform CRUD (create,read,update,delete) operations that can uses for a simple todo application. (further more refer the <b>package.json</b> dependencies)


There are 05 API's which are for, <br>
- <b>GET</b> (one api for retrieve all the todo's and one for single todo retrieval)
- <b>CREATE</b> 
- <b>PUT</b>
- <b>DELETE</b>

Simply CREATE (POST) for sending a request to server, READ (GET) for fetch data from the server, UPDATE (PUT) sending and update the content in the server, and DELETE (DELETE) for delete a particular content from the server 

A sample server link - <a href="http://104.206.242.130:28960/todos">click here</a>

### Examples

##### CREATE TODO

Request Type - **POST** <br>
`http://104.206.242.130:28960/todos`

<img src="https://i.imgur.com/hUyrM68.png" width="500" height="300">

##### RETRIEVE TODOS

Request Type - **GET** <br>
`http://104.206.242.130:28960/todos`

<img src="https://i.imgur.com/eauxngS.png" width="500" height="300">
<br>
(or else you can request by providing the id - as a example, '<b>http://104.206.242.130:28960/todos/5a992288af21591da35a107e</b>' will send you a single todo response.)

Like wise you can perform all the CRUD operations and in case of error providing and indicating the error in a friendly manner.

NOTE - In here i leave the views folder as blank because all the operations are execute in the server side. 

YOU CAN EASILY PLAY WITH THE APP WITH [PostMan](https://www.getpostman.com/) :)



