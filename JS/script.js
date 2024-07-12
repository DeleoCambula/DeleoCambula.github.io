

function changeHeaderBackground() {
   let header = document.getElementById('header')
   let ancora =document.getElementById('ancora')
   let ancora1 =document.getElementById('ancora-1')
   let ancora2 =document.getElementById('ancora-2')
   let ancora3 =document.getElementById('ancora-3')
   let ancora0 =document.getElementById('ancora-0')
   let logo = document.getElementById('Icone-logo')
     

      if(window.scrollY > 200 && innerWidth >= 920){
         header.style.backgroundColor = 'white'
         header.classList.add('menuAparece')
         header.style.boxShadow = "0px 16px 9px -4px rgba(181,181,181,0.29)"
         logo.src = "./img/logo-p.png"
         ancora.style.color = 'black'
         ancora0.style.color = 'black'
         ancora1.style.color = 'black'
         ancora2.style.color = 'black'
         ancora3.style.color = 'black'
         header.style.color = 'black' 
         
      } else if (window.scrollY > 100 && innerWidth < 920) {
         header.style.backgroundColor = 'white'
         header.style.boxShadow = "0px 16px 9px -4px rgba(181,181,181,0.29)"
         logo.src = "./img/logo-p.png"
         header.classList.add('menuAparece')
         ancora.style.color = 'black'
         ancora0.style.color = 'black'
         ancora1.style.color = 'black'
         ancora2.style.color = 'black'
         ancora3.style.color = 'black'
         header.style.color = 'black' 
      }else{
         header.style.backgroundColor = 'transparent' 
         header.classList.remove('menuAparece')
         logo.src = "./img/logo-b.png"
         ancora.style.color = 'white'
         ancora0.style.color = 'white'
         ancora1.style.color = 'white'
         ancora2.style.color = 'white'
         ancora3.style.color = 'white'
         header.style.color = 'white'
         header.style.boxShadow = ""
      }  

      
}


function mudarSeta(){
   let seta = document.getElementById('fa-arrow')

   if(window.innerWidth <= 800){
      seta.src = "./img/seta-para-baixo.png"
   }else if(window.innerWidth > 800){
      seta.src = "./img/seta-direita.png"
   }
}

function ShowSideBar(){
   let sidebar = document.getElementById('menu-mobile')

   sidebar.style.right = '0'
   
}

function CloseSideBar(){
   let sidebar = document.getElementById('menu-mobile')

   sidebar.style.right = '-300px'
   
   
}

