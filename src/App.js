import React, {useState} from 'react';
import Header from './components/header';
import Characters from './components/Characters';
import './main.sass'

const App = () => {
  
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  
  let actualPage = page;
  
  const nextPage = e => {
    e.preventDefault()    
    if(totalPages > actualPage){
      actualPage += 1
      window.scrollTo({top: 0, behavior: 'smooth'});
      setPage(actualPage)
    }
  }
  const prevPage = e =>{
    e.preventDefault()
    if(actualPage > 1){
      actualPage--
      window.scrollTo({top: 0, behavior: 'smooth'});
      setPage(actualPage)
      
    }
  }
  return ( 
    <>
      <Header 
      title="Rick & Morty API"
      desc="This project illustrate the characters of the famous Rick & Morty serie"
      />
      <Characters 
      page={page}
      setTotalPages = {setTotalPages}
      />
      <div className="container">
        <div className="pagination">
          {page != 1 ? (<button
          className="prev"
          onClick={prevPage}
          >Prev</button>) : null}
          {page != totalPages ? (<button
          className="next"
          onClick={nextPage}
          >Next</button>) : null}
          
        </div>
      </div>
    </>
  );
}

export default App;