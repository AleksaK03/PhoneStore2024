package rs.ac.sinigidunum.phone_store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.sinigidunum.phone_store.entity.Customer;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByDeletedAtIsNull();

    Optional<Customer> findByIdAndDeletedAtIsNull(Integer id);
}
