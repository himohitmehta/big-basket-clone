# Big Basket clone application built with React and Express js

Front end is built with React js and backend is built with Express js and MongoDB is used as database.

How to run the project

-   Clone the repository
-   Navigate to frontend folder and install the dependencies using `npm install`
-   Navigate to backend folder and install the dependencies using `npm install`
-   Run the backend server using `npm run dev` and frontend server using `npm run dev` in their corresponding directories
-   backend api runs on port `4000` and frontend runs on port `5173`

## Features

-   Product List Page
-   Login and Sign Up with Email
-   Add to Cart
-   Categories Filter
-   Admin Page to add products

### backend APIs

Create a new user

```
POST /api/user/signup
```

Login

```
POST /api/user/login
```

Get all products

```
GET /api/products
```

Create a new product

```
POST /api/products
```

Get a product by id

```
GET /api/products/:id
```

Update a product

```
PATCH /api/products/:id
```

Delete a product

```
DELETE /api/products/:id
```

Deployed on :
Backend: [https://big-basket-clone-backend.vercel.app/](https://big-basket-clone-backend.vercel.app/)
Frontend: [https://big-basket-clone-frontend.vercel.app/](https://big-basket-clone-frontend.vercel.app/)
