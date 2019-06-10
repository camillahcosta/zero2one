package com.desafio.tarefa.controller;

import com.desafio.tarefa.model.Tarefa;
import com.desafio.tarefa.repository.TarefasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/tarefas")

public class TarefasController {
    @Autowired
     private TarefasRepository repository;

    @GetMapping
    public List<Tarefa> get(@RequestParam(required = false, value = "name") String name){
        if (name != null){
            return repository.findAllByName(name);
        }
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Tarefa getById(@PathVariable("id") String id){
        return repository.findById(id).orElse(null);

    }
    @PostMapping
    public Tarefa create(@RequestBody Tarefa tarefa){
        return repository.save(tarefa);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id){
        repository.deleteById(id);
    }
}
