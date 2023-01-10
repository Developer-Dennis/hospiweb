<template>
  <div class="departments">
    <img :src="neurology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left; padding-left: 50px;">Neurology</button>

  
    <img :src="cardiology"  v-if='showImage1' style="height:300px;"/>
    <button @click="toggleImage1" style="text-align:left; padding-left: 50px;">Cardiology</button>

    <h1></h1>
    <img :src="orthopaedic"  v-if='showImage2' style="height:300px;"/>
    <button @click="toggleImage2" style="text-align:left; padding-left: 50px;">Orthopaedic</button>

    <img :src="pediatric"  v-if='showImage3' style="height:300px;"/>
    <button @click="toggleImage3" style="text-align:left; padding-left: 50px;">Pediatric</button>

    <img :src=" ophalmology"  v-if='showImage4' style="height:300px;"/>
    <button @click="toggleImage4" style="text-align:left; padding-left: 50px;">Ophalmology</button>

  
    <img :src=" maternalcare"  v-if='showImage5' style="height:300px;"/>
    <button @click="toggleImage5"  style="text-align:left; padding-left: 50px;">Maternal care</button>

    
    <img :src="radiology"  v-if='showImage6' style="height:300px;"/>
    <button @click="toggleImage6" style="text-align:left;padding-left: 50px;">Radiology</button>

    
    <img :src="dental"  v-if='showImage7' style="height:300px;"/>
    <button @click="toggleImage7" style="text-align:left;padding-left: 50px;" >Dental Care</button>

    
    <img :src="lab"  v-if='showImage8' style="height:300px;"/>
    <button @click="toggleImage8" style="text-align:left;padding-left: 50px;">Labaratory</button>


    
    <img :src="pharmacy"  v-if='showImage9' style="height:300px;"/>
    <button @click="toggleImage9" style="text-align:left;padding-left: 50px;">Pharmacy</button>

    
    <img :src="oncology"  v-if='showImage10' style="height:300px;"/>
    <button @click="toggleImage10" style="text-align:left;padding-left: 50px;">Oncology</button>

    
    <img :src="family"  v-if='showImage11' style="height:300px;"/>
    <button @click="toggleImage11" style="text-align:left;padding-left: 50px;">Family Planning</button>

    
    <img :src="icu"  v-if='showImage12' style="height:300px;"/>
    <button @click="toggleImage12" style="text-align:left;padding-left: 50px;">Critical Care</button>

    
    <img :src="ent"  v-if='showImage13' style="height:300px;"/>
    <button @click="toggleImage13" style="text-align:left;padding-left: 50px;">Ear Nose &Throat care</button>

    
    <img :src="gynaecology"  v-if='showImage14' style="height:300px;"/>
    <button @click="toggleImage14" style="text-align:left;padding-left: 50px;">Gynaecology & Reproductive Health Care </button>


    
    <img :src="physiotherapy"  v-if='showImage15' style="height:300px;"/>
    <button @click="toggleImage15" style="text-align:left;padding-left: 50px;">Physiotherapy Services </button>


    
    <img :src="Mentalhealth"  v-if='showImage16' style="height:300px;"/>
    <button @click="toggleImage16" style="text-align:left;padding-left: 50px;">Psychiatry Services ( Mental Health)</button>


    
    <img :src="generalsurgery"  v-if='showImage17' style="height:300px;"/>
    <button @click="toggleImage17"  style="text-align:left;padding-left: 50px; ">General Surgery</button>


    
    <img :src="departments2"  v-if='showImage18' style="height:300px;"/>
    <button @click="toggleImage18" style="text-align:left;padding-left: 50px;">Funeral Home servies</button>
  </div>



  
 
</template>
    
<script>
export default {
    name: 'Department',
    data(){
      return{    
        showImage: true,  
        showImage1: true,
        showImage2: true,  
        showImage3: true,
        showImage4: true,   
        showImage5: true,   
        showImage6: true, 
        showImage7: true,
        showImage8: true, 
        showImage9: true,  
        showImage10: true,
        showImage11: true,
        showImage12: true, 
        showImage13: true, 
        showImage14: true, 
        showImage15: true,   
        showImage16: true,   
        showImage17: true, 
        showImage18: true,        
        neurology: './img/neuralogy.jpg',
        cardiology:  './img/cardiology.jpg',
        orthopaedic:  './img/orthopaedic.jpg',
        pediatric:     './img/pediatric.jpg',
        ophalmology:     './img/ophalmology.png',
        maternalcare:     './img/maternalcare.jpg',
        radiology:        './img/radiology.png',
        dental:           './img/dental.jpg',
        lab:            './img/lab.jpg',
        pharmacy:       './img/pharmacy.png',
        oncology:       './img/oncology.png',
        family:         './img/family.png',
        icu:             './img/icu.png',
        ent:           './img/ent.jpg',
        gynaecology:    './img/gynaecology.jpg',
        physiotherapy:    './img/physiotherapy.png',
        Mentalhealth:    './img/Mental-health.jpg',
        generalsurgery:    './img/generalsurgery.jpg',
        departments2:     './img/departments2.jpg',
      }
    },
    methods: {
        toggleImage: function () {
            this.showImage = !this.showImage;
        },
        toggleImage1: function () {
            this.showImage1 = !this.showImage1;
        },
        toggleImage2: function () {
            this.showImage2 = !this.showImage2;
        },
        toggleImage3: function () {
            this.showImage3 = !this.showImage3;
        },
        toggleImage4: function () {
            this.showImage4 = !this.showImage4;
        },
        toggleImage5: function () {
            this.showImage5 = !this.showImage5;
        },
        toggleImage6: function () {
            this.showImage6 = !this.showImage6;
        },
        toggleImage7: function () {
            this.showImage7 = !this.showImage7;
        },
        toggleImage8: function () {
            this.showImage8 = !this.showImage8;
        },
        toggleImage9: function () {
            this.showImage9 = !this.showImage9;
        },
        toggleImage10: function () {
            this.showImage10 = !this.showImage10;
        },
      
        toggleImage11: function () {
            this.showImage11 = !this.showImage11;
        },
        toggleImage12: function () {
            this.showImage12 = !this.showImage12;
        },
        toggleImage13: function () {
            this.showImage13 = !this.showImage13;
        },
        toggleImage14: function () {
            this.showImage14 = !this.showImage14;
        },
        toggleImage15: function () {
            this.showImage15 = !this.showImage15;
        },
        toggleImage16: function () {
            this.showImage16 = !this.showImage16;
        },
        toggleImage17: function () {
            this.showImage17 = !this.showImage17;
        },
        toggleImage18: function () {
            this.showImage18 = !this.showImage18;
        },
    },
    components:{
     
    }
}
</script>

<style>
    .departments{
      padding-right : 50px;
      background-color:#f2f2f2;
    }
    .departments img{
      display: flex;
      align-items: right;
      display: block;
    }
    .departments h1{
      text-align: left;
    }
    button{
      width: 100%;
      height: 50px;
    }
</style>