<template>
  <div class="departments">
    <img :src="neurology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Neurology</button>

  
    <img :src="cardiology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Cardiology</button>

    <h1></h1>
    <img :src="orthopaedic"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Orthopaedic</button>

    <img :src="pediatric"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Pediatric</button>

    <img :src=" ophalmology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Ophalmology</button>

  
    <img :src=" maternalcare"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage"  style="text-align:left;">Maternal care</button>

    
    <img :src="radiology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Radiology</button>

    
    <img :src="dental"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;" >Dental Care</button>

    
  <h1></h1>
    <img :src="lab"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Labaratory</button>


    
    <img :src="pharmacy"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Pharmacy</button>

    
    <img :src="oncology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Oncology</button>

    
    <img :src="family"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Family Planning</button>

    
    <img :src="icu"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Critical Care</button>

    
    <img :src="ent"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Ear Nose &Throat care</button>

    
    <img :src="gynaecology"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Gynaecology & Reproductive Health Care </button>


    
    <img :src="physiotherapy"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Physiotherapy Services </button>


    
    <img :src="Mentalhealth"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Psychiatry Services ( Mental Health)</button>


    
    <img :src="generalsurgery"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage"  style="text-align:left;">General Surgery</button>


    
    <img :src="departments2"  v-if='showImage' style="height:300px;"/>
    <button @click="toggleImage" style="text-align:left;">Funeral Home servies</button>
  </div>



  
 
</template>
    
<script>
export default {
    name: 'Department',
    data(){
      return{    
        showImage: true,                              
        neurology: './img/neuralogy.jpg',
        cardiology:  './img/cardiology.jpg',
        orthopaedic:  './img/orthopaedic',
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
    }
</style>