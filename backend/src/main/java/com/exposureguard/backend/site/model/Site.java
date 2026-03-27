package com.exposureguard.backend.site.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "sites")
public class Site {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String targetUrl;

    @Column(nullable = false)
    private String displayName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SiteVerificationStatus verificationStatus;

    @Column(nullable = false)
    private Instant createdAt;

    protected Site() {
    }

    public Site(String targetUrl, String displayName, SiteVerificationStatus verificationStatus, Instant createdAt) {
        this.targetUrl = targetUrl;
        this.displayName = displayName;
        this.verificationStatus = verificationStatus;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getTargetUrl() {
        return targetUrl;
    }

    public String getDisplayName() {
        return displayName;
    }

    public SiteVerificationStatus getVerificationStatus() {
        return verificationStatus;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}
