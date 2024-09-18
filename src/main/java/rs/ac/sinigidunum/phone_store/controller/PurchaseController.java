package rs.ac.sinigidunum.phone_store.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.sinigidunum.phone_store.entity.Purchase;
import rs.ac.sinigidunum.phone_store.service.PurchaseService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/purchase")
@RequiredArgsConstructor
@CrossOrigin
public class PurchaseController {
    private final PurchaseService service;

    @GetMapping
    public List<Purchase> getAllPurchases() {
        return service.getAllPurchases();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Purchase> getPurchaseById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getPurchaseById(id));
    }

    @PostMapping
    public Purchase createPurchase(@RequestBody Purchase purchase) {
        return service.createPurchase(purchase);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletePurchase(@PathVariable Integer id) {
        service.deletePurchase(id);
    }
}
