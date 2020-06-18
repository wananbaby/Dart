package com.wx.project.request;

import com.wx.config.RequestDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author 021411
 */
@Data
@ApiModel
public class QueryProjectListRequest extends RequestDTO {
    private static final Long serialVersionUID = 1L;
}
