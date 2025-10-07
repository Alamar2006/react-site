package app.vx.wicreatebackend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "chats")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chat_generator")
    @SequenceGenerator(
            name = "chat_generator",
            sequenceName = "chat_sequence",
            allocationSize = 1
    )
    private Long id;

    @NotBlank(message = "Name cannot be empty")
    @Size(max = 100)
    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    private List<User> users;

    @OneToMany(mappedBy = "chat", fetch = FetchType.LAZY)
    private List<Message> messages;
}
