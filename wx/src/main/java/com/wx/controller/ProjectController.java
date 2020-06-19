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
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author 021411
 */
@RestController
@Api(tags = {"ProjectController"})
@RequestMapping("/wx/project")
public class ProjectController{


    @ApiOperation(value = "zys")
    @ResponseBody
    @RequestMapping(value = "/zys")
    public String zys(){
        return "zys";
    }

    @Autowired
    private ProjectService projectService;


    @ApiOperation(value = "查询项目列表")
    @ResponseBody
    @PostMapping(value = "/queryProjectList")
    public QueryProjectListResponse queryProjectList(@RequestBody QueryProjectListRequest request){
        QueryProjectListResponse response = new QueryProjectListResponse();
        List<Project> projects = projectService.queryProjectList(ProjectConvertor.convert2Project(request));
        List<ProjectDTO> projectDTOList = ProjectConvertor.convert2List(projects);
        response.setProjectDTOS(projectDTOList);
        return response;
    }
}
