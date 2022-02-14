package com.events.events.gateway;

import com.events.events.model.events;
import org.springframework.data.repository.CrudRepository;


public interface todoRepository extends CrudRepository<events, Integer> {

}