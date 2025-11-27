const destinos = [
    {
        id: 1, 
        nome: "Lençóis Maranhenses", 
        estado: "MA", 
        estadoNome: "Maranhão", 
        img: "assets/lencois.jpg", 
        desc: "Dunas infinitas e lagoas de água doce."
    },

    {
        id: 2, 
        nome: "Bonito", 
        estado: "MS", 
        estadoNome: "Mato Grosso Do Sul", 
        img: "assets/bonito_ms.jpg", 
        desc: "O centro do ecoturismo no Brasil com águas cristalinas."
    },

    {
        id: 3, 
        nome: "Fernando de Noronha", 
        estado: "PE", 
        estadoNome: "Pernambuco", 
        img: "assets/fernandodenoronha.jpg", 
        desc: "O arquipélago mais famoso e preservado do país."
    },

    {
        id: 4, 
        nome: "Foz do Iguaçu", 
        estado: "PR", 
        estadoNome: "Paraná", 
        img: "assets/cataratas2.jpg", 
        desc: "Uma das 7 maravilhas naturais do mundo."
    },

    {
        id: 5, 
        nome: "Chapada Diamantina", 
        estado: "BA", estadoNome: "Bahia", 
        img: "assets/chapadadiamantina.jpg", 
        desc: "Cachoeiras, grutas e trilhas incríveis."
    },

    {
        id: 6, 
        nome: "Ouro Preto", 
        estado: "MG", 
        estadoNome: "Minas Gerais", 
        img: "assets/ouropreto.jpg", 
        desc: "História viva e arquitetura barroca."
    },

    {
        id: 7, 
        nome: "Jalapão", 
        estado: "TO", 
        estadoNome: "Tocantins", 
        img: "assets/jalapao.jpg", 
        desc: "Fervedouros e dunas douradas no coração do Brasil."
    },

    {
        id: 8, 
        nome: "Amazônia", 
        estado: "AM", 
        estadoNome: "Amazonas", 
        img: "assets/amazonia.jpg", 
        desc: "A maior floresta tropical do mundo."
    },

    {
        id: 9, 
        nome: "Jericoacoara", 
        estado: "CE", 
        estadoNome: "Ceará", 
        img: "assets/jericoacoara.jpg", 
        desc: "Praias paradisíacas e pôr do sol inesquecível."
    },

    {
        id: 10, 
        nome: "Gramado", 
        estado: "RS", 
        estadoNome: "Rio Grande Do Sul", 
        img: "assets/gramado.jpg", 
        desc: "Charme europeu e clima frio na Serra Gaúcha."
    }
];

// carregamento

const containerDestinos = document.getElementById('destinos');

function renderizarDestinos(lista){
    containerDestinos.innerHTML = '';
    
    // pega os favoritos do localstorage
    const favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];

    lista.forEach(local => {
        const isFav = favoritos.includes(local.id);                      // olha se ja esta favoritado
        const btnClass = isFav ? 'btn-fav favoritado' : 'btn-fav';
        const btnText = isFav ? '❤️ Favorito' : '🤍 Favoritar';

        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${local.img}" alt="Foto de ${local.nome}">
            <div class="card-content">
                <span class="card-tag">${local.estado}</span>
                <h3>${local.nome}</h3>
                <p>${local.desc}</p>
                <button class="${btnClass}" onclick="toggleFavorito(${local.id})">
                    ${btnText}
                </button>
            </div>
        `;
        containerDestinos.appendChild(card);
    });
}

renderizarDestinos(destinos);

const inputBusca = document.getElementById('input-busca');

inputBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    
    const filtrados = destinos.filter(destino => 
        destino.nome.toLowerCase().includes(termo) || 
        destino.estado.toLowerCase().includes(termo) ||
        destino.estadoNome.toLowerCase().includes(termo)
    );
    
    renderizarDestinos(filtrados);
});

function toggleFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];
    
    if(favoritos.includes(id)){
        favoritos = favoritos.filter(favId => favId !== id);
    } else{
        favoritos.push(id);
    }
    
    localStorage.setItem('meusFavoritos', JSON.stringify(favoritos));
    
    const termoAtual = inputBusca.value.toLowerCase();
    const listaAtual = destinos.filter(d => d.nome.toLowerCase().includes(termoAtual));
    renderizarDestinos(listaAtual);
}

// formulario
document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    
    if(nome.length < 3) {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso (Simulação).`);
    e.target.reset();
});