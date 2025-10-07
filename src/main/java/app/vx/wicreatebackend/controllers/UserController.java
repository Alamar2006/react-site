package app.vx.wicreatebackend.controllers;

import app.vx.wicreatebackend.dtos.UserResponseDTO;
import app.vx.wicreatebackend.entities.User;
import app.vx.wicreatebackend.services.FollowService;
import app.vx.wicreatebackend.services.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private FollowService followService;

    @GetMapping("/getAll")
    public List<UserResponseDTO> getAll () {
        return service.getAll();
    }

    @GetMapping("/getById")
    public UserResponseDTO getById (@RequestParam long id) {
        return service.getById(id);
    }

    @GetMapping("/getByNickName")
    public List<UserResponseDTO> getByNickName (@RequestParam String nickName) {
        return service.getByNickName(nickName);
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> createUser (@RequestParam @Valid @NotBlank(message = "NickName cannot be empty")
                                             @Size(min = 2, max = 18, message = "NickName must be between 2 and 18 characters") String nickName,
                                         @RequestParam @Valid @Size(min = 8, message = "password must be between 8 characters") String password)
    {
        User user = new User(nickName, password);
        service.createUSer(user);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "User created successfully"));
    }

    @PostMapping("{userId}/addFollow")
    public ResponseEntity<?> addFollow (@PathVariable Long id, @RequestParam Long followUserId) {
        followService.addFollow(id, followUserId);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "Follow added successfully"));
    }

    @PutMapping("/{userId}/changeEmail")
    public ResponseEntity<?> changeEmail (@PathVariable Long id,
                                          @RequestParam @Valid @Email(message = "Email should be valid")
                                          @Size(max = 100, message = "Email cannot exceed 100 characters") String email)
    {
        service.changeEmail(id, email);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "Email changed successfully"));
    }

    @PutMapping("/{userId}/changeNickName")
    public ResponseEntity<?> changeNickName (@PathVariable Long id,
                                             @RequestParam @Valid @NotBlank(message = "NickName cannot be empty")
                                             @Size(min = 2, max = 18, message = "NickName must be between 2 and 18 characters") String nickName)
    {
        service.changeNickName(id, nickName);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "NickName changed successfully"));
    }

    @PutMapping("/{userId}/changeDescription")
    public ResponseEntity<?> changeDescription (@PathVariable Long id,
                                                @RequestParam @Valid @Size(max = 500) String description)
    {
        service.changeDescription(id, description);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "Description changed successfully"));
    }

    @PutMapping("/{userId}/changePassword")
    public ResponseEntity<?> changePassword (@PathVariable Long id,
                                             @RequestParam @Valid @Size(min = 8, message = "password must be between 8 characters") String password)
    {
        service.changePassword(id, password);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "Description changed successfully"));
    }

    @PutMapping("/{userId}/changeAvatar")
    public ResponseEntity<?> changeAvatar (@PathVariable Long id,
                                           @RequestParam MultipartFile file)
    {
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(Map.of("message", "Avatar changed successfully"));
    }
}