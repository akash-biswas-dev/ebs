package com.cromxt.ebs.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CorsConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

  private final AuthenticationProvider authenticationProvider;

  private static final String[] WHITE_LIST_URLS = {
      "/api/v1/auth/**"
  };

  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    return http
        .csrf(CsrfConfigurer::disable)
        .cors(CorsConfigurer::disable)
        .httpBasic(HttpBasicConfigurer::disable)
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(authorize -> authorize.requestMatchers(WHITE_LIST_URLS).permitAll()
            .anyRequest().authenticated())
        .authenticationProvider(authenticationProvider)
        .build();
  }

}
