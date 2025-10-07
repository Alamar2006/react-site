package app.vx.wicreatebackend.mappers;

import app.vx.wicreatebackend.dtos.UserResponseDTO;
import app.vx.wicreatebackend.entities.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapping {
    UserResponseDTO toDto(User user);
    List<UserResponseDTO> toDtoList(List<User> users);
}
