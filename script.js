   // Função que é chamada quando a página carrega
        function incrementarValor() {
            // Pega o valor salvo no localStorage ou define como 0 se não existir
            let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;

            // Adiciona 300 ao total
            total += 300;

            // Salva o novo total no localStorage
            localStorage.setItem('total', total);

            // Formata o total para exibir com pontos entre os milhares
            let totalFormatado = total.toLocaleString('pt-BR');

            // Exibe o valor atualizado e formatado no HTML
            document.getElementById('total').innerText = totalFormatado;
        }

        // Chama a função quando a página é carregada
        window.onload = incrementarValor;
    
        
        