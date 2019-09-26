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

  showAlert(message, className) {
    const div = document.createElement('div')

    //Add className

    div.className =  `alert ${className}`

    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')

    const form = document.querySelector('#book-form')

    container.insertBefore(div, form)

    setTimeOut(function(){

    })
  }
}


document.getElementByID('book-form').addEventListener('submit', function(event){

  const title = document.getElementByID('title').value
  const author = document.getElementByID('author').value
  const isbn = document.getElementByID('idbn').value


  const book = new Book(title, author, isbn)

  const UI = new UI()


  if(title === '' || author === '' || isbn === '') {

    ui.showAlert('Please Fill in All Fields', 'error')
  } else {
    ui.addBooktoList(book)

    ui.showAlert('Book Added!', 'success')

    ui.clearFields()
  }

  event.preventDefault()
})
