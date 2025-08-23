package com.cromxt.ebs.services.impl;

import com.cromxt.ebs.dtos.responses.UserDTO;
import com.cromxt.ebs.models.UserModel;
import com.cromxt.ebs.services.EntityMapper;
import org.springframework.stereotype.Service;


@Service
public class EntityMapperImpl implements EntityMapper {
    @Override
    public UserDTO mapToUserDTO(UserModel user) {
        return new UserDTO(user.getRealUsername(),user.getEmail(),user.getUserRole());
    }
}
