const productData = [
    {
        "title": "Intensidade diversas",
        "subtitle": "Trabalhamos com diversos tipos de grãos e intensidades; com certeza um deles vai agradar vocês.",
        "text": "Na nossa cafeteria, a diversidade de grãos e intensidades é um convite para explorar paladares e descobrir o sabor que mais ressoa com vocês. Apreciem a jornada sensorial, pois temos a certeza de que um desses blends irá encantar.",
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "title": "Cuidado e Dedicação na Fazenda de Café",
        "subtitle": "Da Seleção dos Grãos à Colheita: Uma Jornada de Excelência na Agricultura Cafeeira",
        "text": "Na fazenda de café, cada etapa é meticulosamente cuidada para oferecer a mais refinada experiência aos apreciadores. A excelência começa na seleção minuciosa dos grãos, onde apenas os melhores são escolhidos para o plantio.",
        "image": "https://images.unsplash.com/photo-1561742727-74fee4d4de60?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-lg-6 col-md-12';
    
    card.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <h6 class="card-subtitle text-muted mb-3">${product.subtitle}</h6>
                        <p class="card-text">${product.text}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    return card;
}

function renderProductCards(containerId, products) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

renderProductCards('about-container', productData);
