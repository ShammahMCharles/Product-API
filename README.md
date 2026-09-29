# Product API

A RESTful Product API built with **Node.js, Express, MongoDB, and Mongoose**. This project was developed by taking the structure and CRUD concepts from a previous **Books API** project and adapting them into a more advanced Product API.

## How It Was Built

The project initially started from the Books API created during the course. The existing project structure provided the foundation for the new Product API, including:

* Express server setup
* MongoDB/Mongoose connection
* Modular route organization
* CRUD operations
* Error handling with `try/catch`
* RESTful API routing

The Books API was then modified and expanded to meet the Product API requirements.

## Changes Made

### 1. Books → Products

The original `Book` model was replaced with a `Product` model.

The new Product schema includes:

* `name`
* `description`
* `price`
* `category`
* `inStock`
* `tags`
* `createdAt`

Validation was also added for required fields and product pricing.

### 2. Updated CRUD Routes

The original Books API CRUD routes were converted to Product routes:

* `POST /api/products` — Create a product
* `GET /api/products` — Get products
* `GET /api/products/:id` — Get a product by ID
* `PUT /api/products/:id` — Update a product
* `DELETE /api/products/:id` — Delete a product

Appropriate HTTP status codes and error handling were added to the routes.

### 3. Advanced Product Queries

The basic `GET /api/products` route was expanded to support:

* Category filtering
* Minimum price filtering
* Maximum price filtering
* Price sorting
* Pagination

These options can also be combined in a single request.

Example:

```text
/api/products?category=Electronics&minPrice=20&maxPrice=100&sortBy=price_asc&page=1&limit=5
```

### 4. Project Structure

The application was organized into separate files for easier maintenance:

```text
Product-API/
├── db/
│   └── connection.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Postman for API testing

## Testing

The API was tested using Postman to verify the CRUD operations, error handling, filtering, sorting, and pagination functionality.

## Purpose

This project demonstrates the ability to take an existing REST API structure and extend it into a more complete application with MongoDB data modeling, CRUD functionality, validation, dynamic queries, sorting, and pagination.
