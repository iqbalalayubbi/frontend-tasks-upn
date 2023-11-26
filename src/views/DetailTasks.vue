<template>
    <div class="h-screen flex flex-col gap-8 items-center justify-center">
        <h1 class="text-second text-2xl font-bold">Foto Produk</h1>
        <div class="flex flex-col items-center gap-3">
            <div class="flex gap-3 items-center w-4/5 border-b-2 py-2 border-slate-200">
                <h1 class="font-semibold text-gray-700">Status</h1>
                <span>:</span>
                <p class="text-sm">Belum Dikumpulkan</p>
            </div>
            <div class="flex gap-3 items-center w-4/5 border-b-2 py-2 border-slate-200">
                <h1 class="font-semibold text-gray-700">Tenggat</h1>
                <span>:</span>
                <p class="text-sm">1 hari</p>
            </div>
            <div class="flex gap-3 items-center w-4/5 border-b-2 py-2 border-slate-200">
                <h1 class="font-semibold text-gray-700">Tugas</h1>
                <span>:</span>
                <input type="file" name="tugas" id="" />
            </div>
        </div>
        <ButtonPrimary text="Kumpulkan Tugas" />
    </div>
</template>

<script setup>
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>
