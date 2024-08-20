package com.example.br_backend.controller;

import com.example.br_backend.dto.BookDetailsDto;
import com.example.br_backend.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookDetailsController {

    private BookDetailsService bookDetailsService;

    //Build Add book Rest API
    @PostMapping
    public ResponseEntity<BookDetailsDto> createBookDetails(@RequestBody BookDetailsDto bookDetailsDto){
        BookDetailsDto savedBooksDetails = bookDetailsService.createBookDetails(bookDetailsDto);
        return new ResponseEntity<>(savedBooksDetails, HttpStatus.CREATED);
    }

}
