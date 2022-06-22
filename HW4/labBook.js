// lab books

var books = [
    {
     title: 'book1',
     author: 'name1',
     alreadyRead: true
    },
    {
      title: 'book 2',
      author: 'name2',
      alreadyRead: true
    },
    {
      title: 'book3',
      author: 'name3',
      alreadyRead: false
    },
    {
      title: 'book4',
      author: 'name4',
      alreadyRead: false
    }
    ];
  
  for (var i = 0; i < books.length;  i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if(book.alreadyRead) {
      console.log('You already read ' + bookInfo);
    } else {
      console.log('You still need to read ' + bookInfo);
    }
    
  }