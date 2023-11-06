const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

let books = [
  {
    id: 1,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  }
]

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id)
  const book = books.find((book) => book.id === id)
  if(!book) {
    res.json({ error: 'Book not found' })
  }

  res.json(book)
})

const generateId = () => {
  const lastBook = books[books.length - 1]
  const lastId = lastBook ? lastBook.id : 0
  return lastId + 1
}

app.post('/books', (req, res) => {
  const {title, author} = req.body
  if(!title || !author) {
    res.json({ error: 'title or autor missing' })
  }

  const newBook = {id: generateId(), title, author}
  books.push(newBook)
  res.json(newBook)
})

app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id)
  const bookIndex = books.findIndex((book) => book.id === id)
  if(bookIndex === -1) {
    res.json({ error: 'Book not found' })
  }
  const deletedBook = books.splice(bookIndex, 1)[0]
  res.json(deletedBook)
})

app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id)
  const {title, author} = req.body
  const bookIndex = books.findIndex((book) => book.id === id)
  if(bookIndex === -1) {
    res.json({ error: 'Book not found' })
  }
  const updatedBook = {id: id, title, author}
  books[bookIndex] = updatedBook
  res.json(updatedBook)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}`)
})