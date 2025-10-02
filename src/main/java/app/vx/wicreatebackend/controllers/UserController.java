package app.vx.wicreatebackend.controllers;

import app.vx.wicreatebackend.entities.User;
import app.vx.wicreatebackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping("/getAll")
    public List<User> getAll () {
        return service.getAll();
    }

    @GetMapping("/getById")
    public User getById (@RequestParam long id) {
        return service.getById(id);
    }

    @GetMapping("/getByNickName")
    public List<User> getByNickName (@RequestParam String nickName) {
        return service.getByNickName(nickName);
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> createUser (@RequestParam String nickName, @RequestParam String password) {
        User user = new User(nickName, password);
        service.createUSer(user);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "User created successfully"));
    }
}