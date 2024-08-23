package com.example.br_backend.controller;

import com.example.br_backend.dto.BookDetailsDto;
import com.example.br_backend.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookDetailsController {

    private BookDetailsService bookDetailsService;

    //Add book Rest API
    @PostMapping
    public ResponseEntity<BookDetailsDto> createBookDetails(@RequestBody BookDetailsDto bookDetailsDto){
        BookDetailsDto savedBooksDetails = bookDetailsService.createBookDetails(bookDetailsDto);
        return new ResponseEntity<>(savedBooksDetails, HttpStatus.CREATED);
    }

    //Get book Rest API
    @GetMapping("{id}")
    public ResponseEntity<BookDetailsDto> getBookDetailsById(@PathVariable("id") Long bookId){
         BookDetailsDto bookDetailsDto = bookDetailsService.getBookDetailsById(bookId);
         return  ResponseEntity.ok(bookDetailsDto);
    }
    //Get All Rest API
    @GetMapping
    public  ResponseEntity<List<BookDetailsDto>> getAllBooks(){
        List<BookDetailsDto> books = bookDetailsService.getAllBooks();
        return ResponseEntity.ok(books);
    }
    //Update Rest API
    @PutMapping("{id}")
    public ResponseEntity<BookDetailsDto> updateBooksDetails(@PathVariable("id") Long bookId,
                                                             @RequestBody BookDetailsDto updateBookDetails){
        BookDetailsDto bookDetailsDto = bookDetailsService.updateBookDetails(bookId,updateBookDetails);
        return ResponseEntity.ok(bookDetailsDto);
    }
    //Delete Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long bookId){
        bookDetailsService.deleteBook(bookId);
        return ResponseEntity.ok("Delete Successfuly!!");
    }


}
