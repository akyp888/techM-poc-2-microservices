package com.todoservice.todoservice.gateway;

import com.todoservice.todoservice.model.todo;
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
            log.info("Preloading " + repo.save(todo.builder().id(1).Task("Learn Spring Cloud").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(todo.builder().id(2).Task("Practice Spring Cloud").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(todo.builder().id(3).Task("Do A POC").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(todo.builder().id(4).Task("Get It Verified").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
            log.info("Preloading " + repo.save(todo.builder().id(5).Task("Do Necessary Changes").Description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,").build()));
        };
    }
}