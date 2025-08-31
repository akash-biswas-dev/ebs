package com.cromxt.ebs.dtos.requests;

public record UserCredentialDTO(
    String emailOrUsername,
    String password,
    Boolean rememberMe
) {

}
