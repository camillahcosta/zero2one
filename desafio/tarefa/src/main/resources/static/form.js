let botaoConcluidos = document.querySelector("#listar-concluidos");



function obtemTarefaDoFormulario(form) {
    let tarefa = {
        nome: form.querySelector('.nome').textContent,
        status: form.querySelector('.status input').checked
    }
    verificarCheckBox(tarefa);
}

function verificarCheckBox(tarefa) {
    //console.log(tarefa.status);
    if (tarefa.status == true){ 
           
        ListaConcluidoTabela(tarefa);
    }  else {
        console.log('no');
    }
}

function atualizaTarefas() {
    //let lista = document.querySelector(".tb-tarefas");
    
    const url = '/tarefas';

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'fff',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.json().then(res => {
            // console.log(res);
            res.forEach(addTarefaTela);

            // document.querySelectorAll(".img-del").forEach(deletarProduto);
        }));
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
}



function criaDadoTabela(item) {
  
    let tableTr = document.createElement("tr");
    tableTr.classList.add("tb-tr");

    let tdnome = document.createElement("td");

    tdnome.classList.add("nome");

    tableTr.appendChild(tdnome);
    tdnome.textContent = item.name;

    let tdstatus = document.createElement("td");
    tdstatus.classList.add("status");

    let status = document.createElement("INPUT");
    status.setAttribute("type", "checkbox");
    status.check = item.status;
    status.classList.add("status");

    tdstatus.appendChild(status);    
    

    tableTr.appendChild(tdstatus);

    return tableTr;
}

function ListaConcluidoTabela(tarefa) {

    // Cria conteudo
    let tableTr = document.createElement("tr");
    tableTr.classList.add("tb-tr");

    let tdnome = document.createElement("td");

    tdnome.classList.add("nome");

    tableTr.appendChild(tdnome);
    tdnome.textContent = tarefa.nome;

    let tdstatus = document.createElement("td");

    let status = document.createElement("INPUT");
    
    status.setAttribute("type", "checkbox");
    status.checked = tarefa.status;
    status.classList.add("status");

    tdstatus.appendChild(status);

    tableTr.appendChild(tdstatus);

    let tabela = document.querySelector(".novatable");
    tabela.appendChild(tableTr);
    return tableTr;
}

function addTarefaTela(item) {
    //console.log("addtarefa");

    let itemTb = criaDadoTabela(item);
    let tabela = document.querySelector(".tb-tarefas");
    tabela.appendChild(itemTb);
}

function limparEventosHoje(tarefa){
    let table = document.querySelector(".novatable");
 
    if (tarefa !== undefined) {
        table.removeChild(tarefa);
    }
 
 }

botaoConcluidos.addEventListener("click", function (){
    console.log('teste');
    event.preventDefault();
    document.querySelectorAll(".novatable .tb-tr").forEach(limparEventosHoje);
  
    let form = document.querySelectorAll(".tb-tr");
    let tarefa = form.forEach(obtemTarefaDoFormulario);

  });

 atualizaTarefas() ;