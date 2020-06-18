package com.wx.mapper;

import com.wx.domain.Project;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author 021411
 */
@Mapper
@Component(value = "projectMapper")
public interface ProjectMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Project queryProjectById(Integer id);
    /**
     * 通过实体作为筛选条件查询
     *
     * @param project 实例对象
     * @return 对象列表
     */
    List<Project> queryProjectList(Project project);

    /**
     * 新增数据
     *
     * @param project 实例对象
     * @return 影响行数
     */
    void insert(Project project);

    /**
     * 修改数据
     *
     * @param project 实例对象
     * @return 影响行数
     */
    void update(Project project);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    void invalidProject(Integer id);
}
