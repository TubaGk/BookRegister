package com.example.br_backend.repository;

import com.example.br_backend.model.BookDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<BookDetails,Long> {
}
