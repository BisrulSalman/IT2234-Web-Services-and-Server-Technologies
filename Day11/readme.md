

# 📚 MongoDB Book Collection Project

This project demonstrates how to insert and query a collection of book records in a MongoDB database. It includes a set of book documents and a variety of MongoDB operations such as find, update, sort, and delete.

---

## 📁 Collection: `books`

### 🔽 Insertion

Insert multiple book documents into the `books` collection using:

```js
db.books.insertMany([
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "published_year": 1937,
    "genres": ["Fantasy", "Adventure"],
    "pages": 310,
    "available": true,
    "rating": 4.8
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }
])
```

---

## 🔍 Queries and Operations

1. **Find all books:**

   ```js
   db.books.find()
   ```

2. **Find books published after 1950:**

   ```js
   db.books.find({ published_year: { $gt: 1950 } })
   ```

3. **Find books that are available:**

   ```js
   db.books.find({ available: true })
   ```

4. **Find books that include "Dystopian" in genres:**

   ```js
   db.books.find({ genres: "Dystopian" })
   ```

5. **Show only title and author of all books (excluding `_id`):**

   ```js
   db.books.find({}, { title: 1, author: 1, _id: 0 })
   ```

6. **Set `available` to false for the book "1984":**

   ```js
   db.books.updateOne(
     { title: "1984" },
     { $set: { available: false } }
   )
   ```

7. **Increment rating of "Brave New World" by 0.1:**

   ```js
   db.books.updateOne(
     { title: "Brave New World" },
     { $inc: { rating: 0.1 } }
   )
   ```

8. **Add "Classic" to the genres of "The Great Gatsby" (if not already present):**

   ```js
   db.books.updateOne(
     { title: "The Great Gatsby" },
     { $addToSet: { genres: "Classic" } }
   )
   ```

9. **Sort books by `published_year` in ascending order:**

   ```js
   db.books.find().sort({ published_year: 1 })
   ```

10. **Sort books by `rating` in descending order:**

```js
db.books.find().sort({ rating: -1 })
```

11. **Delete all books with rating lower than 4.5:**

```js
db.books.deleteMany({ rating: { $lt: 4.5 } })
```

---

## 📝 Notes

* This is a basic demonstration of MongoDB's document-oriented operations.
* The `books` collection can be extended with more fields such as ISBN, language, or publisher.
* Always make a backup before running delete operations in production.


