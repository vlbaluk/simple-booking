package design.boilerplate.springboot.exceptions;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * @author Vladislav Baluk
 */
@Getter
@RequiredArgsConstructor
public class RegistrationException extends RuntimeException {

    private final String errorMessage;

}
