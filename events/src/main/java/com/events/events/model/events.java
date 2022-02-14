package com.events.events.model;

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
@Table(name = "events")
@JsonFormat
public class events {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String Event;
    private String StartDateTime;
    private String EndDateTime;
    @Lob
    private String Description;
}