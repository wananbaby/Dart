package com.wx.convertor;

import com.wx.domain.Project;
import com.wx.project.dto.ProjectDTO;
import com.wx.project.request.QueryProjectListRequest;

import java.util.ArrayList;
import java.util.List;

/**
 * @author 021411
 */
public class ProjectConvertor {

    public static Project convert2Project(QueryProjectListRequest request){
        if (request == null){
            return null;
        }
        Project project = new Project();
        project.setId(null);
        return project;
    }
    public static List<ProjectDTO> convert2List(List<Project> projects){
        if (projects == null){
            return null;
        }
        List<ProjectDTO> projectDTOList = new ArrayList<>();
        for (Project project : projects){
            ProjectDTO projectDTO = convert2ProjectDTO(project);
            projectDTOList.add(projectDTO);
        }
        return projectDTOList;
    }
    public static ProjectDTO convert2ProjectDTO(Project project){
        if (project == null){
            return null;
        }
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setId(project.getId());
        projectDTO.setHeadimageId(project.getHeadImageId());
        projectDTO.setHeadimageSrc(project.getHeadImage());
        projectDTO.setBiaoti(project.getBiaoti());
        projectDTO.setJianjie(project.getJianjie());
        return projectDTO;
    }
}
