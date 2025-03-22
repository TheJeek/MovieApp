package de.hsaalen.movieapp.repository;

import de.hsaalen.movieapp.model.TestObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<TestObject, Long> {
    // You can define custom query methods here if needed
}
