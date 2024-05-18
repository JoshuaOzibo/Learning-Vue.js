<script>
import { newCount } from './composables/NewCounter';
import {counterBtn} from '../composable/useFunction';
    export default{
        props: ["item", "name"],

        setup(){

            const counterFunc = counterBtn();
            return {
                newCount,
                counterFunc
            }
        },

        methods: {
            incLocal(){
                console.log("object")
                this.counterFunc.localCounter.value ++
            }
        }

        
    }


</script>

<template>
    <button @click="incLocal">localBtn</button>
    <p>global Counter: {{ counterFunc.globalCounter }}</p>
    <p>local Counter: {{ counterFunc.localCounter }}</p>
    {{ newCount }}
    <button>
        <slot>{{ `${item} ${name}` }}</slot>
    </button>
</template>