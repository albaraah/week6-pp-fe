import BookListings from "../components/BookListings";
import { useState, useEffect } from "react"

const Home = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => { 
  const DisplayBooks = async () => {
    try{
      const res = await fetch("/api/books");
      if (!res.ok) throw new Error("Failed to get books")
      const data = await res.json();
      setBooks(data);
    }
    catch(error){
      console.error(error.message)
    }
  }
   DisplayBooks();
  },[])

  return (
    <div className="home">
      {books && <BookListings books={books} />}
    </div>
  );
};

export default Home;

