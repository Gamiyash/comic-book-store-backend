# Comic Book Store - Backend API

This is the backend for a React-based e-commerce store that allows store managers to manage and display comic books as inventory items. It provides full CRUD functionality using Node.js and MongoDB, enabling the creation, retrieval, update, and deletion of comic books. Additionally, the backend supports pagination, filtering, and sorting features.

## Features

- **Comic Book Management**:
  - Add new comic books to the inventory.
  - Edit comic book details such as price, condition, and discount.
  - Delete comic books from the inventory.
- **Inventory List**:
  - Retrieve a paginated list of comic books.
  - Filter by attributes like author, year, condition, and price.
  - Sort comic books by price, year, or alphabetically.
- **Comic Book Details**:
  - Fetch detailed information about a specific comic book by ID.

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
- **Version Control**: Git & GitHub
- **API Testing**: Postman

## Project Setup

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or MongoDB Atlas for cloud-based DB)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com//comic-book-store-backend.git
   cd comic-book-store-backend
