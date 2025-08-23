package com.cromxt.ebs.services;

import com.cromxt.ebs.dtos.requests.RegisterUserDTO;
import com.cromxt.ebs.dtos.requests.UserCredentialDTO;
import com.cromxt.ebs.dtos.responses.AuthTokensDTO;
import com.cromxt.ebs.dtos.responses.UserDTO;

public interface AuthService {

  UserDTO registerUser(RegisterUserDTO registerUser);

  AuthTokensDTO login(UserCredentialDTO userCredentials);

}
