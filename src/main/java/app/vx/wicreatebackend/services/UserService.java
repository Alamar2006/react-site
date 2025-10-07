package app.vx.wicreatebackend.services;

import app.vx.wicreatebackend.dtos.UserResponseDTO;
import app.vx.wicreatebackend.entities.User;
import app.vx.wicreatebackend.mappers.UserMapping;
import app.vx.wicreatebackend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserMapping userMapping;

    public List<UserResponseDTO> getAll () {
        return userMapping.toDtoList(repository.findAll());
    }

    public UserResponseDTO getById (long id) {
        return userMapping.toDto(repository.findById(id).orElseThrow());
    }

    public List<UserResponseDTO> getByNickName (String nickName) {
        return userMapping.toDtoList(repository.findByNickName(nickName));
    }
    
    public void createUSer (User user) {
        repository.save(user);
    }

    @Transactional
    public void changeEmail (Long id, String email) {
        try {
            User user = repository.findById(id).orElseThrow();
            user.setEmail(email);
        } catch (Exception e) {

        }
    }

    @Transactional
    public void changeNickName (Long id, String nickName) {
        try {
            User user = repository.findById(id).orElseThrow();
            user.setNickName(nickName);
        } catch (Exception e) {

        }
    }

    @Transactional
    public void changeDescription (Long id, String description) {
        try {
            User user = repository.findById(id).orElseThrow();
            user.setDescription(description);
        } catch (Exception e) {

        }
    }

    @Transactional
    public void changePassword (Long id, String password) {
        try {
            User user = repository.findById(id).orElseThrow();
            user.setPassword(password);
        } catch (Exception e) {

        }
    }

    @Transactional
    public void changeAvatar (Long id) {

    }
}