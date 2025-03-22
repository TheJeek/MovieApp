package de.hsaalen.movieapp.service;

import de.hsaalen.movieapp.model.TestObject;
import de.hsaalen.movieapp.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    private final TestRepository testRepository;


    @Autowired
    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    public TestObject createTestObject(TestObject testObject) {
        return testRepository.save(testObject);
    }

    public TestObject getTestObjectById(Long id) {
        return testRepository.findById(id).orElse(null);
    }

    public List<TestObject> getAllTestObjects() {
        return testRepository.findAll();
    }
}
