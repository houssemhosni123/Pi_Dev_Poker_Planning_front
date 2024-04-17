package com.example.pi_dev_4eme__poker_planning.Entities;


import com.example.pi_dev_4eme__poker_planning.Configurations.GrantedAuthorityDeserializer;
import com.example.pi_dev_4eme__poker_planning.Configurations.GrantedAuthoritySerializer;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements UserDetails ,Serializable
{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;
    private String Nom;
    private String Prenom;
    private String Image;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role rolee;
    @Enumerated(EnumType.STRING)
    private StatusUser Status;
    private String Tel;


    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Tache> taches;

    @OneToMany (mappedBy = "user",cascade = CascadeType.ALL)
    Set<Reunion> reunions;

    @ManyToMany (mappedBy = "users",cascade = CascadeType.ALL)
    Set<Reunion>reunionsAssiter;

    @OneToMany(mappedBy = "userReclamer",cascade = CascadeType.ALL)
    Set<Reclamation> reclamations;

    /*@ManyToMany (cascade = CascadeType.ALL)
    Set<Projet>Projets;*/

    @JsonIgnore
    @OneToOne(mappedBy = "user",cascade = CascadeType.REMOVE)
    private Estimation estimation;

    @JsonSerialize(contentUsing = GrantedAuthoritySerializer.class)
    @JsonDeserialize(contentUsing = GrantedAuthorityDeserializer.class)

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(rolee.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

