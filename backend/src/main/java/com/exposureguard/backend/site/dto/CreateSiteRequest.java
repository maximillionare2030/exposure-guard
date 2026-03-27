package com.exposureguard.backend.site.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record CreateSiteRequest(
        @NotBlank(message = "displayName is required")
        String displayName,

        @NotBlank(message = "targetUrl is required")
        @Pattern(
                regexp = "^https?://.+$",
                message = "targetUrl must start with http:// or https://")
        String targetUrl
) {
}
