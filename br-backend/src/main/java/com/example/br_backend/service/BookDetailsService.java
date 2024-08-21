package com.example.br_backend.service;

import com.example.br_backend.dto.BookDetailsDto;

import java.util.List;

public interface BookDetailsService {
    BookDetailsDto createBookDetails(BookDetailsDto bookDetailsDto);

    BookDetailsDto getBookDetailsById(Long bookId);

    List<BookDetailsDto> getAllBooks();

    BookDetailsDto updateBookDetails(Long bookId, BookDetailsDto updateBookdetails);

    void  deleteBook(Long bookId);

}
