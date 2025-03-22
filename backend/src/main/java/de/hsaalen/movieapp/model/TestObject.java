package de.hsaalen.movieapp.model;


import jakarta.persistence.*;

@Entity
@Table(name = "test_object")
public class TestObject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long objectId;

    @Column
    public String objectName;

    @Column
    public int objectValue;

    public TestObject() {
    }

    public TestObject(String name, int value) {
        this.objectName = name;
        this.objectValue = value;
    }

    // Getters and setters
    public Long getObjectId() {
        return objectId;
    }

    public void setObjectId(Long objectId) {
        this.objectId = objectId;
    }

    public String getObjectName() {
        return objectName;
    }

    public void setObjectName(String objectName) {
        this.objectName = objectName;
    }

    public int getObjectValue() {
        return objectValue;
    }

    public void setObjectValue(int objectValue) {
        this.objectValue = objectValue;
    }
}

