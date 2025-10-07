package app.vx.wicreatebackend.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private Long id;
    private String nickName;
    private String description;
    private String avatarURL;
}
