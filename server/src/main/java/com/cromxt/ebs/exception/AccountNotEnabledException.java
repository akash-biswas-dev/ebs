package com.cromxt.ebs.exception;

public class AccountNotEnabledException extends RuntimeException {
    public AccountNotEnabledException(String message) {
        super(message);
    }
}
