document.addEventListener('DOMContentLoaded', () => {
    carregarPets();

    const formulario = document.getElementById('petForm');
    formulario.addEventListener('submit', cadastrarPet);

    // Lógica para fechar a janelinha
    const modal = document.getElementById('petModal');
    const spanClose = document.querySelector('.close-btn');
    spanClose.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }
});

async function carregarPets() {
    try {
        const resposta = await fetch('http://localhost:8080/api/pets');
        const pets = await resposta.json();
        exibirPets(pets);
    } catch (erro) {
        console.error('Erro ao carregar pets:', erro);
    }
}

function exibirPets(pets) {
    const container = document.getElementById('petsContainer');
    container.innerHTML = '';

    if (pets.length === 0) return;

    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        // Aqui dizemos que ao clicar no card, abre a função do modal
        card.onclick = () => abrirModal(pet);

        const imagem = pet.urlImagem ? pet.urlImagem : 'https://via.placeholder.com/300x200?text=Sem+Foto';
        
        let entregaHtml = pet.fazEntrega 
            ? `<p>🚗 <strong>Entrega:</strong> Sim (até ${pet.distanciaEntregaKm}km)</p>` 
            : `<p>🚗 <strong>Entrega:</strong> Não faz entrega</p>`;

        card.innerHTML = `
            <img src="${imagem}" alt="Foto de ${pet.nome}">
            <div class="pet-info">
                <h3>${pet.nome}</h3>
                <div class="pet-tags">
                    <span>${pet.especie}</span>
                    <span>${pet.idade} ano(s)</span>
                    <span>${pet.tamanho}</span>
                </div>
                <p class="pet-desc"><strong>Resumo:</strong> ${pet.descricaoCurta}</p>
                <div class="pet-contact">
                    <p>📍 <strong>Cidade:</strong> ${pet.cidade}</p>
                    ${entregaHtml}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function abrirModal(pet) {
    const modal = document.getElementById('petModal');
    const modalBody = document.getElementById('modalBody');
    const imagem = pet.urlImagem ? pet.urlImagem : 'https://via.placeholder.com/600x400?text=Sem+Foto';
    
    let entregaHtml = pet.fazEntrega 
        ? `<p>🚗 <strong>Entrega:</strong> Sim (até ${pet.distanciaEntregaKm}km)</p>` 
        : `<p>🚗 <strong>Entrega:</strong> Não faz entrega</p>`;

    modalBody.innerHTML = `
        <div class="modal-body">
            <img src="${imagem}" alt="Foto de ${pet.nome}">
            <h2 style="border-bottom:none; margin-bottom: 0.5rem;">${pet.nome}</h2>
            <div class="pet-tags">
                <span>${pet.especie}</span>
                <span>${pet.raca || 'SRD'}</span>
                <span>${pet.idade} ano(s)</span>
                <span>${pet.sexo}</span>
                <span>${pet.tamanho}</span>
            </div>
            <p>📍 <strong>Cidade:</strong> ${pet.cidade}</p>
            ${entregaHtml}
            <p>📞 <strong>Contato:</strong> ${pet.contato}</p>
            
            <div class="modal-historia">
                <h3 style="color:#ff7e67; margin-bottom:10px;">A História de ${pet.nome}</h3>
                <p>${pet.historia || 'Ainda não temos a história completa desse animalzinho.'}</p>
            </div>

            <!-- Botão de Adotado -->
            <button onclick="adotarPet(${pet.id})" style="background-color: #28a745; margin-top: 20px; width: 100%;">🎉 Marcar como Adotado!</button>
        </div>
    `;
    modal.style.display = "block";
}


async function adotarPet(id) {
    if(confirm("Que notícia maravilhosa! Confirmar a adoção e retirar do site?")) {
        try {
            await fetch(`http://localhost:8080/api/pets/${id}`, { method: 'DELETE' });
            document.getElementById('petModal').style.display = "none";
            alert("Pet adotado com sucesso! 🎉");
            carregarPets(); // Atualiza a tela
        } catch (erro) {
            alert("Erro ao tentar atualizar o status do pet.");
        }
    }
}
    
    let entregaHtml = pet.fazEntrega 
        ? `<p>🚗 <strong>Entrega:</strong> Sim (até ${pet.distanciaEntregaKm}km)</p>` 
        : `<p>🚗 <strong>Entrega:</strong> Não faz entrega</p>`;

    modalBody.innerHTML = `
        <div class="modal-body">
            <img src="${imagem}" alt="Foto de ${pet.nome}">
            <h2 style="border-bottom:none; margin-bottom: 0.5rem;">${pet.nome}</h2>
            <div class="pet-tags">
                <span>${pet.especie}</span>
                <span>${pet.raca || 'SRD'}</span>
                <span>${pet.idade} ano(s)</span>
                <span>${pet.sexo}</span>
                <span>${pet.tamanho}</span>
            </div>
            <p>📍 <strong>Cidade:</strong> ${pet.cidade}</p>
            ${entregaHtml}
            <p>📞 <strong>Contato:</strong> ${pet.contato}</p>
            
            <div class="modal-historia">
                <h3 style="color:#ff7e67; margin-bottom:10px;">A História de ${pet.nome}</h3>
                <p>${pet.historia || 'Ainda não temos a história completa desse animalzinho.'}</p>
            </div>
        </div>
    `;
    modal.style.display = "block";


async function cadastrarPet(evento) {
    evento.preventDefault(); 
    
    const novoPet = {
        nome: document.getElementById('nome').value,
        especie: document.getElementById('especie').value,
        raca: document.getElementById('raca').value,
        idade: parseInt(document.getElementById('idade').value),
        sexo: document.getElementById('sexo').value,
        tamanho: document.getElementById('tamanho').value,
        descricaoCurta: document.getElementById('descricaoCurta').value,
        historia: document.getElementById('historia').value,
        urlImagem: document.getElementById('urlImagem').value,
        contato: document.getElementById('contato').value,
        cidade: document.getElementById('cidade').value,
        fazEntrega: document.getElementById('fazEntrega').checked,
        distanciaEntregaKm: parseInt(document.getElementById('distanciaEntregaKm').value) || 0
    };

    try {
        const resposta = await fetch('http://localhost:8080/api/pets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoPet)
        });

        if (resposta.ok) {
            alert('Pet cadastrado com sucesso!');
            document.getElementById('petForm').reset();
            carregarPets(); 
        } else alert('Erro ao cadastrar o pet.');
    } catch (erro) {
        alert('Erro de conexão com o servidor.');
    }
}