package com.wx.project.request;

import com.wx.config.RequestDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author 021411
 */
@EqualsAndHashCode(callSuper = true)
@Data
@ApiModel
public class QueryProjectListRequest extends RequestDTO {
    private static final Long serialVersionUID = 1L;
}
