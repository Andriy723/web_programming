package ua.lviv.iot.algo.part1.model;

import lombok.*;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Trolleybus {
    public static final String HEADERS =
            "id; title; description; price;type";
    private Integer id;

    private String title;
    private String description;
    private int price;
    private String type;

    public String getHeaders() {
        return HEADERS;
    }

    public String toCSV() {
        return getId() + ";"
                + getTitle() + ";"
                +getDescription()+";"
                +getPrice() +";"
                +getType();
    }

    public Trolleybus(final String[] data) {
        id = Integer.parseInt(data[0]);
        title = data[1];
        description = data[2];
        price = Integer.parseInt(data[3]);
        type = data[4];
    }
}
