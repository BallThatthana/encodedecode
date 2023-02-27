<template>
  <div> 
    <div>
      <form class="form-group">
        <textarea id="url" v-model="url" rows="6" cols="50" class="block p-2.5 w-2/3 sm:w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Url ของคุณ"></textarea>
        <br>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2" @click.prevent="encodeLink">Encode</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click.prevent="decodeLink">Decode</button>
      </form>
    </div>
    <div class="container">
      <p class="mt-4">โดย <a href="https://ballthatthana.com" target="_blank" class="text-blue-500 font-bold">Ball Thatthana</a></p>
      <p class="mt-4">สนับสนุนโดย <a href="https://converrpage.com" target="_blank" class="text-blue-500 font-bold">ConverrPage Web-Salepage</a></p>
    </div> 
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
<style >

</style>
