// Variable

let acc = document.getElementsByClassName('question');
let i;
let symbol = document.querySelectorAll('i');
console.log('Symbol', symbol.length);

for (i=0; i<acc.length;i++){
        let currentSymbol =symbol[i];
        acc[i].addEventListener('click', function(){
                let answer = this.nextElementSibling;
                if(answer.style.display === 'block'){
                        answer.style.display='none';
                        currentSymbol.classList.remove('fa-minus');
                        currentSymbol.classList.add('fa-plus');
                        
                } else {
                        answer.style.display = 'block';
                        currentSymbol.classList.add('fa-minus');
                        currentSymbol.classList.remove('fa-plus');
                }
        });
}
