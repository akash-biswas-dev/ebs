package com.cromxt.ebs.dtos.requests;

public record UserCredentialDTO(
    String usernameOrEmail,
    String password) {

}
