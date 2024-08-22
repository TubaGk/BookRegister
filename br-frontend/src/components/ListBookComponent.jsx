import React,{useEffect,useState} from 'react'
import { listBooks,deleteBook } from '../services/BooksServices'
import {useNavigate} from 'react-router-dom'

const ListBookComponent = () => {

    const [books,setBooks]= useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllBook();
    },[])

    function getAllBook(){
        listBooks().then((response) =>{
            setBooks(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewBook(){
        navigator('/add-book')

    }
    function updateBook(id){
        navigator(`/update-book/${id}`)
    }
    function removeBook(id){
        console.log(id);

        deleteBook(id).then((response) =>{
            getAllBook();
        }).catch(error => {
            console.error(error);
        })
    }



  return (
    <div className='container'>
        <h2 className='text-center'>Kitap Listesi</h2>
        <button type="button" class="btn btn-primary mb-2" onClick={addNewBook}> + Add Book</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Kitap Adı</th>
                    <th>Yazar Adı</th>
                    <th>Türü</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book =>
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>{book.bookGenre}</td>
                            <td>
                                <button className='btn btn-info'onClick={()=> updateBook(book.id)}>Düzenle</button>
                                <button className='btn btn-danger'onClick={()=> removeBook(book.id)}
                                    style={{marginLeft:'10px'}}
                                    >Sil</button>
                            </td>

                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListBookComponent