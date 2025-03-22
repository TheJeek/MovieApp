package de.hsaalen.movieapp.controller;

import de.hsaalen.movieapp.model.TestObject;
import de.hsaalen.movieapp.repository.TestRepository;
import de.hsaalen.movieapp.service.TestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testObject") // Define a base URL for your endpoints
public class TestController {

    // Sample service (replace with actual service)
    private final TestService testService;

    public TestController(TestRepository testRepository, TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/{id}")
    public TestObject getTestObject(@PathVariable Long id) {
        return testService.getTestObjectById(id);
    }

    @GetMapping("/all")
    public List<TestObject> getAllTestObjects() {
        return testService.getAllTestObjects();
    }

    @PostMapping("/create")
    public ResponseEntity<TestObject> createTestObject(@RequestBody TestObject testObject) {
        System.out.println("TO BE CREATED: " + testObject.getObjectId() + testObject.getObjectName() + testObject.getObjectValue());
        TestObject createdTestObject = testService.createTestObject(new TestObject(testObject.objectName, testObject.objectValue));
        System.out.println("Created Object: " + createdTestObject);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTestObject);
    }
}

