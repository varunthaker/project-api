// README.md
# Project API (Endpoint for products)

### Introduction
The API endpoint gives the data for 15 products and gives the product detail for specific id.

### Installation Guide
* Clone this repository [here](https://github.com/varunthaker/project-api.git).
* Run npm install to install all dependencies
* You can either work with the online mongoDB database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables.
  
### Usage
* Run npm start to start the application.
* Connect to the API using Postman on port 8000.
  
### API Endpoints
GET | / | Home rout for initial message 
GET | /api/v1/products | To get All Products information
GET | /api/v1/products/id | To get product information with the specific id

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
  
### Web
* [End Point](https://project-api-7svg.onrender.com/)]
  
### License
It's open source project
