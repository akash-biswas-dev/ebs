package com.cromxt.ebs.dtos.requests;

public record WorkspaceDTO(
        String workspaceName,
        String description,
        String profile
) {
}
