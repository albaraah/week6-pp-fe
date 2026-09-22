import BookListing from "./BookListing";

const BookListings = ( {books} ) => {
  return (
    <div className="book-list">
    {books.map((book) =>( 
      <BookListing book={book} key={book.id} />))}
      
    </div>
  );
};

export default BookListings;

