let API = 'https://restcountries.com/v3.1/all?fields=name,flags'


let count = document.getElementById('flag')
let inp = document.getElementById('inp')



fetch(API)
.then((item)=>{
    const data = item.json()
    return data
})
.then((data)=>{
    data.forEach(item => {    
        console.log(item);
            
       count.innerHTML += 

       `
    <div class="col">
      
         <img src="${item.flags.png}" alt="">
        <p>${item.name.common}</p>
    
        
    </div>`
    });
    
})
.catch((err)=>{
    console.log(err);
    
})

inp.addEventListener('input',()=>{
    const inpval = inp.value.toLowerCase();
    const col = document.querySelectorAll('.col')
    
    col.forEach((i)=>{
     
        if(
    
            i.lastElementChild.textContent.toLowerCase().includes(inpval)
        ){
            i.classList.remove('hidden')
        }else{
           i.classList.add('hidden')
    
        }
        
    })
          
})

