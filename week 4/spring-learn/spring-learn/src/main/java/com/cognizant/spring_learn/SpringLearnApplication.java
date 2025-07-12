//package com.cognizant.spring_learn;
//
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
//import com.cognizant.spring_learn.model.Country;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
//
//public class SpringLearnApplication {
//
//    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);
//
//    public static void main(String[] args) throws ParseException {
//        LOGGER.info("START");
//        displayDate();
//        displayCountry();
//        LOGGER.info("END");
//    }
//
//    public static void displayDate() throws ParseException {
//        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml")) {
//            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
//            String dateString = "31/12/2018";
//            Date date = format.parse(dateString);
//            System.out.println("Parsed Date: " + date);
//        }
//    }
//
//    public static void displayCountry() {
//        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
//            Country country = context.getBean("country", Country.class);
//            System.out.println("Country: " + country);  // ✅ Console output
//        }
//    }
//}
package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  
public class SpringLearnApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
    }
}
