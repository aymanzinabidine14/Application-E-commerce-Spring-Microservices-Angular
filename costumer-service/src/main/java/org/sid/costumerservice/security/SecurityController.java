package org.sid.costumerservice.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class SecurityController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtEncoder jwtEncoder;


    @GetMapping("profile")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }

    @PostMapping("/login")
    public Map<String,String> login(String username,String password){

        try{
            Authentication authentication=authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password)
            );

            Instant instant=Instant.now();
            String scope=authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" "));
            JwtClaimsSet jwtClaimsSet= JwtClaimsSet.builder()
                    .issuedAt(instant)
                    .expiresAt(instant.plus(10, ChronoUnit.MINUTES))
                    .subject(username)
                    .claim("scope",scope)
                    .build();
            JwtEncoderParameters jwtEncoderParameters=
                    JwtEncoderParameters.from(
                            JwsHeader.with(MacAlgorithm.HS256).build(),
                            jwtClaimsSet
                    );

            String jwt=jwtEncoder.encode(jwtEncoderParameters).getTokenValue();

            return Map.of("access-Token",jwt);
        } catch (AuthenticationException e) {
            // Journalisez ou gérez l'erreur d'authentification
            e.printStackTrace(); // Ajoutez des journaux appropriés ici
            return Map.of("error", "L'authentification a échoué");
        }

    }



}
