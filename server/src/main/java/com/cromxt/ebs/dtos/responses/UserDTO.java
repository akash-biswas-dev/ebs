package com.cromxt.ebs.dtos.responses;

import com.cromxt.ebs.models.UserRole;

public record UserDTO(
        String username,
        String email,
        UserRole role
) {
}
