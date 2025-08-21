package com.cromxt.ebs.services;


import com.cromxt.ebs.dtos.requests.RegisterEmployeeDTO;
import com.cromxt.ebs.dtos.requests.RegisterWorkspace;
import com.cromxt.ebs.dtos.requests.WorkspaceDTO;
import com.cromxt.ebs.dtos.responses.EmployeeDTO;

import java.util.List;

public interface WorkspaceService {

    WorkspaceDTO createWorkspace(RegisterWorkspace newWorkspace);

    WorkspaceDTO getWorkspace(String workspaceId);

    Boolean isWorkspaceNameUnique(String userId, String workspaceName);

    List<WorkspaceDTO> getAllWorkspace(String userId, String workspaceName, Integer page, Integer pageSize);

    EmployeeDTO addEmployeeToTheWorkspace(String workspaceId, String userId, RegisterEmployeeDTO employeeDTO);



}
