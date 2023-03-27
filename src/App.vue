<script setup>
import { ref } from "vue"
import { reset } from "@formkit/core";
let data = ref(

);

let resetForm = () => {

  reset("myform")

}
let disabled = ref(true);


</script>

<template>
  <div>
    <FormKit type="form" v-model="data" id="myform" >
      <FormKit type="text" name="input1" :disabled="disabled"/>
      <FormKit type="tinymce" name="tinymce1" label="tinymce" :disabled="disabled" :init="{
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

    <button @click="resetForm">reset</button>
    <button @click="disabled = true">Disabled</button>
    <button @click="disabled = false">Enabled</button>
  </div>
</template>