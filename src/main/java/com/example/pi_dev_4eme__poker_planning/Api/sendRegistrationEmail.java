package com.example.pi_dev_4eme__poker_planning.Api;



import com.example.pi_dev_4eme__poker_planning.Controllers.RegisterRequest;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;

import java.util.Properties;
import jakarta.mail.internet.MimeMessage;
import org.springframework.stereotype.Component;


@Component

public class sendRegistrationEmail {

    public void RegistrationEmail(RegisterRequest re,String recipientEmail, String password) {

        // Sender's email and password
        final String senderEmail = "houssenhosni@gmail.com";
        final String senderPassword = "lsxkucgmnacvkuad";

        // Email properties
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com"); // Specify your SMTP server
        properties.put("mail.smtp.port", "587"); // Specify your SMTP port

        // Session
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            // Create a MimeMessage object
            MimeMessage message = new MimeMessage(session);

            // Set From: header field
            message.setFrom(new InternetAddress(senderEmail));

            // Set To: header field
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));

            // Set Subject: header field
            message.setSubject("Registration Successful");

            // Set email content
            String emailContent = "Dear " + re.getRole() + ",\n\n" +
                    "Thank you for registering. Below are your registration details:\n\n" +
                    "Email: " + recipientEmail + "\n" +
                    "Password: " + password + "\n\n" +
                    "Please keep this information safe.\n\n" +
                    "Regards,\n" +
                    "Your Application Team";


            // Set email content
            message.setText(emailContent);

            // Send message
            Transport.send(message);

            System.out.println("Registration email sent successfully to " + recipientEmail);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
