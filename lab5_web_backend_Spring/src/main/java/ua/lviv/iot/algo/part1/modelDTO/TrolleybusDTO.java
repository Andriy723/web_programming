package ua.lviv.iot.algo.part1.modelDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TrolleybusDTO {
    private Integer id;

    private String title;
    private String description;
    private int price;
    private String type;
}
