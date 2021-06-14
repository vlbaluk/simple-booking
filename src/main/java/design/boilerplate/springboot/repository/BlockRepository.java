package design.boilerplate.springboot.repository;

import design.boilerplate.springboot.model.Block;
import design.boilerplate.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 *
 * @author Vladislav Baluk
 */
public interface BlockRepository extends JpaRepository<Block, Long> {

	User findByUser(Long id);

}
