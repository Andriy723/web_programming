package ua.lviv.iot.algo.part1.fileManager;


import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.CSVWriter;
import lombok.Getter;
import ua.lviv.iot.algo.part1.model.Trolleybus;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@Getter
public class TrolleybusWriter {
    private final String directory;

    public TrolleybusWriter(final String path) {
        directory = path;
    }

    public void writeAutomobile(final Trolleybus trolleybus) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd_MM_yy");
        Date date = new Date();
        String file = directory + "TrolleybusesDB" + File.separator
                + "trolleybus_" + dateFormat.format(date) + ".csv";
        boolean exists = new File(file).exists();
        try (CSVWriter writer = new CSVWriter(new OutputStreamWriter(
                new FileOutputStream(file, true),
                StandardCharsets.UTF_8))) {
            if (!exists) {
                writer.writeNext(trolleybus.getHeaders().split(";"));
            }
            writer.writeNext(trolleybus.toCSV().split(";"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void savingLastId(final int id) {
        try (CSVWriter writer = new CSVWriter(new OutputStreamWriter(
                new FileOutputStream(directory + "TrolleybusesDB"
                        + File.separator + "id.txt", false),
                StandardCharsets.UTF_8))) {
            writer.writeNext(String.valueOf(id).split(","));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public int getLastId() {
        try (CSVReader csvReader = new CSVReaderBuilder(new InputStreamReader(
                new FileInputStream(directory
                        + "TrolleybusesDB" + File.separator + "id.txt"),
                StandardCharsets.UTF_8)).build()) {
            List<String[]> allData = csvReader.readAll();
            return Integer.parseInt(allData.get(0)[0]);
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }

    public HashMap<Integer, Trolleybus> readEntries(
            final String file) {
        HashMap<Integer, Trolleybus> data = new HashMap<>();
        try (CSVReader csvReader = new CSVReaderBuilder(new InputStreamReader(
                new FileInputStream(file), StandardCharsets.UTF_8))
                .withSkipLines(1).build()) {
            List<String[]> allData = csvReader.readAll();
            for (String[] row : allData) {
                data.put(Integer.parseInt(row[0]), new Trolleybus(row));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return data;
    }

    public List<String> getFilesFromDirectory() {
        File folder = new File(directory + "TrolleybusesDB" + File.separator);
        String[] fileNames = folder.list();
        assert fileNames != null : "no files was found";
        List<String> files = new LinkedList<>();
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM_yy");
        Date date = new Date();
        String pattern = "trolleybus_" + "\\d{2}"
                + "_" + dateFormat.format(date) + ".csv";
        for (String file : fileNames) {
            if (file.matches(pattern)) {
                files.add(file);
            }
        }
        return files;
    }

    public HashMap<Integer, Trolleybus> getAllEntries() {
        HashMap<Integer, Trolleybus> finalMap = new HashMap<>();
        for (String file : getFilesFromDirectory()) {
            HashMap<Integer, Trolleybus> tmpMap = readEntries(
                    directory + "TrolleybusesDB" + File.separator + file);
            finalMap.putAll(tmpMap);
        }
        return finalMap;
    }

    public String findId(final int id) {
        String idLocation = null;
        for (String file : getFilesFromDirectory()) {
            HashMap<Integer, Trolleybus> tmpMap = readEntries(
                    directory + "TrolleybusesDB" + File.separator + file);
            if (tmpMap.containsKey(id)) {
                idLocation = file;
                break;
            }
        }
        return idLocation;
    }

    public void rewriteFile(final String fullPath,
                            final HashMap<Integer, Trolleybus> data) {
        try {
            File file = new File(fullPath);
            boolean res = file.delete();
            assert res : "file was not deleted";
        } catch (Exception e) {
            e.printStackTrace();
        }
        try (CSVWriter writer = new CSVWriter(new OutputStreamWriter(
                new FileOutputStream(fullPath, true),
                StandardCharsets.UTF_8))) {
            Trolleybus auto = new Trolleybus();
            writer.writeNext(auto.getHeaders().split(";"));
            for (Trolleybus trolleybus : data.values()) {
                writer.writeNext(trolleybus.toCSV().split(";"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteEntry(final int id) {
        String fileName = findId(id);
        String fullPath = directory + "TrolleybusesDB" + File.separator
                + fileName;
        HashMap<Integer, Trolleybus> tmpMap = readEntries(fullPath);
        tmpMap.remove(id);
        rewriteFile(fullPath, tmpMap);
    }

    public void modifyEntry(final int id,
                            final Trolleybus newStadium) {
        String fileName = findId(id);
        String fullPath = directory + "TrolleybusesDB"
                + File.separator + fileName;
        HashMap<Integer, Trolleybus> tmpMap = readEntries(fullPath);
        tmpMap.put(id, newStadium);
        rewriteFile(fullPath, tmpMap);
    }
}
