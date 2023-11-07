function num(data){
    var val1 = 0;
    for(let i = 1; i<data; i++){
        if(data%i == 0){
            val1 +=1;
        }
    }
    if(val1==1){
        return 'red';
    }
    if(data%2 == 0){
        return 'green';
    }
    if(data%2 == 1){
        return 'yellow';
    }
}
    function valueGenerate(limit){
    let val = 0;
    var last = document.querySelector('.last')
    last.innerHTML = '';
    for(let i=0; i<limit/9; i++){
        const tags = document.createElement('h1');
        tags.style.width = '800px';
        tags.style.position = 'relative';
        tags.style.display = 'flex';
        tags.style.marginBottom = '0px';
        tags.style.left = '25%';
        tags.style.marginTop = '0px';
        last.appendChild(tags);
        for(let j=val; j<val+9; j++){
            const tags_child = document.createElement('div');
            tags_child.style.width = '100px';
            tags_child.style.height = '40px';
            tags_child.style.margin = '3px';
            tags_child.style.textAlign = 'center';
            tags_child.style.backgroundColor = num(j);
            tags_child.textContent = j;
            tags.appendChild(tags_child);
            if(j==limit){
                break;
            }
        }
        val = val+9;
    }
}
valueGenerate(50);
const Number = () => {
    const num = document.querySelector('.numbersEnter');
    const para = document.querySelector('.para')
    const val = num.value;
    if(val == ''){
        para.textContent='Field is required'
        para.style.color = 'red'
    }else if(isNaN(val) ){
        para.textContent = 'Input value must be a number'
        para.style.color = 'red'
    }else{
        valueGenerate(val);
    }
}