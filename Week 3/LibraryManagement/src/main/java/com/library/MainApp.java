package com.library;

import java.util.Arrays;
import java.util.List;

public class MainApp {
    public static void main(String[] args) {
        List<String> books = Arrays.asList("A", "B", "C");
        books.forEach(System.out::println);
    }
}
