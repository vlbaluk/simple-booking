package design.boilerplate.springboot.controller;

import design.boilerplate.springboot.dto.BlockDto;
import design.boilerplate.springboot.service.BlockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blocks")
public class BlockController {

    private final BlockService service;

    @GetMapping("/")
    public ResponseEntity<List<BlockDto>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlockDto> get(@PathVariable Long id) {

        return ResponseEntity.ok(service.get(id));
    }

    @PostMapping("")
    public ResponseEntity<BlockDto> add(@Valid @RequestBody BlockDto blockDto) {

        return ResponseEntity.ok(service.add(blockDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlockDto> update(@Valid @RequestBody BlockDto blockDto, @PathVariable Long id) {

        return ResponseEntity.ok(service.update(id, blockDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
