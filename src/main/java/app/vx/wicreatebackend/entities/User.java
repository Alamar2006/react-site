package app.vx.wicreatebackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
@JsonIgnoreProperties({"email", "password", "chats", "messages"})
public class User {

    public User (String nickName, String password) {
        setNickName(nickName);
        setPassword(password);
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

    @Column
    private String description;

    @Column(name = "avatar_url")
    private String avatarURL;

    //@JsonIgnore
    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @OneToMany
    private List<Chat> chats = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Message> messages = new ArrayList<>();
}
