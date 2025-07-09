package com.example.Portfolio_backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Portfolio_backend.DTO.ContactForm;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public ResponseEntity<?> sendEmail(@RequestBody ContactForm contactForm) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(contactForm.getEmail());
            message.setTo("lottringt12018@gmail.com"); // Your email address
            message.setSubject(contactForm.getName() + " is reaching out to you! " + contactForm.getSubject());
            
            String emailContent = String.format(
                "🧑Name: %s\n📧Email: %s\n📞Phone: %s\n\nMessage:\n%s",
                contactForm.getName(),
                contactForm.getEmail(),
                contactForm.getPhone() != null ? contactForm.getPhone() : "Not provided",
                contactForm.getMessage()
            );
            
            message.setText(emailContent);
            
            mailSender.send(message);
            
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to send email");
        }
    }
    
}
