class Book {
  contructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {

  addBooktoList(book) {
    const list = document.getElementByID('book-list')
    const row = document.createElement('tr')
    row.innerHTML =
      <td>${book.title}</td>,
      <td>${book.author}</td>,
      <td>${book.isbn}</td>,
      <td><a href="" class="delete">X</a></td>
  }
}


document.getElementByID('book-form').addEventListener('submit', function(element){

  const title = document.getElementByID('title').value
  const author = document.getElementByID('author').value
  const isbn = document.getElementByID('idbn').value


  const book = new Book(title, author, isbn)

  const UI = new UI()
})
