<template>
  <div class="mt-6 bg-white shadow-md rounded-lg p-6">
    <form class="space-y-4">
      <textarea 
        id="url" 
        v-model="url" 
        rows="6" 
        class="block w-full p-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Your URL"
      ></textarea>
      <div class="flex flex-col sm:flex-row justify-center space-x-2">
        <select v-model="encodingType" class="bg-gray-100 rounded-lg p-2 mb-2">
          <option value="utf8">UTF-8</option>
          <option value="base64">Base64 (Image)</option>
        </select>
        <button 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:px-4 my-2 rounded-full" 
          @click.prevent="encodeLink"
        >
          Encode
        </button>
        <button 
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 sm:px-4 my-2 rounded-full" 
          @click.prevent="decodeLink"
        >
          Decode
        </button>
      </div>
    </form>
    <div class="mt-6 text-center">
      <p>By <a href="https://bonthatthana.netlify.app" target="_blank" class="text-blue-500 font-bold">Bon Thatthana</a></p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'EncodeDecode',
  data() {
    return {
      url: '',
      encodingType: 'utf8' // default encoding type
    }
  },
  methods: {
    encodeLink() {
      if (this.url.length === 0) {
        alert('Please type in the URL first');
      } else {
        if (this.encodingType === 'utf8') {
          this.url = encodeURIComponent(this.url);
        } else if (this.encodingType === 'base64') {
          this.url = btoa(this.url);
        }
      }
    },
    decodeLink() {
      if (this.url.length === 0) {
        alert('Please type in the URL first');
      } else {
        if (this.encodingType === 'utf8') {
          this.url = decodeURIComponent(this.url);
        } else if (this.encodingType === 'base64') {
          try {
            this.url = atob(this.url);
          } catch (e) {
            alert('Invalid Base64 string');
          }
        }
      }
    }
  }
}
</script>
