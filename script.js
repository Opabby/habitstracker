const form = document.querySelector('#form-habits');
//variável para iniciar a biblioteca
const nlwSetup = new NLWSetup(form);

const data = {
    run: ["01-01", "01-02", "01-06"],
}

nlwSetup.setData(data);
nlwSetup.load();
