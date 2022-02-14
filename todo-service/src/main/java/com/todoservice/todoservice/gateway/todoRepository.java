package com.todoservice.todoservice.gateway;

import org.springframework.data.repository.CrudRepository;

import com.todoservice.todoservice.model.todo;


public interface todoRepository extends CrudRepository<todo, Integer> {

}