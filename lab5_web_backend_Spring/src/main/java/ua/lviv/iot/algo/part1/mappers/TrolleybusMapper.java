package ua.lviv.iot.algo.part1.mappers;

import org.springframework.stereotype.Component;
import ua.lviv.iot.algo.part1.model.Trolleybus;
import ua.lviv.iot.algo.part1.modelDTO.TrolleybusDTO;
@Component
public class TrolleybusMapper {
    public TrolleybusDTO map(final Trolleybus trolleybus) {
        return new TrolleybusDTO(trolleybus.getId(),
                trolleybus.getTitle(),
                trolleybus.getDescription(),
                trolleybus.getPrice(),
                trolleybus.getType());
    }

    public Trolleybus map(final TrolleybusDTO trolleybusDTO){
        return new Trolleybus(trolleybusDTO.getId(),
                trolleybusDTO.getTitle(),
                trolleybusDTO.getDescription(),
                trolleybusDTO.getPrice(),
                trolleybusDTO.getType());
    }
}
