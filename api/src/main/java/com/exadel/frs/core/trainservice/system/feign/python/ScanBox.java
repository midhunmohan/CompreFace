package com.exadel.frs.core.trainservice.system.feign.python;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ScanBox {

    @JsonProperty(value = "probability")
    private Double probability;

    @JsonProperty(value = "x_max")
    private Integer xMax;

    @JsonProperty(value = "y_max")
    private Integer yMax;

    @JsonProperty(value = "x_min")
    private Integer xMin;

    @JsonProperty(value = "y_min")
    private Integer yMin;
}