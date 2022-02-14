package com.todoservice.todoservice.controller;

import com.todoservice.todoservice.gateway.todoRepository;
import com.todoservice.todoservice.model.todo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/")
@AllArgsConstructor
public class todoController {

    private todoRepository todoRepository;

    @GetMapping("todos")
    Iterable<todo> all() {
        return todoRepository.findAll();
    }


    @GetMapping("todos/{id}")
    Optional<todo> single(@PathVariable Integer id){return todoRepository.findById(id);
    }

    @PutMapping("todos")
    todo replacetodo(@RequestBody todo newtodo) {

        return todoRepository.findById(newtodo.getId())
                .map(post -> {
                    post.setTask(newtodo.getTask().isEmpty()?post.getTask(): newtodo.getTask());
                    post.setDescription(newtodo.getDescription().isEmpty()?post.getDescription(): newtodo.getDescription());
                    return todoRepository.save(post);
                })
                .orElseGet(() -> todoRepository.save(newtodo));
    }

    @PostMapping("todos")
    todo newtodo(@RequestBody todo newtodo) {
        return todoRepository.save(newtodo);
    }
    @DeleteMapping("todos/{id}")
    void deletetodo(@PathVariable Integer id){
        todoRepository.deleteById(id);
    }
}
