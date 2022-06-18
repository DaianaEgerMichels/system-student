package com.github.daianaegermichels.systemstudent.repository;


import com.github.daianaegermichels.systemstudent.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
