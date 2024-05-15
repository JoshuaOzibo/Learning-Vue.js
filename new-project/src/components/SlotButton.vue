<script>
    export default{
        props: ["item", "name"]
    }
</script>

<template>
    <button>
        <slot>{{ `${item} ${name}` }}</slot>
    </button>
</template>