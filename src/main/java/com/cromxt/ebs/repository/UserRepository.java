package com.cromxt.ebs.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cromxt.ebs.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, String> {

  Optional<UserModel> findByEmailOrUsername(String email, String username);
}
