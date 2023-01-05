<template>
  <div class="departments">
    <h1>Neurology</h1>
    <img :src="img" style="height:300px;"/>
  </div>
</template>
    
<script>
export default {
    name: 'Department',
    data(){
      return{                                    
        img: './img/neuralogy.jpg',
      }
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
</style>