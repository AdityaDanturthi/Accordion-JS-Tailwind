// Variable

let acc = document.getElementsByClassName('question');
let i;

for (i=0; i<acc.length;i++){
        acc[i].addEventListener('click', function(){
                let answer = this.nextElementSibling;
                if(answer.style.display === 'block'){
                        answer.style.display='none';
                } else {
                        answer.style.display = 'block';
                }
        });
}
