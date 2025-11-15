package com.Repository;

import com.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByEmerContainingIgnoreCase(String emer);
    List<Student> findByEmailContainingIgnoreCase(String email);

    @Query("select s from Student s where (:q is null or lower(s.emer) like lower(concat('%', :q, '%')) or lower(s.email) like lower(concat('%', :q, '%'))) and (:minGrade is null or s.notaMesatare >= :minGrade) and (:maxGrade is null or s.notaMesatare <= :maxGrade)")
    List<Student> search(String q, Double minGrade, Double maxGrade);
}

