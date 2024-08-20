package com.example.br_backend.service.impl;

import com.example.br_backend.dto.BookDetailsDto;
import com.example.br_backend.mapper.BookDetailsMapper;
import com.example.br_backend.model.BookDetails;
import com.example.br_backend.repository.BookRepo;
import com.example.br_backend.service.BookDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
