package com.Service;

import com.Entity.Student;
import com.Repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public Student create(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student findById(Long id) {
        return studentRepository.findById(id).orElseThrow();
    }

    public Student update(Long id, Student updated) {
        Student s = findById(id);
        s.setEmer(updated.getEmer());
        s.setEmail(updated.getEmail());
        s.setNotaMesatare(updated.getNotaMesatare());
        return studentRepository.save(s);
    }

    public void delete(Long id) {
        studentRepository.deleteById(id);
    }

    public List<Student> search(String q, Double minGrade, Double maxGrade) {
        return studentRepository.search(q, minGrade, maxGrade);
    }
}

