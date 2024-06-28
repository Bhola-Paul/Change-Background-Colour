const but=document.querySelectorAll('.c');
    const b=document.querySelector('body')
    but.forEach(function(val){
        val.addEventListener('click',function(e){
                b.style.backgroundColor=e.target.id
        })
    })