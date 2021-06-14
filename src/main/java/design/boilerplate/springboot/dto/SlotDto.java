package design.boilerplate.springboot.dto;

import design.boilerplate.springboot.model.Block;
import design.boilerplate.springboot.model.User;
import design.boilerplate.springboot.model.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

/**
 * @author Vladislav Baluk
 */
@Getter
@Setter
@NoArgsConstructor
public class SlotDto {

    private Long id;

    @NotNull
    private LocalDate start;

    @NotNull
    private LocalDate end;
}
