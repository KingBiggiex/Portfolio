package com.example.Portfolio_backend.Config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Contact Form API")
                        .description("API for handling contact form submissions")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("Treasure")
                                .email("lottringt12018@gmail.com")));
    }
}
