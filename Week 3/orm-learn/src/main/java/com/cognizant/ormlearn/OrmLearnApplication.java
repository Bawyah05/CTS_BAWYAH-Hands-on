//package com.cognizant.ormlearn;
//
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.ApplicationContext;
//
//import com.cognizant.ormlearn.model.Country;
//import com.cognizant.ormlearn.service.CountryService;
//
//@SpringBootApplication
//public class OrmLearnApplication {
//
//    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
//
//    private static CountryService countryService;
//
//    public static void main(String[] args) {
//        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
//        countryService = context.getBean(CountryService.class);
//
//        testGetAllCountries();
//    }
//
//    private static void testGetAllCountries() {
//        LOGGER.info("Start");
//        List<Country> countries = countryService.getAllCountries();
//        for (Country country : countries) {
//            System.out.println(country); // print to terminal
//        }
//        LOGGER.info("End");
//    }
//
//}
//

package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee emp1 = new Employee();
        emp1.setName("John Doe");
        emp1.setSalary(60000.0);
        employeeService.addEmployee(emp1);

        Employee emp2 = new Employee();
        emp2.setName("Jane Smith");
        emp2.setSalary(75000.0);
        employeeService.addEmployee(emp2);

        System.out.println("All Employees:");
        employeeService.printAllEmployees();
    }
}
