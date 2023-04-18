import BooksList from '../components/books/booksList';
export default function Books({books , setbooks}) {



  return (
    <> 
   
   
    <div className='container'>
      <div>
      <h1 className="title">bookssss</h1>
      <div className='bk'>
        {books.length > 0 && <BooksList books={books} />}
      </div>
      </div>
      </div>
  </> );
}
