package com.cromxt.ebs.services;

import com.cromxt.ebs.dtos.requests.RegisterUserDTO;
import com.cromxt.ebs.dtos.requests.UserCredentialDTO;
import com.cromxt.ebs.dtos.responses.AuthTokensDTO;
import com.cromxt.ebs.dtos.responses.UserDTO;
import com.cromxt.ebs.exception.AccountNotEnabledException;
import com.cromxt.ebs.exception.UserNotFoundException;
import com.cromxt.ebs.models.UserModel;
import com.cromxt.ebs.models.UserRole;
import com.cromxt.ebs.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class AuthServiceTest {

    @MockitoBean
    private UserRepository userRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;


    private UserModel user;

    @BeforeEach
    void beforeEach() {
        this.user = UserModel.builder()
                .id("a-long-id")
                .username("username")
                .email("abc@gmail.com")
                .password("password")
                .isEnabled(false)
                .isLocked(false)
                .role(UserRole.USER)
                .build();
    }

    @Test
    void shouldSaveTheUser() {
        when(userRepository.save(any(UserModel.class))).thenReturn(user);

        UserDTO userDTO = authService.registerUser(new RegisterUserDTO(user.getUsername(), user.getEmail(), user.getPassword()));

        assertNotNull(userDTO);
        assertEquals(user.getRealUsername(), userDTO.username());
        assertEquals(user.getEmail(), userDTO.email());
        assertEquals(user.getUserRole().name(), userDTO.role().name());
    }

    @Test
    void shouldGenerateAuthenticationTokensFromUserCredentialsWithEmailAndPassword() {

        UserCredentialDTO userCredentialDTO = new UserCredentialDTO(user.getEmail(), "password", true);

//        Mock the authentication manager.
        when(userRepository.findByEmailOrUsername(userCredentialDTO.emailOrUsername(), userCredentialDTO.emailOrUsername()))
                .thenReturn(Optional.of(UserModel.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .email(user.getEmail())
                        .password(passwordEncoder.encode(user.getPassword()))
                        .isEnabled(user.isEnabled())
                        .isLocked(user.isAccountNonLocked())
                        .role(user.getUserRole())
                        .build()));

        AuthTokensDTO authTokensDTO = authService.login(userCredentialDTO);

        assertNotNull(authTokensDTO);
        assertEquals(authTokensDTO.accessToken(), jwtService.generateToken(user));
        assertEquals(authTokensDTO.refreshToken(), jwtService.generateRefreshToken(user.getId()));
    }

    @Test
    void shouldFailedWhenUserAccountNotEnabled() {
        UserCredentialDTO userCredentialDTO = new UserCredentialDTO(user.getEmail(), "password", true);
//        Mock the authentication manager.
        when(userRepository.findByEmailOrUsername(userCredentialDTO.emailOrUsername(), userCredentialDTO.emailOrUsername()))
                .thenReturn(Optional.of(UserModel.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .email(user.getEmail())
                        .password(passwordEncoder.encode(user.getPassword()))
                        .isEnabled(user.isUserEnabled())
                        .isLocked(user.isAccountNonLocked())
                        .role(user.getUserRole())
                        .build()));

        assertThrowsExactly(AccountNotEnabledException.class, () -> {
            authService.login(userCredentialDTO);
        });
    }

    @Test
    void shouldThrowsExactlyBadCredentialsExceptionWhenGiveAInvalidUsername() {
        UserCredentialDTO userCredential = new UserCredentialDTO("username", "password", true);

        when(userRepository.findByEmailOrUsername(userCredential.emailOrUsername(), userCredential.emailOrUsername()))
                .thenThrow(new UserNotFoundException("User with " + userCredential.emailOrUsername() + " not found"));

        assertThrowsExactly(BadCredentialsException.class,()-> {
            authService.login(userCredential);
        });
        
    }


}