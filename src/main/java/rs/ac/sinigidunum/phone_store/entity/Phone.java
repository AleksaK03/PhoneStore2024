package rs.ac.sinigidunum.phone_store.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name = "phone")
@NoArgsConstructor
@Getter
@Setter
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "phone_id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column( nullable = false)
    private String screen;

    @Column( nullable = false)
    private String cpu;

    @Column( nullable = false)
    private String battery;

    @Column( nullable = false)
    private String img;

    @Column(nullable = false)
    private double price;

    private LocalDateTime updatedAt;

    @JsonIgnore
    private LocalDateTime deletedAt;
}
