package com.example.br_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//RestAPI için
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDetailsDto {
    private Long id;
    private String bookName;
    private String authorName;
    private String bookGenre;
}
