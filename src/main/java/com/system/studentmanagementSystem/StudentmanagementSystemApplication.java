package com.system.studentmanagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com"})
@EnableJpaRepositories(basePackages = {"com.Repository"})
@EntityScan(basePackages = {"com.Entity"})
public class StudentmanagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentmanagementSystemApplication.class, args);
	}

}
