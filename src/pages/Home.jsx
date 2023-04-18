
import Home1 from "./Home1";
import Books from "./Books";
import axios from "axios";
import { useState , useEffect } from "react";
import Loading from "../components/Loading";
export default function Home() {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/
    `).then((response) => {
      setbooks(response.data);
      if (response && response.status === 200) {
        setLoading(false);
      } 
    });
  }, []);
  return (
    <>
      {loading ? (
            <Loading />
          ) : ( 
            <>
    <Home1  />
    <Books books={books}   setbooks={setbooks} />
    </>
     )}
    </>
  );
}
