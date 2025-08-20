package com.cromxt.ebs.dtos.responses;

public record AuthTokensDTO(
    String accessToken,
    String refreshToken) {

}
