package com.cromxt.ebs.services;


import com.cromxt.ebs.dtos.responses.UserDTO;
import com.cromxt.ebs.models.UserModel;

public interface EntityMapper {

    UserDTO mapToUserDTO(UserModel user);
}
