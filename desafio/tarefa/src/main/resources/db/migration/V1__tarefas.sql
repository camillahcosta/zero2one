CREATE TABLE tarefas (
    tarefa_id varchar(36) NOT NULL,
    tarefa_name VARCHAR(255) NOT NULL,
    tarefa_status BOOLEAN,
    PRIMARY KEY (tarefa_id)
);