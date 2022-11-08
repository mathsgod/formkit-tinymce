<script setup>
import { ref } from "vue"
let data = ref(
  { tinymce1: "hello world!" }
);


</script>

<template>
  <div>
    <FormKit type="form" v-model="data">
      <FormKit type="tinymce" name="tinymce1" label="tinymce" :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
                                             alignleft aligncenter alignright alignjustify | \
                                             bullist numlist outdent indent | removeformat | help'
      }" />
    </FormKit>

    {{ data }}


    <button @click="data.tinymce1 = 'This is a testing'">button</button>
  </div>

</template>