<template>
  <div> 
    <div>
      <form class="form-group">
        <input type="text" v-model="url"/>
        <button @click.prevent="encodeLink">Encode</button>
        <button @click.prevent="decodeLink">Decode</button>
      </form>
    </div>
    <div id="result">
      <h2>ลิงก์ที่เเปลงเเล้ว</h2>
      <p id="showURL">{{ ProcessedUrl }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EncodeDecode',
  data(){
    return {
      input: '',
      ProcessedUrl: '',
    }
  },
   methods:{
    encodeLink(){
      this.ProcessedUrl = encodeURIComponent(this.url);
    },
    decodeLink(){
      this.ProcessedUrl = decodeURIComponent(this.url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
