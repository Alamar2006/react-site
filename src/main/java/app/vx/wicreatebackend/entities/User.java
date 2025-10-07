package app.vx.wicreatebackend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User {

    public User (String nickName, String password) {
        setNickName(nickName);
        setPassword(password);
        createdAtDate = LocalDate.now();
        createdAtTime = LocalTime.now();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
    @SequenceGenerator(
            name = "user_generator",
            sequenceName = "user_sequence",
            allocationSize = 1,
            initialValue = 100000
    )
    private Long id;


    @Column(nullable = false)
    private String nickName;

    private String description;

    @Column(name = "avatar_url")
    private String avatarURL;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToMany
    private List<Chat> chats;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Message> messages;

    @Column(name = "created_at_date")
    private LocalDate createdAtDate;

    @Column(name = "created_at_time")
    private LocalTime createdAtTime;

    @OneToMany(mappedBy = "followUser")
    private List<Follow> follows;

}