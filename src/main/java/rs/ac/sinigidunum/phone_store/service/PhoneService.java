package rs.ac.sinigidunum.phone_store.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.sinigidunum.phone_store.entity.Phone;
import rs.ac.sinigidunum.phone_store.model.PhoneModel;
import rs.ac.sinigidunum.phone_store.repository.PhoneRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PhoneService {
    private final PhoneRepository repository;

    public List<Phone> getAllPhones() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Phone> getPhoneById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Phone createPhone(Phone phone) {
        phone.setId(null);
        return repository.save(phone);
    }

    public Phone updatePhone(Integer id, PhoneModel model) {
        Phone phone = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        phone.setName(model.getName());
        phone.setScreen(model.getScreen());
        phone.setCpu(model.getCpu());
        phone.setBattery(model.getBattery());
        phone.setImg(model.getImg());
        phone.setPrice(model.getPrice());
        phone.setUpdatedAt(LocalDateTime.now());
        return repository.save(phone);
    }

    public void deletePhone(Integer id) {
        Phone phone = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        phone.setDeletedAt(LocalDateTime.now());
        repository.save(phone);
    }
}
