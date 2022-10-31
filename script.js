const pesquisas = document.getElementById('txt1')
const buttonSearch = document.getElementById('buttonSearch')




const caminhosForTips = ['weekly','weekly tips', 'dicas', 'Weekly','Weekly Tips', 'Dicas']

function buscar(){
    if(pesquisas.value == 0){
        alert("[Erro] Preencha o campo corretamente e tente novamente")
    }else {
        if(pesquisas.value == caminhosForTips[0]){
            window.location.href = 'week-tips/tips.html'
        }else {
            if(pesquisas.value == caminhosForTips[1]){
                window.location.href = 'week-tips/tips.html'
            }else {
                if(pesquisas.value == caminhosForTips[2]){
                    window.location.href = 'week-tips/tips.html'
                }else {
                    if(pesquisas.value == caminhosForTips[3]){
                        window.location.href = 'week-tips/tips.html'
                    }else {
                        if(pesquisas.value == caminhosForTips[4]){
                            window.location.href = 'week-tips/tips.html'
                        }else {
                            if(pesquisas.value == caminhosForTips[5]){
                                window.location.href = 'week-tips/tips.html'
                            }
                        }
                    }
                }
            }
        }
    }
}
