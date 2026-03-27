package com.exposureguard.backend.site.service;

import com.exposureguard.backend.site.dto.CreateSiteRequest;
import com.exposureguard.backend.site.dto.SiteResponse;
import com.exposureguard.backend.site.model.Site;
import com.exposureguard.backend.site.model.SiteVerificationStatus;
import com.exposureguard.backend.site.repository.SiteRepository;
import java.time.Instant;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SiteService {

    private final SiteRepository siteRepository;

    public SiteService(SiteRepository siteRepository) {
        this.siteRepository = siteRepository;
    }

    @Transactional
    public SiteResponse createSite(CreateSiteRequest request) {
        siteRepository.findByTargetUrl(request.targetUrl()).ifPresent(existing -> {
            throw new IllegalArgumentException("Site with targetUrl already exists: " + request.targetUrl());
        });

        Site site = new Site(
                request.targetUrl().trim(),
                request.displayName().trim(),
                SiteVerificationStatus.PENDING,
                Instant.now());

        Site saved = siteRepository.save(site);
        return toResponse(saved);
    }

    @Transactional(readOnly = true)
    public List<SiteResponse> listSites() {
        return siteRepository.findAll().stream().map(this::toResponse).toList();
    }

    private SiteResponse toResponse(Site site) {
        return new SiteResponse(
                site.getId(),
                site.getDisplayName(),
                site.getTargetUrl(),
                site.getVerificationStatus(),
                site.getCreatedAt());
    }
}
