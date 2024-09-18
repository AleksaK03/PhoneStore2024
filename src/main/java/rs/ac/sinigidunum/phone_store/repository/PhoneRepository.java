package rs.ac.sinigidunum.phone_store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.sinigidunum.phone_store.entity.Phone;

import java.util.List;
import java.util.Optional;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, Integer>{
    List<Phone> findAllByDeletedAtIsNull();

    Optional<Phone> findByIdAndDeletedAtIsNull(Integer id);
}
