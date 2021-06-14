package design.boilerplate.springboot.controller;

import design.boilerplate.springboot.dto.SlotDto;
import design.boilerplate.springboot.service.SlotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/slots")
public class SlotController {
    private final SlotService service;

    @GetMapping("/")
    public ResponseEntity<List<SlotDto>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SlotDto> get(@PathVariable Long id) {

        return ResponseEntity.ok(service.get(id));
    }

    @PostMapping("")
    public ResponseEntity<SlotDto> add(@Valid @RequestBody SlotDto slotDto) {

        return ResponseEntity.ok(service.add(slotDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SlotDto> update(@Valid @RequestBody SlotDto slotDto, @PathVariable Long id) {

        return ResponseEntity.ok(service.update(id, slotDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
