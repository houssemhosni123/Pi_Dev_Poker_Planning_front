package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.Reunion;
import com.example.pi_dev_4eme__poker_planning.Entities.TypePriorite;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Repositories.ReclamationRepositories;
import com.example.pi_dev_4eme__poker_planning.Repositories.ReunionRepositories;

import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.logging.Logger;
@SpringBootApplication
@EnableScheduling
@Slf4j
@Service
public class ReunionService implements IReunionRepositories {
    @Autowired
    UserRepository userRepositories;
    @Autowired
    ReunionRepositories reunionRepositories;
    @Autowired
    ReclamationRepositories reclamationRepositories;
    //@Override
    //public Reunion addReunion(Reunion reunion, Long idUser) {
    //  User user = userRepositories.findById(idUser).orElse(null);
    //reunion.setUser(user);
    //return  reunionRepositories.save(reunion);
    //}
    @Autowired
    private JavaMailSender emailSender;

    private final SimpMessagingTemplate messagingTemplate;

    public ReunionService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }
    @Override
    public Reunion addReunion(Reunion reunion) {
        reunion.setDatedepot(LocalDateTime.now());


        return reunionRepositories.save(reunion);
    }

    @Override
    public void deleteReunion(Long id) {
        reunionRepositories.deleteById(id);


    }

    @Override
    public List<Reunion> getAllReunions() {
        return reunionRepositories.findAll();


    }

    @Override
    public Reunion getReunionById(Long id) {
        return reunionRepositories.findById(id).orElse(null);

    }


    @Override
    public Reunion updateReunion(Long id, Reunion updatedReunion) {

        Reunion existingReunion = reunionRepositories.findById(id).orElse(null);

        if (existingReunion != null) {
            existingReunion.setTitre_Reunion(updatedReunion.getTitre_Reunion());
            existingReunion.setDateDebut_Reunion(updatedReunion.getDateDebut_Reunion());
            existingReunion.setDateFin_Reunion(updatedReunion.getDateFin_Reunion());
            existingReunion.setLieu_Reunion(updatedReunion.getLieu_Reunion());
            existingReunion.setPriorite_Reunion(updatedReunion.getPriorite_Reunion());
            // Autres attributs à mettre à jour si nécessaire

            return reunionRepositories.save(existingReunion);
        } else {
            return null; // Gérer le cas où la réunion n'existe pas
        }
    }

    @Override
    public List<String> getAllTitreReunion() {
        return reunionRepositories.findAllTitres();
    }

    @Override
    public void addUserToReunionByUserIdAndUserNames(Reunion reunion, List<String> userNames, TypePriorite prioriteReunion) {
        LocalDateTime datedepot = LocalDateTime.now();
        LocalDateTime dateDebut = trouverDateDebut(datedepot);
        int dureeReunion = DureeReunion(prioriteReunion);

        while (estJourFerie(dateDebut.toLocalDate())  || estPauseDejeuner(dateDebut.toLocalTime())||!JourDeTravail(dateDebut.getDayOfWeek()) || !estHeureTravail(dateDebut.toLocalTime())) {

            dateDebut = dateDebut.plusHours(1);
        }

        for (String userName : userNames) {
            User invitedUser = userRepositories.findUsersByNomUser(userName);
            if (invitedUser != null) {
                LocalDateTime prochaineDisponibilite = findNextAvailableTimeForUser(invitedUser, dateDebut);
                if (prochaineDisponibilite != null) {
                    dateDebut = prochaineDisponibilite.plusMinutes(5);
                }
                reunion.getUsers().add(invitedUser);
            }
        }

        reunion.setDatedepot(datedepot);
        reunion.setDateDebut_Reunion(dateDebut);
        reunion.setDateFin_Reunion(dateDebut.plusMinutes(dureeReunion));
        for (User user : reunion.getUsers()) {

            Email(user.getEmail(), reunion);
        }


        reunionRepositories.save(reunion);

    }
    private void Email(String userEmail, Reunion reunion) {
        MimeMessage message = emailSender.createMimeMessage(); //classe dans la bibliothèque JavaMail
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
                helper.setTo(userEmail);
            helper.setSubject("Invitation à une réunion");

            Resource resource = new ClassPathResource("email.html");
            InputStream inputStream = resource.getInputStream();
            Scanner scanner = new Scanner(inputStream, "UTF-8");
            String htmlMsg = scanner.useDelimiter("\\A").next();
            scanner.close();

            htmlMsg = htmlMsg.replace("{titre}", reunion.getPriorite_Reunion().toString())
                    .replace("{dateDebut}", reunion.getDateDebut_Reunion().toString())
                    .replace("{dateFin}", reunion.getDateFin_Reunion().toString())
                    .replace("{lieu}", reunion.getLieu_Reunion())
                    .replace("{priorite}", reunion.getTitre_Reunion())
                    .replace("{nom}", "Nom de l'utilisateur") // Replace with the user's name
                    .replace("{lienReunion}", "Lien de la réunion"); // Replace with the meeting link

            helper.setText(htmlMsg, true);
        } catch (Exception e) {
            e.printStackTrace();
        }
        emailSender.send(message);
    }
    private void sendInvitationEmail(String userEmail, Reunion reunion) {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setTo(userEmail);
            helper.setSubject("Invitation à une réunion");
            helper.setText("Rappel : Votre réunion intitulée '" + reunion.getTitre_Reunion() + "' débutera bientôt. " +
                    "Date de début : " + reunion.getDateDebut_Reunion() + " - Date de fin : " + reunion.getDateFin_Reunion() +
                    " - Priorité : " + reunion.getPriorite_Reunion());   } catch (MessagingException e) {
            e.printStackTrace();
        }
        emailSender.send(message);
    }
    @Transactional
    @Scheduled(fixedDelay = 60000)
    public void planifierRappelsReunion() {

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime  tempsAvenir= now.plusMinutes(4);

        List<Reunion> reunionsAVenir = reunionRepositories.findReunionsBetweenDateTime(now, tempsAvenir);

        for (Reunion reunion : reunionsAVenir) {
            envoyerRappelReunion(reunion);
        }
        System.out.println("Planification des rappels de réunion effectuée avec succès.");
    }

    private void envoyerRappelReunion(Reunion reunion) {
        for (User user : reunion.getUsers()) {
            sendInvitationEmail(user.getEmail(), reunion);
        }
    }
    private LocalDateTime trouverDateDebut(LocalDateTime dateDepot) {
        return dateDepot.plusMinutes(4);
    }
    private int DureeReunion(TypePriorite priorite) {
        if (priorite == TypePriorite.SPRINT_MEETING_PLAINING) {
            return 120;
        } else if (priorite == TypePriorite.DALIY_SCRUM) {
            return 15;
        } else if (priorite == TypePriorite.SPRINT_REVIEW) {
            return 120;
        }
        else {
            return 90;

    }}
    private boolean JourDeTravail(DayOfWeek jourSemaine) {
        return jourSemaine != DayOfWeek.SATURDAY && jourSemaine != DayOfWeek.SUNDAY;
    }
    private static final List<LocalDate> joursFeries = Arrays.asList(
            LocalDate.of(2024, 1, 1),
            LocalDate.of(2024, 1, 14),
            LocalDate.of(2024, 3, 10),
            LocalDate.of(2024, 3, 20),
            LocalDate.of(2024, 4, 10),
            LocalDate.of(2024, 5, 1),
            LocalDate.of(2024, 7, 25),
            LocalDate.of(2024, 9, 24),
            LocalDate.of(2024, 10, 15),
            LocalDate.of(2024, 12, 25)
    );
    public static boolean estJourFerie(LocalDate date) {
        return joursFeries.contains(date);
    }
    private boolean estHeureTravail(LocalTime heure) {
        return (heure.compareTo(LocalTime.of(9, 0)) >= 0 && heure.compareTo(LocalTime.of(12, 0)) < 0)
                || (heure.compareTo(LocalTime.of(14, 0)) >= 0 && heure.compareTo(LocalTime.of(17, 0)) < 0);
    }
    private boolean estPauseDejeuner(LocalTime heure) {
        return heure.compareTo(LocalTime.of(12, 0)) >= 0 && heure.compareTo(LocalTime.of(14, 0)) < 0;
    }

    private LocalDateTime findNextAvailableTimeForUser(User user, LocalDateTime startDateTime) {
        LocalDateTime endDateTime = startDateTime.plusMonths(1);

        List<Reunion> userReunions = reunionRepositories.findReunionsByUserAndDateDebutReunionBetween(user, startDateTime, endDateTime);

        if (!userReunions.isEmpty()) {
            Reunion lastReunion = userReunions.get(userReunions.size() - 1);
            LocalDateTime lastReunionEnd = lastReunion.getDateFin_Reunion();

            LocalTime lastReunionEndTime = lastReunionEnd.toLocalTime();

            if (estHeureTravail(lastReunionEndTime) && !estPauseDejeuner(lastReunionEndTime)) {
                return lastReunionEnd;
            } else {

                while (!estHeureTravail(lastReunionEndTime) || estPauseDejeuner(lastReunionEndTime)) {
                    lastReunionEnd = lastReunionEnd.plusHours(1);
                    lastReunionEndTime = lastReunionEnd.toLocalTime();
                }
                return lastReunionEnd;
            }
        }

        return startDateTime;
    }

}
