package com.wx.project.response;

import com.wx.config.ResponseDTO;
import com.wx.project.dto.ProjectDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

/**
 * @author 021411
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel
public class QueryProjectListResponse extends ResponseDTO {
    private static final Long serialVersionUID = 1L;

    @ApiModelProperty(value = "查询项目结果")
    private List<ProjectDTO> projectDTOS;
}
