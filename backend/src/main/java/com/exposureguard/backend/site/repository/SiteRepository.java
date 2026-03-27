package com.exposureguard.backend.site.repository;

import com.exposureguard.backend.site.model.Site;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SiteRepository extends JpaRepository<Site, Long> {

    Optional<Site> findByTargetUrl(String targetUrl);
}
