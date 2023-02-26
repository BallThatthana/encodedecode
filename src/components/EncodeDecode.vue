<template>
  <div> 
    <div>
      <form class="form-group">
        <textarea v-model="url" rows="6" cols="100" type="text" placeholder="ใส่ลิงก์ที่ช่องนี้"></textarea>
        <br>
        <button class="btn" @click.prevent="encodeLink">Encode</button>
        <button class="btn" @click.prevent="decodeLink">Decode</button>
      </form>
    </div>
    <p>โดย <a href="https://ballthatthana.com" target="_blank">Ball Thatthana</a> & <a href="https://converrpage.com" target="_blank">ConverrPage Web-Salepage</a></p>
    <!-- <div id="result">
      <h2>ลิงก์ที่เเปลงเเล้ว</h2>
      <textarea v-model="ProcessedUrl" rows="6" cols="100"></textarea>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'EncodeDecode',
  data(){
    return {
      url:''
    }
  },
   methods:{
    encodeLink(){
      this.url = encodeURIComponent(this.url);
    },
    decodeLink(){
      this.url = decodeURIComponent(this.url);
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
