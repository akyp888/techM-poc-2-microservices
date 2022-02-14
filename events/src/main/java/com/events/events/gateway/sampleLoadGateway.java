package com.events.events.gateway;

import com.events.events.model.events;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
@AllArgsConstructor
public class sampleLoadGateway {

    private static final Logger log = LoggerFactory.getLogger(sampleLoadGateway.class);


    @Bean
    CommandLineRunner initDatabase(todoRepository repo) {

        return args -> {
            log.info("Preloading " + repo.save(events.builder().id(1).Event("Learn Spring Cloud").StartDateTime("Jan 10,2022").EndDateTime("Feb 10,2022").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(events.builder().id(2).Event("Practice Spring Cloud").StartDateTime("Jan 10,2022").EndDateTime("Feb 10,2022").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(events.builder().id(3).Event("Do A POC").StartDateTime("Jan 10,2022").EndDateTime("Feb 10,2022").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(events.builder().id(4).Event("Get It Verified").StartDateTime("Jan 10,2022").EndDateTime("Feb 10,2022").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(events.builder().id(5).Event("Do Necessary Changes").StartDateTime("Jan 10,2022").EndDateTime("Feb 10,2022").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
        };
    }
}