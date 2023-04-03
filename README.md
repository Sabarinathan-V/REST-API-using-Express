# REST API for Tasks

This is a simple RESTful API built with Express.js to perform CRUD operations on tasks. The API allows creating, reading, updating, and deleting tasks with title and description attributes.
Getting Started

Follow the instructions below to get a copy of this project up and running on your local machine for development and testing purposes.

## Prerequisites

    Node.js installed on your machine.
    MongoDB installed and running on your machine.

## Installing

1. Clone this repository to your local machine.
    
    git clone https://github.com/your-username/your-repo.git

2. Navigate into the cloned repository.

    cd your-repo

3. Install the required dependencies.

    npm install

4. Start the application.

    npm start

## API Endpoints

The API has the following endpoints:
Method	Endpoint	Description
POST	/api/tasks	Create a new task
GET	/api/tasks	Get a list of all tasks
GET	/api/tasks/:id	Get a single task by ID
PUT	/api/tasks/:id	Update a task by ID
DELETE	/api/tasks/:id	Delete a task by ID

## Request Body

The request body for creating a new task should be in JSON format and include the following attributes:

{
    "title": "Task Title",
    "description": "Task Description"
}

## Response Body

The response body for a successful request will be in JSON format and include the following attributes:

{
    "id": "task-id",
    "title": "Task Title",
    "description": "Task Description"
}

## Built With

    Express.js - The web framework used
    MongoDB Atlas - The database used
    Mongoose - Object modeling tool for MongoDB
