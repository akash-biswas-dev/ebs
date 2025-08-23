package com.cromxt.ebs.dtos.requests;

public record RegisterUserDTO(
    String username,
    String email,
    String password) {

}
