package com.github.daianaegermichels.systemstudent.controller;

import com.github.daianaegermichels.systemstudent.model.Student;
import com.github.daianaegermichels.systemstudent.service.StudentService;
import org.apache.catalina.filters.ExpiresFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public ResponseEntity<String> post(@RequestBody Student student){
        studentService.saveStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body("New student add with success!");
    }

    @GetMapping("/allStudents")
    public ResponseEntity<List<Student>> getAllStudents(){
        List<Student> students= studentService.getAllStudents();
        return ResponseEntity.status(HttpStatus.OK).body(students);
    }
}
