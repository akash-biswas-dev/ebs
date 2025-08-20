package com.cromxt.ebs.models;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

public enum UserRole {
  USER,
  ADMIN,;

  List<SimpleGrantedAuthority> getAuthroities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + this.name()));
  }
}
