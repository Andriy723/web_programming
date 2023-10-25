package ua.lviv.iot.algo.part1.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.algo.part1.fileManager.TrolleybusWriter;
import ua.lviv.iot.algo.part1.model.Trolleybus;

import javax.annotation.PreDestroy;
import java.io.File;
import java.util.Collection;
import java.util.HashMap;

import java.util.concurrent.atomic.AtomicInteger;

@Service
public class TrolleybusService {

    private final TrolleybusWriter trolleybusWriter = new TrolleybusWriter(
            "src" + File.separator
                    + "main" + File.separator
                    + "resources" + File.separator);

    private HashMap<Integer, Trolleybus> trolleybuses
            = trolleybusWriter.getAllEntries();

    private AtomicInteger lastId
            = new AtomicInteger(trolleybusWriter.getLastId());

    public Trolleybus deleteTrolleybus(final int id) {
        trolleybusWriter.deleteEntry(id);
        return trolleybuses.remove(id);
    }

    public void replaceTrolleybus(final Trolleybus trolleybus, final int id) {
        trolleybus.setId(id);
        trolleybusWriter.modifyEntry(id, trolleybus);
        trolleybuses.put(id, trolleybus);
    }

    public Trolleybus addTrolleybus(final Trolleybus trolleybus) {
        trolleybus.setId(lastId.incrementAndGet());
        trolleybusWriter.writeAutomobile(trolleybus);
        trolleybuses.put(trolleybus.getId(), trolleybus);
        return trolleybus;
    }

    public Collection<Trolleybus> giveAll() {
        return trolleybuses.values();
    }

    public Trolleybus giveTrolleybus(final int id) {
        return trolleybuses.get(id);
    }

    public boolean hasTrolleybusWith(final int id) {
        return trolleybuses.containsKey(id);
    }

    @PreDestroy
    public void onApplicationShutdown() {
        trolleybusWriter.savingLastId(lastId.intValue());
    }
}