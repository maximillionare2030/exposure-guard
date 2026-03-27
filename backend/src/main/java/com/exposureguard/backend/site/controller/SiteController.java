package com.exposureguard.backend.site.controller;

import com.exposureguard.backend.site.dto.CreateSiteRequest;
import com.exposureguard.backend.site.dto.SiteResponse;
import com.exposureguard.backend.site.service.SiteService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sites")
public class SiteController {

    private final SiteService siteService;

    public SiteController(SiteService siteService) {
        this.siteService = siteService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SiteResponse createSite(@Valid @RequestBody CreateSiteRequest request) {
        return siteService.createSite(request);
    }

    @GetMapping
    public List<SiteResponse> listSites() {
        return siteService.listSites();
    }
}
