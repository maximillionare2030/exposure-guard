package com.exposureguard.backend.common.api;

import java.time.Instant;

public record ApiErrorResponse(
        String code,
        String message,
        Instant timestamp
) {
}
