<template>
<div class="portfolio" :class="{ 'voir': voir}">
<div class="load-page"  :class="{ 'load-none': loadnone}">
<p></p>
</div>
  <div class="scrollbar" :class="{ 'scroll': scroll}"></div>
    <div class="clickScrollbar" :class="{ 'scroll': scroll}"></div>
<div class="page"  :class="{ 'indexpage': pageindex, 'pagebig': pagebig,'pagebigh': pagebigh, 'nn': nn} ">
<div class="acceuil">
<header>
    <div class="logo"><img src="./assets/logo.svg" alt=""></div>
    <nav>
      <a href="#projets">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
<div class="nom">
<h1 :class="{'div-anim': divanim}">MAMADOU SYLLA<span>Devellopeur web</span></h1>
<div class="info-nom" >
 <a href="https://github.com/mamad0u" :class="{'div-anim2': divanim2}" target="_blank">
  <img src="./assets/github.webp" alt=""  >
 </a>
 <a href="https://twitter.com/sylla_dev"  :class="{'div-anim3': divanim3}" target="_blank">
  <img src="./assets/twitter.webp" alt="" >
 </a>
 <a href="https://www.linkedin.com/in/mamadou-sylla-44655b1bb/" :class="{'div-anim3': divanim4}" target="_blank">
  <img src="./assets/linkedin.webp" alt=""  >
 </a>
</div>
</div>
<div class="logo-anim">
  <img src="./assets/logo.svg" alt="">
</div>
</div>
 <div class="info" data-aos="fade-left">
  <div class="info-img">
  <img src="./assets/mamadou.webp" alt=""  data-speed="10" >
  </div>
  <div class="info-txt">
<b><p>Mamadou Sylla, etudiant a Digital Campus. Développeur et intégrateur sur Bordeaux. Sérieux sociable j’adore réaliser de belle choses je serais ravis de participer a la réalisation de vos projets.</p></b>
  </div>

</div>
<!--
  data-aos="fade-left" data-aos-delay="400" data-aos-duration="600"
  :class="{'animproject': animproject}" v-on:click="clickproject()">
-->
<div id="projets">
<h2  data-aos="fade-up" data-aos-delay="600"  data-aos-duration="600">Projets</h2>
<div class="projets" v-for="(projet) in projets"  :key='projet'>
<div class="projet left"   data-aos="fade-left" data-aos-delay="300" data-aos-duration="700" :style="{ 'background-color': projet.couleur }" >
  <div class="top">
 <p class="titre-projet" data-aos="fade-up" data-aos-delay="800" data-aos-duration="600"> {{ projet.titre }}</p>
 <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="600"> {{ projet.client }}</p>
  </div>
  <div   class="mid"  v-on:click="clickproject(projet)">
  <img  class="imgproject" v-bind:src="projet.src" alt="img">
  <p v-show="projet.animproject" >{{ projet.description }} </p>
  </div> 
  <div class="bottom">
  <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="600"> {{ projet.techno }}</p>
 <a v-bind:href="projet.link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600"> <img src="./assets/github.webp" alt=""></a>
  </div>
  </div>
</div>
</div>
<div id="contact">
<h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Contact</h3>
<div class="txt-contact">
  <div class="">
    <b><p data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">Une idée de projet?</p></b>
<b><p data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">Contactez moi!</p></b>
  </div>
<p class="mail" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">mamadousylla.dev@gmail.com</p>
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
        divanim2:false,
        divanim3:false,
        divanim4:false,
        nn:false,
        loadPage:{
            message1:"Create PortFolio_Mamadou_Sylla", 
      },
      projets:[
        {
          src:  require("./assets/symfony.webp"),
          alt: "Image 1",
          titre:"Symfony",
          description:"Projet app web de musique permettant d'écouter des musiques et des albums ajoutés par des utilisateurs grace a un CRUD",
          link:"https://github.com/carlos-v278/player-symfony",
          techno:"symfony",
          client:"Fictif",
          couleur:"#0E402D",
          voirimg:true,
          voirdesc:false,
          animproject:false,
        },
        {
          src:  require("./assets/boulangerie.webp"),
          alt: "Image 1",
          titre:"La boulangerie",
          description:"Projet de refonte d'un site existant sur WordPress en créen un thème WordPress ",
          link:"https://github.com/mamad0u/la-boulangerie-theme",
          techno:"WordPress",
          client:"Fictif",
          couleur:"#A38560",
          voirimg:true,
          voirdesc:false,
          animproject: false,
        },
        {
          src:  require("./assets/quizy.webp"),
          alt: "Image 1",
          titre:"Quizy",
          description:"Projet création d'un quiz pour des classes de collège en histoire et en géographie avec vue js  ",
          link:"https://github.com/mamad0u/quiz-vue-js-front",
          techno:"Vuejs",
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
      },
 
       
		},
    mounted() {
    
        document.addEventListener("mousemove", parallax);
               function parallax(e){
                  const media700 = window.matchMedia("(min-width: 700px)")

      if(media700.matches){
          document.querySelectorAll(".info-img img").forEach(function(move){
            var moving_value = move.getAttribute("data-speed");
            var x = (e.clientX * moving_value) / -250;
            var y = (e.clientY * moving_value) / -250;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
          });
        }}
      
 
      

   const title = document.querySelector('p');
const txt = this.loadPage.message1
function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 160);
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 350);
setTimeout(() => {
    this.nn = true
}, 1000);
setTimeout(() => {
   this.pageindex = true
}, 6800);
setTimeout(() => {
   this.voir = true
   this.scroll = true
}, 7800);
setTimeout(() => {
   this.divanim = true
}, 8100);
setTimeout(() => {
   this.divanim2 = true
}, 8300);
setTimeout(() => {
 this.divanim3 = true
}, 8500);
setTimeout(() => {
   this.divanim4 = true
}, 8700);
  }
	}
</script>
<style>
@import './assets/style.css';
</style>