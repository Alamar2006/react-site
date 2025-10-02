package app.vx.wicreatebackend.repositories;

import app.vx.wicreatebackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT user FROM User user where user.nickName = :nickName")
    List<User> findByNickName(@Param("nickName") String nickName);
}
