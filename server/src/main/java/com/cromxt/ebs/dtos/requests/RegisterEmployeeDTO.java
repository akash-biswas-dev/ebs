package com.cromxt.ebs.dtos.requests;

public record RegisterEmployeeDTO(
        String email,
        String username,
        String password,
        String firstName,
        String lastName
) {
}
