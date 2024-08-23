import React, { useEffect, useState } from 'react'
import {createBook,getBook,updateBook} from '../services/BooksServices'
import {useNavigate,useParams} from 'react-router-dom';

const BookComponent = () => {

  const [bookName,setBookName] = useState('')
  const [authorName,setAuthorName] = useState('')
  const [bookGenre,setBookGenre] = useState('')

  const {id}=useParams();

  const[errors,setErrors] = useState({

    bookName:'',
    authorName:'',
    bookGenre: ''

  })

  const navigator = useNavigate();

  useEffect(()=>{
    if(id){
      getBook(id).then((response)=>{
        setBookName(response.data.bookName);
        setAuthorName(response.data.authorName);
        setBookGenre(response.data.bookGenre);
      }).catch(error=>{
        console.error(error);
      })
    }
  },(id))


  function saveOrUpdateBook(e){
    e.preventDefault();

      const book = {bookName,authorName,bookGenre}
      console.log(book)

    if(validateForm()){
      if(id){
        updateBook(id,book).then((response) =>{
          console.log(response.data);
          navigator('/books')

        }).catch(error => {
          console.error(error);
        })

      }else{
        createBook(book).then((response) =>{
          console.log(response.data);
          navigator('/books')
          
       }).catch(error => {
          console.error(error);
        })

      }
      
    }
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}

    if(bookName.trim()){
      errorsCopy.bookName = '';
    }else{
      errorsCopy.bookName = 'Kitap Adı Boş Olamaz!!';
      valid = false;
    }
    if(authorName.trim()){
      errorsCopy.authorName = '';
    }else{
      errorsCopy.authorName = 'Yazar Adı Boş Olamaz!!';
      valid = false;
    }
    if(bookGenre.trim()){
      errorsCopy.bookGenre = '';
    }else{
      errorsCopy.bookGenre = 'Kitap Türü Boş Olamaz!!';
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;

  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Kitap Bilgisi Düzenleme</h2>
    }else{
      return<h2 className='text-center'>Yeni Kitap Ekleme</h2>
    }
  }

  return (
    <div className='container'>
      <br/><br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Kitap Adı:</label>
                <input
                  type='text'
                  placeholder='kitap Adı giriniz'
                  name='bookName'
                  value={bookName}
                  className={`form-control ${errors.bookName ? 'is-invalid' : ''}`}
                  onChange={(e) => setBookName(e.target.value)}
                >
                </input>
                {errors.bookName && <div className='invalid-feedback'>{errors.bookName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Yazar Adı:</label>
                <input
                  type='text'
                  placeholder='Yazar Adı giriniz'
                  name='authorName'
                  value={authorName}
                  className={`form-control ${errors.authorName ? 'is-invalid' : ''}`}
                  onChange={(e) => setAuthorName(e.target.value)}
                >
                </input>
                {errors.authorName && <div className='invalid-feedback'>{errors.authorName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Kitap Türü:</label>
                <input
                  type='text'
                  placeholder='kitap türü giriniz'
                  name='bookGenre'
                  value={bookGenre}
                  className={`form-control ${errors.bookGenre ? 'is-invalid' : ''}`}
                  onChange={(e)=> setBookGenre(e.target.value)}
                >
                </input>
                {errors.bookGenre && <div className='invalid-feedback'>{errors.bookGenre}</div>}
              </div>
              <div className='offset-md-5'><button className='btn btn-success btn-lg'onClick={saveOrUpdateBook}>Kaydet
              </button>
              </div>
            </form>
          </div>
        </div>

      </div>


    </div>
  )
}

export default BookComponent