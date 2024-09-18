package rs.ac.sinigidunum.phone_store.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class PhoneModel {
    private String name;
    private String screen;
    private String cpu;
    private String battery;
    private String img;
    private double price;
}
