package design.boilerplate.springboot.mappers;

import design.boilerplate.springboot.dto.BlockDto;
import design.boilerplate.springboot.dto.SlotDto;
import design.boilerplate.springboot.model.Block;
import design.boilerplate.springboot.model.Slot;
import design.boilerplate.springboot.model.User;
import design.boilerplate.springboot.security.dto.AuthenticatedUserDto;
import design.boilerplate.springboot.security.dto.RegistrationRequest;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * @author Vladislav Baluk
 */
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SlotMapper {

    SlotMapper INSTANCE = Mappers.getMapper(SlotMapper.class);

    SlotDto convertToSlotDto(Slot slot);
    List<SlotDto> mapToSlotDto(List<Slot> slots);


    Slot convertToSlot(SlotDto slotDto);

}
