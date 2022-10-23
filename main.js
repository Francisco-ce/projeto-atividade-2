const form = document.getElementById('form-id');
const clienteExiste = [];
const telefoneExiste = [];
let Aslinhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();


});


//Área das funções//

function adicionalinha() {
    const inputNomedoCliente = document.getElementById('nome-cliente');
    const inputTelefonedoCliente = document.getElementById('numero-cliente');

    if ((clienteExiste.includes(inputNomedoCliente.value))||(telefoneExiste.includes(inputTelefonedoCliente.value))) {
        alert(`Cliente ${inputNomedoCliente.value} ou ${inputTelefonedoCliente.value} já cadastrado`);
    } else {

        clienteExiste.push(inputNomedoCliente.value);
        telefoneExiste.push(inputTelefonedoCliente.value);


        let linha = '<tr>';
        linha += `<td>${inputNomedoCliente.value}</td>`;
        linha += `<td>${inputTelefonedoCliente.value}</td>`;
        linha += '</tr>';

        Aslinhas += linha;
    }

    inputNomedoCliente.value = '';
    inputTelefonedoCliente.value = '';
}

function atualizaTabela() {
    const corpodaTabela = document.querySelector('tbody');
    corpodaTabela.innerHTML = Aslinhas;
}
