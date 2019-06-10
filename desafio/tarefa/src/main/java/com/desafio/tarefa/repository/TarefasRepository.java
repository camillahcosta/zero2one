package com.desafio.tarefa.repository;

import com.desafio.tarefa.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefasRepository extends JpaRepository<Tarefa, String> {
    List<Tarefa> findAllByName(String name);
}
