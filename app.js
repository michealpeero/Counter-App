const body=document.body
const increase= document.querySelector('.increase')
const decrease= document.querySelector('.decrease')
const reset=document.querySelector('.reset')
const paragrapgh=document.querySelector('.text')
let counter =0

let kuchData=localStorage.getItem('counter')
if(kuchData!=null){
counter=parseInt(kuchData)
paragrapgh.textContent=counter
color()

}

    increase.addEventListener('click',(e)=>{
    counter ++
    paragrapgh.textContent=counter
    color()
    localStorage.setItem('counter', counter)
   
          
  })




decrease.addEventListener('click',(e)=>{
    counter--
    paragrapgh.textContent=counter
   color()
   localStorage.setItem('counter', counter)
})


reset.addEventListener('click',(e)=>{
    counter=0
    paragrapgh.textContent=0
    color()
     localStorage.setItem('counter', counter)
})

function color(){
    if(counter==0){
        body.style.backgroundColor='white'
    }
    else if(counter>0){
        body.style.backgroundColor='green'
    }
    else {
        body.style.backgroundColor='red'
    }
}