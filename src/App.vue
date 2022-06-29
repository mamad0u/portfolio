<template>
<div class="portfolio" :class="{ 'voir': voir}">
<div class="load-page"  :class="{ 'load-none': loadnone}">
<p></p>
</div>
  <div class="scrollbar" :class="{ 'scroll': scroll}"></div>
    <div class="clickScrollbar" :class="{ 'scroll': scroll}"></div>
<div class="page"  :class="{ 'indexpage': pageindex, 'pagebig': pagebig,'pagebigh': pagebigh,}">

  
<div class="acceuil">
<header>
    <div class="logo">logo</div>
    <nav>
      <a href="#projets">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
<div class="nom">
  
<h1 :class="{'div-anim': divanim}">Mamadou Sylla <span>Devellopeur web</span> </h1>
</div>
</div>
<!--
 <div class="info" data-aos="fade-left">
  <img src="./assets/logo.png" alt="">
<b><p>Bonjour je m'apelle Mamadou Sylla, etudiant a Digital Campus. Développeur et intégrateur sur Bordeaux. Sérieux sociable j’adore réaliser de belle choses je serais ravis de participer a la réalisation de vos projets.</p></b>
</div>

  data-aos="fade-left" data-aos-delay="400" data-aos-duration="600"
  :class="{'animproject': animproject}" v-on:click="clickproject()">
-->

<div id="projets">
<h2  data-aos="fade-up" data-aos-delay="600"  data-aos-duration="600">Projets</h2>

<div class="projets" v-for="(projet) in projets"  :key='projet'>

<div class="projet left"   data-aos="fade-left" :style="{ 'background-color': projet.couleur }" >
  <div class="top">
 <p class="titre-projet" data-aos="fade-up" data-aos-delay="800" data-aos-duration="600"> {{ projet.titre }}</p>
 <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="600"> {{ projet.client }}</p>

  </div>
  <div   class="mid"  v-on:click="clickproject(projet)">
  <img  class="imgproject" v-bind:src="projet.src" alt="img">
  <p v-show="projet.animproject" >{{ projet.description }} </p>
  </div> 
  <div class="bottom">
  <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="600"> {{ projet.techno }}</p>
 <a v-bind:href="projet.link" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600"> <img src="./assets/github.png" alt=""></a>
  </div>
 
  </div>

</div>
</div>
<div id="contact">
<h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Contact</h3>
<div class="txt-contact">
<b><p data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">Une idée de projet?</p></b>
<b><p data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">Contactez moi!</p></b>

</div>


</div>

</div>
</div>


</template>

<script >
export default {


		name: 'mon-alert',
		props: {
			type: String
		},
		data() {
       return{
         pagebig:false,
         pagebigh:false,
         loadnone:false,
        pageindex:false,
        divanim:false,
        voir:false,
        scroll:false,
 

        loadPage:{
            message1:"Create PortFolio_Mamadou_Sylla", 
      },
      projets:[
        {
          src:  require("./assets/symfony.png"),
          alt: "Image 1",
          titre:"Symfony",
          description:"",
          link:"httpsveoiovi",
          techno:"vueJS",
          client:"Fictif",
          couleur:"#0E402D",
          voirimg:true,
          voirdesc:false,
          animproject:false,
        },
        {
          src:  require("./assets/boulangerie.png"),
          alt: "Image 1",
          titre:"Projet1",
          description:"ervpizijvpor",
          link:"httpsveoiovi",
          techno:"Symfony",
          client:"Fictif",
          couleur:"#A38560",
          voirimg:true,
          voirdesc:false,
          animproject: false,
        },
        {
          src:  require("./assets/quizy.png"),
          alt: "Image 1",
          titre:"Projet1",
          description:"ervpizijvpor",
          link:"httpsveoiovi",
          techno:"Html/css",
          client:"Fictif",
          couleur:"#4E8098",
          voirimg:true,
        voirdesc:false,
        animproject: false,

        },
      ]
      
       }
    
		},
		methods: {

    clickproject(projet){
      if(projet.animproject == false){
         projet.animproject = true
      }else{
         projet.animproject = false

      }
      }
		},
    mounted() {


/*////////////////////////////////////////////////////////////////////////////////////*/

const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
 


})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })

})

// pour gérer le resize, vu que la hauteur du site change.
let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});

////////////////////////////////////////////////////////////////////////////////////*
   const title = document.querySelector('p');
const txt = this.loadPage.message1

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 200);
    }
    
}
setTimeout(() => {
    typewriter(txt, 0)
}, 350);
setTimeout(() => {
    
}, 900);

setTimeout(() => {
   this.pageindex = true
}, 10000);

setTimeout(() => {
   this.divanim = true
   this.voir = true
   this.scroll = true
}, 10800);

 
  }

	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body{
    scroll-behavior: auto;
    overflow-y: scroll;
}
::-webkit-scrollbar {
    width: 0;
    background: transparent;
}

