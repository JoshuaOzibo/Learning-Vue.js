<script>
import { newCount } from './composables/NewCounter';
    export default{
        props: ["item", "name"],

        setup(){
            return {
                newCount
            }
        }
    }


</script>

<template>
    {{ newCount }}
    <button>
        <slot>{{ `${item} ${name}` }}</slot>
    </button>
</template>