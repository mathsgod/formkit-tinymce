<script setup>
import { ref, watch } from "vue"
import editor from '@tinymce/tinymce-vue'
let tinymce = ref(null);
const props = defineProps({
    context: Object,
})

//initiate value
let value = ref(props.context.node.value);

//watch for changes, update tinymce value
props.context.node.on('input', (e) => {
    value.value = e.payload
});


//watch for tinymce value changes, update formkit value
watch(() => value.value, (val) => {
    props.context.node.input(val);
})


//remove formkit inner class
props.context.classes.inner = "";

</script>

<template>
    <editor v-model="value" v-bind="context.attrs" ref="tinymce" />
</template>