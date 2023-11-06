# Book Management API

This is a simple Book Management API built using Express.js, a popular web application framework for Node.js. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Getting Started

To get started with the API, follow the steps below:

1. Install Node.js on your machine if you haven't already. You can download it from the official Node.js website: https://nodejs.org

2. Clone the repository or download the source code files.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

   ```
   npm install
   ```

5. Once the dependencies are installed, start the server by running the following command:

   ```
   npm start
   ```

   The server will start running on port 3001 by default. If the port is already in use, it will automatically assign a different available port.

## API Endpoints

The API provides the following endpoints for managing books:

### GET /books

Retrieves a list of all books.

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki"
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  },
  {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen"
  }
]
```

### GET /books/:id

Retrieves a specific book by its ID.

**Example Response:**

```json
{
  "id": 2,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee"
}
```

### POST /books

Adds a new book to the collection.

**Request Body:**

```json
{
  "title": "New Book Title",
  "author": "New Book Author"
}
```

**Example Response:**

```json
{
  "id": 5,
  "title": "New Book Title",
  "author": "New Book Author"
}
```

### DELETE /books/:id

Deletes a specific book by its ID.

**Example Response:**

```json
{
  "id": 3,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

### PUT /books/:id

Updates the details of a specific book by its ID.

**Request Body:**

```json
{
  "title": "Updated Book Title",
  "author": "Updated Book Author"
}
```

**Example Response:**

```json
{
  "id": 2,
  "title": "Updated Book Title",
  "author": "Updated Book Author"
}
```

## Error Handling

If an error occurs during the execution of an API endpoint, the server will respond with an error message in the following format:

```json
{
  "error": "Error message"
}
```

The error message will provide information about the specific error that occurred.

## Conclusion

This Book Management API provides a simple way to manage a collection of books through a set of intuitive endpoints. Feel free to explore and integrate this API into your own applications. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!