package rs.ac.sinigidunum.phone_store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.sinigidunum.phone_store.entity.Purchase;

import java.util.List;
import java.util.Optional;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {
    List<Purchase> findAllByDeletedAtIsNull();

    Optional<Purchase> findByIdAndDeletedAtIsNull(Integer id);
}
