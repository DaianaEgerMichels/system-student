package com.github.daianaegermichels.systemstudent.service;

import com.github.daianaegermichels.systemstudent.model.Student;

import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
