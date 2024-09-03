// You are enhancing the library system to manage different types of books. Your task is to create a Book class and a Magazine class that inherits from Book.

// The Book class should have the following properties:

// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following method:

// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// The Magazine class should inherit from the Book class and add the following property:

// month (string) - The month the magazine was published.
// The Magazine class should override the getSummary() method to include the month in the summary. The method should return a string in the format: "Title by Author, published in Month Year."

// Create both classes and demonstrate how to create instances of both classes and call the getSummary() method.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.month} ${this.year}`;
  }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(myBook.getSummary());

const myMagazine = new Magazine(
  "National Geographic",
  "Various Authors",
  2021,
  "June"
);
console.log(myMagazine.getSummary());
