package rs.ac.sinigidunum.phone_store.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.sinigidunum.phone_store.entity.Purchase;
import rs.ac.sinigidunum.phone_store.repository.PurchaseRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PurchaseService {
    private final PurchaseRepository repository;

    public List<Purchase> getAllPurchases() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Purchase> getPurchaseById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Purchase createPurchase(Purchase purchase) {
        purchase.setId(null);
        return repository.save(purchase);
    }

    public void deletePurchase(Integer id) {
        Purchase purchase = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        purchase.setDeletedAt(LocalDateTime.now());
        repository.save(purchase);
    }
}
