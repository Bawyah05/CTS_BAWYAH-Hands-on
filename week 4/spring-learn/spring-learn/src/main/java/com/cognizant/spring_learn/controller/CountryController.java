//package com.cognizant.spring_learn.controller;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.cognizant.spring_learn.model.Country;
//
//@RestController
//public class CountryController {
//
//    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
//
//    @RequestMapping("/country")
//    public Country getCountryIndia() {
//        LOGGER.info("START");
//        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
//            Country country = context.getBean("country", Country.class);
//            LOGGER.info("END");
//            return country;
//        }
//    }
//}
package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START getCountry");
        Country country = countryService.getCountry(code);
        LOGGER.debug("Country: {}", country);
        LOGGER.info("END getCountry");
        return country;
    }
}
