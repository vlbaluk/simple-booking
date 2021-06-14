package design.boilerplate.springboot.security.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 *
 *
 * @author Vladislav Baluk
 */
@Getter
@Setter
@AllArgsConstructor
public class LoginResponse {

	private String token;

}
