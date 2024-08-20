package com.example.br_backend.mapper;

import com.example.br_backend.dto.BookDetailsDto;
import com.example.br_backend.model.BookDetails;


public class BookDetailsMapper {
    public static BookDetailsDto mapToBookDetailsDto(BookDetails bookDetails){
        return  new BookDetailsDto(
                bookDetails.getId(),
                bookDetails.getBookName(),
                bookDetails.getAuthorName(),
                bookDetails.getBookGenre()
        );
    }

    public static BookDetails mapToBookDetails(BookDetailsDto bookDetailsDto){
        return new BookDetails(
                bookDetailsDto.getId(),
                bookDetailsDto.getBookName(),
                bookDetailsDto.getAuthorName(),
                bookDetailsDto.getBookGenre()
        );
    }
}
