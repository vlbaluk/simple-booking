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
public interface BlockMapper {

    BlockMapper INSTANCE = Mappers.getMapper(BlockMapper.class);

    BlockDto convertToBlockDto(Block block);
    List<BlockDto> mapToBlockDto(List<Block> block);

    Block convertToBlock(BlockDto blockDto);
}
