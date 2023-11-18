<template>
    <main>
        <h1 class="text-center">Check Your Task Before Deadline Comming</h1>
        <form @submit.prevent="onSubmit" method="post" class="flex flex-col items-center gap-3 mt-5">
            <input class="border-2 indent-3" type="text" name="username" placeholder="username" v-model="username" />
            <input class="border-2 indent-3" type="password" name="password" placeholder="password" v-model="password" />
            <button
                type="submit"
                class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
            >
                Login
            </button>
            <!-- <button type="submit">login</button> -->
        </form>
        <div class="mt-20 flex items-center justify-center" v-show="!isFinish">
            <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
        </div>
        <div class="flex flex-col" v-show="isFinish">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">No</th>
                                    <th scope="col" class="px-6 py-4">Mata Kuliah</th>
                                    <th scope="col" class="px-6 py-4">Tugas</th>
                                    <th scope="col" class="px-6 py-4">Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-neutral-500" v-for="(task, i) in tasksData" :key="i">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ i + 1 }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ task.subject }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ task.title }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ task.deadline }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const tasksData = ref();
const isFinish = ref(true);
const username = ref();
const password = ref();

function onSubmit() {
    isFinish.value = false;
    axios
        .post("https://upn-scrap.glitch.me/tasks", {
            username: username.value,
            password: password.value,
        })
        .then((res) => {
            tasksData.value = res.data;
            isFinish.value = true;
        });
}
</script>
