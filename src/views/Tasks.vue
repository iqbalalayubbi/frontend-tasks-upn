<template>
    <div class="relative h-screen flex flex-col gap-3 items-center justify-center">
        <div class="text-second text-2xl font-bold">Your Tasks</div>

        <div class="flex flex-col gap-5 items-center w-3/4 md:w-2/3 lg:w-1/2" v-for="task in tasks" :key="task">
            <div class="bg-primary w-full text-center rounded-md py-2 my-5">
                <h1 class="text-bg text-lg font-bold">{{ task.subject }}</h1>
            </div>
            <TasksCard class="w-full" v-for="title in task.tasks" :key="title" :title="title" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TasksCard from "../components/TasksCard.vue";
const tasks = ref([
    { subject: "Kewirausahaan", tasks: ["kwu 1", "kwu 2", "kwu 3"] },
    { subject: "Statistika Komputasi", tasks: ["stsk 1", "stsk 2", "stsk 3"] },
]);
</script>
