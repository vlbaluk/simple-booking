package design.boilerplate.springboot.dto;

import design.boilerplate.springboot.model.Slot;
import design.boilerplate.springboot.model.User;
import design.boilerplate.springboot.model.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

/**
 * @author Vladislav Baluk
 */
@Getter
@Setter
@NoArgsConstructor
public class BlockDto {

    private Long id;

    private List<SlotDto> slots;

    private Long start;

    private LocalDate end;

    private LocalDate date;

}
