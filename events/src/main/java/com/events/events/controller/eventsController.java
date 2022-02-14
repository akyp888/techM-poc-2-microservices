package com.events.events.controller;

import com.events.events.gateway.eventsRepository;
import com.events.events.model.events;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/")
@AllArgsConstructor
public class eventsController {

    private eventsRepository eventsRepository;

    @GetMapping("events")
    Iterable<events> all() {
        return eventsRepository.findAll();
    }

    @GetMapping("events/{id}")
    Optional<events> single(@PathVariable Integer id){ return eventsRepository.findById(id);}

    @PutMapping("events")
    events replaceevents(@RequestBody events newevents) {

        return eventsRepository.findById(newevents.getId())
                .map(post -> {
                    post.setEvent(newevents.getEvent().isEmpty()?post.getEvent(): newevents.getEvent());
                    post.setStartDateTime(newevents.getStartDateTime().isEmpty()?post.getStartDateTime(): newevents.getStartDateTime());
                    post.setEndDateTime(newevents.getEndDateTime().isEmpty()?post.getEndDateTime(): newevents.getEndDateTime());
                    post.setDescription(newevents.getDescription().isEmpty()?post.getDescription(): newevents.getDescription());
                    return eventsRepository.save(post);
                })
                .orElseGet(() -> eventsRepository.save(newevents));
    }

    @PostMapping("events")
    events newevent(@RequestBody events newevent) {
        return eventsRepository.save(newevent);
    }
    @DeleteMapping("events/{id}")
    void deleteevent(@PathVariable Integer id){
        eventsRepository.deleteById(id);
    }
}
