package rs.ac.sinigidunum.phone_store.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.sinigidunum.phone_store.entity.Phone;
import rs.ac.sinigidunum.phone_store.model.PhoneModel;
import rs.ac.sinigidunum.phone_store.service.PhoneService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/phone")
@RequiredArgsConstructor
@CrossOrigin
public class PhoneController {
    private final PhoneService service;

    @GetMapping
    public List<Phone> getAllPhones() {
        return service.getAllPhones();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Phone> getPhoneById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getPhoneById(id));
    }

    @PostMapping
    public Phone createPhone(@RequestBody Phone phone) {
        return service.createPhone(phone);
    }

    @PutMapping(path = "/{id}")
    public Phone updatePhone(@PathVariable Integer id, @RequestBody PhoneModel phone) {
        return service.updatePhone(id, phone);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletePhone(@PathVariable Integer id) {
        service.deletePhone(id);
    }
}
