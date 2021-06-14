package design.boilerplate.springboot.service;

import design.boilerplate.springboot.dto.BlockDto;
import design.boilerplate.springboot.mappers.BlockMapper;
import design.boilerplate.springboot.repository.BlockRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
@AllArgsConstructor
public class BlockService {
    private final BlockRepository repository;

    public List<BlockDto> getAll() {
        return BlockMapper.INSTANCE.mapToBlockDto(repository.findAll());
    }

    public BlockDto get(Long id) {
        return BlockMapper.INSTANCE.convertToBlockDto(repository.getOne(id));
    }

    public BlockDto add(BlockDto BlockDto) {
        repository.save(BlockMapper.INSTANCE.convertToBlock(BlockDto));
        return BlockDto;
    }

    public BlockDto update(Long id, BlockDto BlockDto) {
        repository.save(BlockMapper.INSTANCE.convertToBlock(BlockDto));
        return BlockDto;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
