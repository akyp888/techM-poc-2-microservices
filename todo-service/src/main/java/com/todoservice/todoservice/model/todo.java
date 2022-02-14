package com.todoservice.todoservice.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "todo")
@JsonFormat
public class todo {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String Task;
    @Lob
    private String Description;
}