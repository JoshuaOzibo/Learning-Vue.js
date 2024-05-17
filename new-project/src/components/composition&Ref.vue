<script>
import {ref, computed} from 'vue';
import { newCount } from './composables/NewCounter';
    export default{
        async setup(){
            const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const response = await fetchData.json();
            const Name = ref('Joshua'); //the ref allow us to use reactive refrence

            const changeToUpperCase = computed(() => {
                return Name.value.toUpperCase();
            })

            return {
                response,
                Name,
                changeToUpperCase ,
                newCount
            }
        },

        methods: {
            changeName(){
                this.Name = 'Michael';
            },

            toUpper(){
                this.changeToUpperCase
            },

            clickIncrease(){
                this.newCount ++
            }
        }
    }
</script>

<template>
    <button @click="clickIncrease">+ 1</button>
    {{ newCount }}
    <h3>{{ Name }}</h3>
    <button @click="changeName">changeName</button>
    <button @click="toUpper">uppercase</button>
    <h5>{{ this.response }}</h5>
</template>