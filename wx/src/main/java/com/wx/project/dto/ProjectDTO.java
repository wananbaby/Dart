package com.wx.project.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@ApiModel
public class ProjectDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    @ApiModelProperty(value = "id", dataType = "Integer")
    private Long id;


    @ApiModelProperty(value = "头图id", dataType = "Integer")
    private Long headimageId;

    @ApiModelProperty(value = "头图", dataType = "String")
    private String headimageSrc;


    @ApiModelProperty(value = "标题", dataType = "String")
    private String biaoti;


    @ApiModelProperty(value = "简介", dataType = "String")
    private String jianjie;
}
