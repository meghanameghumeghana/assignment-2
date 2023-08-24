//first answer
class Book {
    constructor(title, author, isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", false);


//2nd answer
let books = [];
function addBook(title, author) {
    let newBook = {
        title: title,
        author: author
    };
    books.push(newBook);
}
addBook("The Catcher in the Rye", "J.D. Salinger");
addBook("To Kill a Mockingbird", "Harper Lee");

console.log(books); 

//3rd answer
let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];
    function borrowBook(title) {
    let book = books.find(book => book.title === title);
    if (book && book.isAvailable) {
        book.isAvailable = false;
        console.log(`You have borrowed "${book.title}" by ${book.author}.`);
    } else {
        console.log(`"${title}" is not available for borrowing.`);
    }
}
borrowBook("The Catcher in the Rye");
borrowBook("To Kill a Mockingbird");
borrowBook("Some Nonexistent Book");

console.log(books); 

//4th answer
let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: false }
];
function returnBook(title) {
    let book = books.find(book => book.title === title);
    if (book && !book.isAvailable) {
        book.isAvailable = true;
        console.log(`You have returned "${book.title}" by ${book.author}.`);
    } else {
        console.log(`"${title}" is not valid or is already available.`);
    }
}
returnBook("The Catcher in the Rye");
returnBook("To Kill a Mockingbird");
returnBook("Some Nonexistent Book");

console.log(books); 

//5th answer
let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];
function listBooks() {
    console.log("Library Catalog:");
    books.forEach(book => {
        const availability = book.isAvailable ? "Available" : "Not Available";
        console.log(`Title: ${book.title}, Author: ${book.author}, Availability: ${availability}`);
    });
}


