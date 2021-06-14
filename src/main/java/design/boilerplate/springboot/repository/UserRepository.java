package design.boilerplate.springboot.repository;

import design.boilerplate.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 *
 * @author Vladislav Baluk
 */
public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);

	boolean existsByEmail(String email);

	boolean existsByUsername(String username);

}
