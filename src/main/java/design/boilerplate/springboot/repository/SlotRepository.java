package design.boilerplate.springboot.repository;

import design.boilerplate.springboot.model.Slot;
import design.boilerplate.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

/**
 *
 *
 * @author Vladislav Baluk
 */
public interface SlotRepository extends JpaRepository<Slot, Long> {

	boolean existsByUser(Long id);

}
