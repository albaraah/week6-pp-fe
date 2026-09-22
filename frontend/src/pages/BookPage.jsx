import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBookbyId = async () => {
      try {
        const res = await fetch(`/api/books/${id}`);
        if (!res.ok) throw new Error("Failed to get book by ID");
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBookbyId();
  }, [id]);

  return (
    <div className="book-preview">
       {loading ? (
        <p>Loading...</p>
      ) : (
      <>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Genre:  {book.genre}</p>
        <p>Available: {book.availability.isAvailable ? "Yes" : "No"}</p>
        <p>Borrower: {book.availability.borrower || "—"}</p>
        <p>Borrower: {book.borrower}</p>
        <button onClick={() => navigate("/")}>Back</button>
      </>
      )}
    </div>
  );
};

export default BookPage;

