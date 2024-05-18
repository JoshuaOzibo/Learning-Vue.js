<script setup>
import {ref} from 'vue';

    const colorPrefrence = ref('black')
    const clickTrue = ref(true);
    console.log(clickTrue)
    import {counterBtn} from '../composable/useFunction.js';

    const {globalCounter, localCounter} = counterBtn();
    const togglebtn = () => {
        return clickTrue.value = !clickTrue.value
    }
</script>

<template>
    <button @click="togglebtn">toggle</button>
    <h1>{{ colorPrefrence }}</h1>
    <input type="color" v-model="colorPrefrence"> <br>
    <br>
    <button @click="globalCounter += 10">addAll</button>
    <p>localMan: {{ localCounter }}</p>
    <p>glocalMan: {{ globalCounter }}</p>
</template>