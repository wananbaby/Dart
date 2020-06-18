package com.wx.service.impl;

import com.wx.domain.Project;
import com.wx.mapper.ProjectMapper;
import com.wx.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 021411
 */
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;


    @Override
    public List<Project> queryProjectList(Project project) {
        return projectMapper.queryProjectList(project);
    }
}
