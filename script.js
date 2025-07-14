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

    // 1. Seleciona o botão "Calcular"
    const calculateButton = document.getElementById('btn-calcular');
    console.log('Botão "Calcular" encontrado:', calculateButton);

    // 2. Adiciona um evento de clique ao botão
    calculateButton.addEventListener('click', () => {
        
        console.log('--- Botão "Calcular" clicado. Iniciando cálculo do pedido. ---');

        let orderItems = []; 
        let totalPrice = 0;  

        // 3. Itera sobre todos os cards de itens novamente para coletar os dados
        itemCards.forEach(card => {
            
            const quantity = parseInt(card.querySelector('.quantity').textContent);

            // 4. Verifica se o item foi selecionado (quantidade > 0)
            if (quantity > 0) {
                
                const itemName = card.querySelector('h3').textContent;
                const itemPriceString = card.querySelector('.price').textContent; 
                const itemPrice = parseFloat(itemPriceString.replace('R$ ', '').replace(',', '.'));

                const subtotal = quantity * itemPrice;

                orderItems.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: quantity,
                    subtotal: subtotal
                });

                console.log(` -> Item adicionado ao pedido: ${itemName} | Qtd: ${quantity} | Preço Unit.: ${itemPrice.toFixed(2)} | Subtotal: ${subtotal.toFixed(2)}`);

                totalPrice += subtotal;
            }
        });

        // 5. Ao final do loop, exibe o resultado final no console
        console.log('--- Resumo do Pedido ---');
        console.log('Itens do Pedido:', orderItems);
        console.log(`Preço Total Calculado: R$ ${totalPrice.toFixed(2)}`);
    });

});