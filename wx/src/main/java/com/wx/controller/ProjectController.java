package com.wx.controller;

import com.wx.convertor.ProjectConvertor;
import com.wx.domain.Project;
import com.wx.project.dto.ProjectDTO;
import com.wx.project.request.QueryProjectListRequest;
import com.wx.project.response.QueryProjectListResponse;
import com.wx.service.ProjectService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 021411
 */
@Controller
@Api
@RequestMapping("/wx/project")
public class ProjectController{

    @Autowired
    private ProjectService projectService;


    @ApiOperation(value = "查询项目列表")
    @ResponseBody
    @PostMapping("/queryProjectList")
    public QueryProjectListResponse queryProjectList(@RequestBody QueryProjectListRequest request){
        QueryProjectListResponse response = new QueryProjectListResponse();
        List<Project> projects = projectService.queryProjectList(ProjectConvertor.convert2Project(request));
        List<ProjectDTO> projectDTOList = ProjectConvertor.convert2List(projects);
        response.setProjectDTOS(projectDTOList);
        return response;
    }
}
