let outerdiv = document.querySelector(".outer-div")
let innerdiv = document.querySelector(".inner-div")
let access = document.querySelector('.access')
let hdn = document.querySelectorAll(".hidden")
let hdn2 = document.querySelectorAll(".hidden2")
let hdn3 = document.querySelectorAll(".hidden3")


outerdiv.addEventListener("mouseenter",()=>{
    innerdiv.classList.remove("div-left-end")
    innerdiv.classList.add("div-right-end")
})
outerdiv.addEventListener("mouseleave",()=>{
    innerdiv.classList.remove("div-right-end")
    innerdiv.classList.add("div-left-end")
})
outerdiv.addEventListener("mouseenter",()=>{
    access.classList.remove("access-left-end")
    access.classList.add("access-right-end")
})
outerdiv.addEventListener("mouseleave",()=>{
    access.classList.remove("access-right-end")
    access.classList.add("access-left-end")
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add("show") 
        }else{
            entry.target.classList.remove("show") 
        }
    })
       
})
hdn.forEach((el)=>{
    observer.observe(el)
})
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add("show2") 
        }else{
            entry.target.classList.remove("show2") 
        }
    })
       
})
hdn2.forEach((el)=>{
    observer2.observe(el)
})
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add("show3") 
        }else{
            entry.target.classList.remove("show3") 
        }
    })
       
})
hdn3.forEach((el)=>{
    observer3.observe(el)
})
