const form = document.querySelector("#boletim");
const resumo = document.querySelector("#saida");
let contador = 0;
let contadorAprovados = 0;
let contadorReprovados = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const idade = document.querySelector("#idade").value;
  const turma = document.querySelector("#turma").value;
  const nota1 = Number(document.querySelector("#n1").value);
  const nota2 = Number(document.querySelector("#n2").value);
  const totalAlunos = document.querySelector("#total");
  const aprovados = document.querySelector("#aprovados");
  const reprovados = document.querySelector("#reprovados");

  if (!nome) {
    form.nome.focus();
    resumo.textContent = "Por favor, insira o nome do aluno.";
    return;
  }
  if (!idade) {
    form.idade.focus();
    resumo.textContent = "Por favor, insira a idade do aluno.";
    return;
  }

  if (!turma) {
    form.turma.focus();
    resumo.textContent = "Por favor, insira a turma do aluno.";
    return;
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    resumo.textContent =
      "Notas inválidas. Por favor, insira notas entre 0 e 10.";
    form.n1.focus();
    return;
  }

  let media = (nota1 + nota2) / 2;
  let situacao;

  if (media >= 7) {
    situacao = "Aprovado";
    contadorAprovados++;
    aprovados.textContent = "Total de Aprovados: " + contadorAprovados;
  } else {
    situacao = "Reprovado";
    contadorReprovados++;
    reprovados.textContent = "Total de Reprovados: " + contadorReprovados;
  }

  const lista = document.querySelector("#lista");

  const item = document.createElement("li");
  item.textContent =
    "Nome: " +
    nome +
    " | Idade: " +
    idade +
    " | Turma: " +
    turma +
    " | Nota 1: " +
    nota1 +
    " | Nota 2: " +
    nota2 +
    " | Média: " +
    media +
    " | Situação: " +
    situacao;

  contador++;
  totalAlunos.textContent = "Total de Alunos: " + contador;

  lista.appendChild(item);
  lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      lista.removeChild(event.target);
      contador--;
      totalAlunos.textContent = "Total de Alunos: " + contador;
    }
    if (item.situacao.value === "Aprovado") {
      contadorAprovados--;
      aprovados.textContent = "Total de Aprovados: " + contadorAprovados;
    }
  });
});
