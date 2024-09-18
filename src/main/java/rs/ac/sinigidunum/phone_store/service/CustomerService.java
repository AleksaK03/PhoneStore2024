package rs.ac.sinigidunum.phone_store.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.sinigidunum.phone_store.entity.Customer;
import rs.ac.sinigidunum.phone_store.model.CustomerModel;
import rs.ac.sinigidunum.phone_store.repository.CustomerRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class CustomerService {
    private final CustomerRepository repository;

    public List<Customer> getAllCustomers() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Customer> getCustomerById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Customer createCustomer(Customer customer) {
        customer.setId(null);
        return repository.save(customer);
    }

    public Customer updateCustomer(Integer id, CustomerModel model) {
        Customer user = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        user.setFirstName(model.getFirstName());
        user.setLastName(model.getLastName());
        user.setEmail(model.getEmail());
        user.setUpdatedAt(LocalDateTime.now());
        return repository.save(user);
    }

    public void deletedCustomer(Integer id) {
        Customer customer = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        customer.setDeletedAt(LocalDateTime.now());
        repository.save(customer);
    }
}