.scrollbar {
    position: fixed;
    top: 0;
    right: 0;
    width: 15px;
    height: 0;
    background: rgb(222, 211, 195);
    z-index: 210;
    opacity: 0;
    border-radius: 0px 0px 50px 50px;
    display: none;
}
.clickScrollbar {
    position: fixed;
    top: 0;
    right: 0;
    width: 15px;
    height: 100%;
    background: #222222 ;
    z-index: 200;
    opacity: 0;
  display: none;
}
@keyframes slidein {
  from {
     background-color: #dfd3c3;
  }

  to {
      background-color: #222222;

  }
}

.portfolio{
  position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 overflow-x: hidden;
 overflow-Y: hidden;

}
.load-page{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
    background-color: #dfd3c3;
  height: 100vh;
  width: 100%;
  color:white;
font-family: 'Share Tech Mono', monospace;
transition: transform 1s;
overflow: hidden;
overflow-x: hidden;
overflow-y: hidden;

}
 .load-page p {
    color: #222222;
   display: inline-block;
    position: relative;
    font-size: 20px;
  }
   .load-page p::after {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 3px;
    background: #222222;
    right: -10px;
    top: 0;
    animation: cursor 1s infinite;
  }

  .page{
    width: 100%;
    height: 500vh;
    background-color: #222222;
    position: absolute;
    left: 0;
    top:0;
transform: skewX(35deg);
 transform: translateY(100%);
    transition:  transform .7s;
    overflow: hidden;
  }
  .acceuil{
    display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  }
  .nom{
        display: flex;
    align-items: center;
    height: 100vh;
     width: 90%;
    margin: 0px auto;
  }
  header{
    display: flex;
    width:90%;
    margin: 30px auto;
    justify-content: space-between;
    align-items: center;
    color:#dfd3c3;
  }

  nav{
    display: flex;
  }
  nav a{
    padding: 0 10px;
    text-decoration: none;
    color:#dfd3c3
  }

  h1{
    color: #dfd3c3;
    opacity: 0;
    transform: translate(0px, 30px);
    transition: opacity 1s ,transform 1s, font-syse .5s;
   font-family: 'Montserrat', sans-serif;
    font-size: 7vw;
    line-height: 1.4em;
    font-size: clamp(50px, 7vw, 200px);
    }
    h1 span{
      display: block;
    }
.div-anim{
     opacity: 1;
     transform: translate(0px, -80px);
}
  .indexpage{
  transform: translateY(0%) skewX(0deg);
    display: block;
  }

  .pagebig{
    width: 100%;
    border-radius: 0px;
  }  .pagebigh{
    height: 100%;
  }
  .load-none{
    transform: translateY(-100%);
  }

  .voir{
  overflow: initial;
  }
  .scroll{
    opacity: 1;

  }
.conteneur{
  height: 100vh;
    overscroll-behavior: none;
  width: 600%;
  display: flex;
  flex-wrap: nowrap;


}
  @keyframes cursor {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
  .info{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
   .info p{
     color: #dfd3c3;
     font-size: 25px;
     font-family: 'Montserrat', sans-serif;
     text-align: center;
     margin: 20px 0 200px;
     width: 50%;
   }
.projets {
  width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column ;
}
.projets .projet{
  padding: 40px 30px;
  width:95%;
  margin: 60px auto;
  border-radius: 10px;
  color: #dfd3c3;
  transition: width 1s;
}
.projets.projet:nth-child(2){
  justify-content: end;
}
h2,h3{
  padding: 0 0 20px 0;
  font-size: 80px;
  text-align: center;
  color: #dfd3c3;
   font-family: 'Montserrat', sans-serif;
}
.left{
  left:0
}
.right{
  right: 0;
}
.projet .top,.projet .bottom{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.titre-projet{
  font-size: 24px;
}
.projet .mid{
  height: 300px;
  padding: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: justify-content 1s,display 1s;
  cursor: pointer;
  position: relative;
}
.projet .mid img{
  width: 100px;
  animation: animtel 1.5s linear 0s infinite;
  transition: transform .5s;
}
.projet .mid img:hover{
  transform: scale(1.08);
}

.projet .mid p{
  height: 320px;
  text-align: center;
  display: flex;
  justify-content: center;align-items: center;
  cursor: pointer;
}
.animproject{
  display: contents !important;
}
.animproject2{
  opacity: 1 !important;
}
.projet .bottom img{
   width: 30px;
  cursor: pointer;
}
  @keyframes animtel {
    0%{margin-top:-15px;  }
    50%{ margin-top:15px;  }
    100%{ margin-top:-15px;  }
    }
#contact .txt-contact{
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
}
#contact p{
  font-size: 60px;
  color: #dfd3c3;
  font-family: 'Montserrat', sans-serif;
}

@media all and (min-width:600px){
   .load-page p {
    font-size: 30px;
  }
.projet .mid img{
  width: 120px;
}

.projets .projet{
  padding: 40px 30px;
  width:80%;
  margin: 60px auto;
  border-radius: 10px;
  color: #dfd3c3;
  transition: width 1s;
}
.clickScrollbar,.scrollbar {
 display: block;

}
}
@media all and (min-width:800px){
.projet .mid img{
  width: 150px;
}
}

</style>
