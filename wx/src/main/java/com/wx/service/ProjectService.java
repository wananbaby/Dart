package com.wx.service;


import com.wx.domain.Project;

import java.util.List;

/**
 * @author 021411
 */
public interface ProjectService {

    List<Project> queryProjectList(Project project);

}
