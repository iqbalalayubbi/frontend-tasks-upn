<template>
    <button class="px-10 py-2.5 bg-primary rounded-full shadow justify-center items-center gap-2.5 inline-flex text-neutral-200 font-bold">{{ text }}</button>
</template>

<script setup>
defineProps({
    text: String,
});
</script>
