<template>
    <div class="text-center p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-4">Encode/Decode URL IMAGE Tool</h1>
      <p>Decode URL easily (that weird URL with special characters!) and vice versa.</p>
      <p>Ypu an encode and decode using UTF-8 or Base64 (Image) format.</p>
      <EncodeDecode></EncodeDecode>
      <div class="bg-gray-300 mt-4 py-4">
        <p class="font-bold mt-4 p-4 text-left">How To Use</p>
        <ul class="list-disc mb-4 ml-6 text-left">
            <li>Paste the copied URL in the search box</li>
            <li>Select the desired encoding format (UTF-8 or Base64 (Image))</li>
            <li>Click Decode or Encode</li>
        </ul>
      </div>
      <div class="mt-4">
        <p class="font-bold">Examples:</p>
        <div class="mt-2">
          <span class="font-bold">UTF-8 Encoding:</span>
          <p class="break-all">https%3A%2F%2Fexample.com%3Fquery%3DHello%20World!</p>
          <p> <span class="font-bold">After decoding:</span> https://example.com?query=Hello World!</p>
        </div>
        <div class="mt-2">
          <span class="font-bold">Base64 Encoding:</span>
          <p class="break-all">aHR0cHM6Ly9leGFtcGxlLmNvbT9xdWVyeT1IZWxsbyBXb3JsZCE=</p>
          <p><span class="font-bold">After decoding:</span> https://example.com?query=Hello World!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EncodeDecode from './EncodeDecode.vue';

  export default {
    name: 'Main',
    components: {EncodeDecode}
  }
  </script>
