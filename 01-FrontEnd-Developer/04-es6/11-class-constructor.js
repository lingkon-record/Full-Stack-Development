class Books{
    constructor(BookName, price){
        this.BookName = BookName
        this.price = price
    }
}
// dont forget "new" keyword
let Book_Details = new Books(" The Tate Bible", 550)
console.log(Book_Details);