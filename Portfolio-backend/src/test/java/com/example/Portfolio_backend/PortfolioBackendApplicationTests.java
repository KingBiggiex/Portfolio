package com.example.Portfolio_backend;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test") // Use test profile
class PortfolioBackendApplicationTests {

	@MockBean
    private JavaMailSender mailSender;

	@Test
	void contextLoads() {
		assertNotNull(mailSender);
	}

}
