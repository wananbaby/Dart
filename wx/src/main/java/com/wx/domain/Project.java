package com.wx.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author 021411
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Project {

    private Long id;
    private Long headImageId;
    private String headImage;
    private String biaoti;
    private String jianjie;
    private String field;
}
