package app.vx.wicreatebackend.services;

import app.vx.wicreatebackend.entities.User;
import app.vx.wicreatebackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> getAll () {
        return repository.findAll();
    }

    public User getById (long id) {
        return repository.findById(id).orElseThrow();
    }

    public List<User> getByNickName (String nickName) {
        return repository.findByNickName(nickName);
    }
    
    public void createUSer (User user) {
        repository.save(user);
    }
}
