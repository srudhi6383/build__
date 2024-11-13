/* 
 Implementation Questions
Create a list of books in the following format:
[
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 15 }
    ]
  },
  ...
]
- Write a function to return the book title and the chapter with the maximum pages.
- Return a list of unique authors
*/

//  Write a function to return the book title and the chapter with the maximum pages.
const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 20 },
        { chapter: "Chapter 1", pages: 15 },
        { chapter: "Chapter 2", pages: 25 }
      ]
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.8,
      details: [
        { chapter: "Introduction", pages: 6 },
        { chapter: "Chapter 1", pages: 30 },
        { chapter: "Chapter 2", pages: 20 }
      ]
    },
    {
      title: "5 AM Club",
      author: "Robin Sharma",
      rating: 4.7,
      details: [
        { chapter: "Introduction", pages: 4 },
        { chapter: "Chapter 1", pages: 10 },
        { chapter: "Chapter 2", pages: 35 }
      ]
    },
  ];

  
  function getBookTitleAndMaxChapter(bookList) {
    return bookList.map(book => {
      const maxChapter = book.details.reduce((max, chapter) => 
        chapter.pages > max.pages ? chapter : max, book.details[0]
      );
      return { title: book.title, maxChapter };
    });
  }
  
  console.log(getBookTitleAndMaxChapter(books));
  

  // Return a list of unique authors
  function getUniqueAuthors(bookList) {
    const authors = new Set(bookList.map(book => book.author));
    return [...authors];
  }
  
  console.log(getUniqueAuthors(books));
  