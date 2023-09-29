package com.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.crm.config.JwtTokenUtil;
import com.crm.model.JwtRequest;
import com.crm.model.JwtResponse;
import com.crm.service.JwtUserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

@Autowired
private AuthenticationManager authenticationManager;

@Autowired
private JwtTokenUtil jwtTokenUtil;

@Autowired
private JwtUserDetailsService userDetailsService;

@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
	authenticate(authenticationRequest.getEmail(), authenticationRequest.getSenha());
	final UserDetails userDetails = userDetailsService
			.loadUserByEmail(authenticationRequest.getEmail());
	final String token = jwtTokenUtil.generateToken(userDetails);
return ResponseEntity.ok(new JwtResponse(token));
}

private void authenticate(String username, String password) throws Exception {
try {
	authenticationManager.authenticate(new EmailSenhaAuthenticationToken(email, senha));
} catch (DisabledException e) {
	throw new Exception("USER_DISABLED", e);
} catch (BadCredentialsException e) {
	throw new Exception("INVALID_CREDENTIALS", e);
}
}
}