<template>
    <div class="flex gap-3 border shadow-md border-primary rounded-md py-4 relative">
        <h1 class="indent-5 font-semibold">Tugas</h1>
        <span>:</span>
        <p>{{ title }}</p>
        <span class="bg-orange-400 text-bg text-xs rounded-full px-5 py-1 flex items-center absolute -top-3 right-0">1 hari lagi</span>
    </div>
</template>

<script setup>
defineProps({ title: String });
</script>
