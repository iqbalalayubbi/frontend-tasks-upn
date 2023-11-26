<template>
    <section class="flex flex-col items-center justify-center h-screen gap-3">
        <h1 class="text-second text-2xl font-bold">UPN TASKS</h1>
        <p class="text-second italic font-thin">“Check your tasks before deadline comming”</p>
        <div
            class="mt-10 inline-block h-20 w-20 opacity-80 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
            v-show="!isFinish"
        ></div>
        <div class="flex flex-col gap-5 mt-3 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4" v-show="isFinish">
            <InputData type="text" placeholder="username" @onInput="onInput" />
            <InputData type="password" placeholder="password" @onInput="onInput" />
            <ButtonPrimary class="mt-5 w-full" text="Check Tasks" @click="onSubmit" />
        </div>
    </section>
</template>

<script setup>
import InputData from "@/components/InputData.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import axios from "axios";
import { ref } from "vue";

const tasksData = ref();
const isFinish = ref(true);
const username = ref();
const password = ref();

function onInput(inputValue, inputName) {
    if (inputName == "username") username.value = inputValue;
    else password.value = inputValue;
}

function onSubmit() {
    // console.log(username.value, password.value);
    isFinish.value = false;
    axios
        .post("https://upn-scrap.glitch.me/tasks", {
            username: username.value,
            password: password.value,
        })
        .then((res) => {
            console.log(res);
        });
}
</script>
