package com.example.br_backend.service.impl;

import com.example.br_backend.dto.BookDetailsDto;
import com.example.br_backend.exception.ResourceNotFoundException;
import com.example.br_backend.mapper.BookDetailsMapper;
import com.example.br_backend.model.BookDetails;
import com.example.br_backend.repository.BookRepo;
import com.example.br_backend.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BooksDetailsServiceImpl implements BookDetailsService {

    private BookRepo bookRepo;

    @Override
    public BookDetailsDto createBookDetails(BookDetailsDto bookDetailsDto) {
        BookDetails bookDetails = BookDetailsMapper.mapToBookDetails(bookDetailsDto);
        BookDetails savedBookDetails =bookRepo.save(bookDetails);
        return BookDetailsMapper.mapToBookDetailsDto(savedBookDetails);
    }

    @Override
    public BookDetailsDto getBookDetailsById(Long bookId) {
         BookDetails bookDetails =bookRepo.findById(bookId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Book is not exists with given id: "+bookId));

        return BookDetailsMapper.mapToBookDetailsDto(bookDetails);
    }

    @Override
    public List<BookDetailsDto> getAllBooks() {
       List<BookDetails> books = bookRepo.findAll();
        return books.stream().map((bookDetails) ->BookDetailsMapper.mapToBookDetailsDto(bookDetails))
                .collect(Collectors.toList());
    }

    @Override
    public BookDetailsDto updateBookDetails(Long bookId, BookDetailsDto updateBookdetails) {

        BookDetails bookDetails = bookRepo.findById(bookId).orElseThrow(
                ()-> new ResourceNotFoundException("Book is not exists with given id: "+bookId));

        bookDetails.setBookName(updateBookdetails.getBookName());
        bookDetails.setAuthorName(updateBookdetails.getAuthorName());
        bookDetails.setBookGenre(updateBookdetails.getBookGenre());

        BookDetails updateBookObj = bookRepo.save(bookDetails);

        return BookDetailsMapper.mapToBookDetailsDto(updateBookObj);
    }

    @Override
    public void deleteBook(Long bookId) {
        BookDetails bookDetails = bookRepo.findById(bookId).orElseThrow(
                ()-> new ResourceNotFoundException("Book is not exists with given id: "+bookId));

        bookRepo.deleteById(bookId);

    }
}
