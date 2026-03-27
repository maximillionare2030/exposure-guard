package com.exposureguard.backend.site.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.exposureguard.backend.site.dto.CreateSiteRequest;
import com.exposureguard.backend.site.model.Site;
import com.exposureguard.backend.site.model.SiteVerificationStatus;
import com.exposureguard.backend.site.repository.SiteRepository;
import java.time.Instant;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class SiteServiceTest {

    @Mock
    private SiteRepository siteRepository;

    @InjectMocks
    private SiteService siteService;

    @Test
    void createSiteShouldReturnCreatedSite() {
        CreateSiteRequest request = new CreateSiteRequest("Demo", "https://example.com");
        when(siteRepository.findByTargetUrl("https://example.com")).thenReturn(Optional.empty());
        when(siteRepository.save(any(Site.class))).thenAnswer(invocation -> {
            Site toSave = invocation.getArgument(0);
            return new Site(
                    toSave.getTargetUrl(),
                    toSave.getDisplayName(),
                    SiteVerificationStatus.PENDING,
                    Instant.parse("2026-01-01T00:00:00Z"));
        });

        var result = siteService.createSite(request);

        assertThat(result.displayName()).isEqualTo("Demo");
        assertThat(result.targetUrl()).isEqualTo("https://example.com");
        assertThat(result.verificationStatus()).isEqualTo(SiteVerificationStatus.PENDING);
    }

    @Test
    void createSiteShouldFailWhenTargetAlreadyExists() {
        CreateSiteRequest request = new CreateSiteRequest("Demo", "https://example.com");
        when(siteRepository.findByTargetUrl("https://example.com"))
                .thenReturn(Optional.of(new Site("https://example.com", "Demo", SiteVerificationStatus.PENDING, Instant.now())));

        assertThatThrownBy(() -> siteService.createSite(request))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("already exists");
    }
}
