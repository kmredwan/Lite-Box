const imges=document.querySelectorAll(".imge")
const Popup=document.querySelector(".popup")
const PopupImg=document.querySelector(".popup img")
const PopupClose=document.querySelector(".popup a")
const backDrop=document.querySelector(".backdrop")


imges.forEach((imge ,index) =>{

    imge.addEventListener("click", (e)=>{
        Popup.classList.add("active")
        backDrop.classList.add('active')
        

        PopupImg.setAttribute('src', e.target.src)

    })

})

PopupClose.addEventListener('click' ,(e)=>{

    Popup.classList.remove("active")
    backDrop.classList.remove('active')
})