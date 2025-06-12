package com.example.Portfolio_backend.DTO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContactForm {

    private String name;
    private String email;
    private String phone;
    private String subject;
    private String message;

}
