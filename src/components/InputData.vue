<template>
    <div class="px-5 py-2.5 w-full rounded-full border-2 border-primary justify-start items-center gap-2.5 inline-flex text-green-700">
        <input :type="type" :placeholder="placeholder" class="focus:outline-none w-full" v-model="inputValue" @input="onInput($event)" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const emit = defineEmits("onInput");

function onInput(event) {
    const inputName = event.target.getAttribute("placeholder");
    emit("onInput", inputValue, inputName);
}

defineProps({
    type: String,
    placeholder: String,
});
</script>

<!-- remove background color auto fill -->
<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
