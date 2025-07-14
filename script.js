document.addEventListener('DOMContentLoaded', () => {

    console.log('O DOM foi completamente carregado. O script está sendo executado.');

    // Seleciona todos os cards
    const itemCards = document.querySelectorAll('.item-card');
    console.log('Cards de itens encontrados:', itemCards.length, itemCards);

    // Itera sobre cada card individualmente
    itemCards.forEach((card, index) => {
        
        console.log(`Configurando o card de item nº ${index + 1}`);

        // Encontra os elementos dentro do card atual
        const plusButton = card.querySelector('.btn-plus');
        const minusButton = card.querySelector('.btn-minus');
        const quantitySpan = card.querySelector('.quantity');
        const itemName = card.querySelector('h3').textContent; 

        let currentQuantity = parseInt(quantitySpan.textContent);

        // Adiciona evento de clique para o botão de ADICIONAR
        plusButton.addEventListener('click', () => {
            console.log(`Botão '+' clicado no item: "${itemName}". Quantidade anterior: ${currentQuantity}`);
            currentQuantity++;
            quantitySpan.textContent = currentQuantity;
            console.log(`--> Nova quantidade para "${itemName}": ${currentQuantity}`);
        });

        // Adiciona evento de clique para o botão de DIMINUIR
        minusButton.addEventListener('click', () => {
            console.log(`Botão '-' clicado no item: "${itemName}". Quantidade atual: ${currentQuantity}`);
            
            if (currentQuantity > 0) {
                currentQuantity--;
                quantitySpan.textContent = currentQuantity;
                console.log(`--> Nova quantidade para "${itemName}": ${currentQuantity}`);
            } else {
                console.log(`--> Ação bloqueada: a quantidade para "${itemName}" já é 0.`);
            }
        });
    });

});