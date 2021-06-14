package design.boilerplate.springboot.service;

import design.boilerplate.springboot.dto.SlotDto;
import design.boilerplate.springboot.mappers.SlotMapper;

import design.boilerplate.springboot.repository.SlotRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class SlotService {
    private final SlotRepository repository;

    public List<SlotDto> getAll() {
        return SlotMapper.INSTANCE.mapToSlotDto(repository.findAll());
    }

    public SlotDto get(Long id) {
        return SlotMapper.INSTANCE.convertToSlotDto(repository.getOne(id));
    }

    public SlotDto add(SlotDto slotDto) {
        repository.save(SlotMapper.INSTANCE.convertToSlot(slotDto));
        return slotDto;
    }

    public SlotDto update(Long id, SlotDto slotDto) {
        repository.save(SlotMapper.INSTANCE.convertToSlot(slotDto));
        return slotDto;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
