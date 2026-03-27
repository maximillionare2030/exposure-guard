package com.exposureguard.backend.site.dto;

import com.exposureguard.backend.site.model.SiteVerificationStatus;
import java.time.Instant;

public record SiteResponse(
        Long id,
        String displayName,
        String targetUrl,
        SiteVerificationStatus verificationStatus,
        Instant createdAt
) {
}
