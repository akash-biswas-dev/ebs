package com.cromxt.ebs.services.impl;


import com.cromxt.ebs.dtos.requests.RegisterEmployeeDTO;
import com.cromxt.ebs.dtos.requests.RegisterWorkspace;
import com.cromxt.ebs.dtos.requests.WorkspaceDTO;
import com.cromxt.ebs.dtos.responses.EmployeeDTO;
import com.cromxt.ebs.repository.WorkspaceRepository;
import com.cromxt.ebs.services.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkspaceServiceImpl implements WorkspaceService {

    private final WorkspaceRepository workspaceRepository;

    @Override
    public WorkspaceDTO createWorkspace(RegisterWorkspace newWorkspace) {
        return null;
    }

    @Override
    public WorkspaceDTO getWorkspace(String workspaceId) {
        return null;
    }

    @Override
    public Boolean isWorkspaceNameUnique(String userId, String workspaceName) {
        return null;
    }

    @Override
    public List<WorkspaceDTO> getAllWorkspace(String userId, String workspaceName, Integer page, Integer pageSize) {
        return List.of();
    }

    @Override
    public EmployeeDTO addEmployeeToTheWorkspace(String workspaceId, String userId, RegisterEmployeeDTO employeeDTO) {
        return null;
    }
}
