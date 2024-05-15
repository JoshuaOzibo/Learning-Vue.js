<script setup>
    import {ref, defineEmits, defineProps} from 'vue';

    let data = ref([]);
    const props = defineProps({
  items: {
    type: String
  }
});
    
        const fetchBtn = (async() => {
            const fetchItems = await fetch('https://jsonplaceholder.typicode.com/users');
                const response = await fetchItems.json();

                data.value = response
        });

        console.log(data)
    //    async setup(){
    //         const dataFetch = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const response = await dataFetch.json();
    //             const items = ref(response);

    //             return {
    //                 items
    //             }
    //    },

        // beforeCreate(){
        //     alert('beforeCreate lifecycle hook');
        //     console.log('beforeCreate lifecycle hook');
        // },

        // created() {
        //     this.items
        // }
</script>

<template>
    <p>{{ props.items }}</p>
    <button @click="fetchBtn">FetchItems</button>
    <p>{{ data }}</p>
    <!-- <button @click="dataFetch">Fetch Users</button>
    <p v-if="this.items.length === 0">Loading Users...</p>
    <p v-else  v-for="(item, index) in items">{{ index + 1 }}</p> -->
</template>