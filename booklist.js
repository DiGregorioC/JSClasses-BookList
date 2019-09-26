class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {

  addBooktoList(book) {
    const list = document.getElementById('book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="" class="delete">X</a></td>
      `
    list.appendChild(row)
  }

  showAlert(message, className) {
    const div = document.createElement('div')

    //Add class Name

    div.className =  `alert ${className}`

    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')

    const form = document.querySelector('#book-form')

    container.insertBefore(div, form)

    setTimeout(function(){

      document.querySelector('.alert').remove()
    }, 3000)

    }
  deleteBook(target) {

    if(target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
  }


document.getElementById('book-form').addEventListener('submit', function(event){

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value


  const book = new Book(title, author, isbn)

  const ui = new UI()


  if(title === '' || author === '' || isbn === '') {

    ui.showAlert('Please Fill in All Fields', 'error')
  } else {
    ui.addBooktoList(book)

    ui.showAlert('Book Added!', 'success')

    ui.clearFields()
  }

  event.preventDefault()
})
