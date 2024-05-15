<script>
    export default{
        data: () => ({
            items: []
        }),

        methods: {
            async dataFetch() {
                const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users');
                const response = await fetchUsers.json();
                this.items = response;
            } 
        },

        beforeCreate(){
            alert('beforeCreate lifecycle hook');
            console.log('beforeCreate lifecycle hook');
        },

        created() {
            this.dataFetch()
        }
    }
</script>

<template>
    <button @click="dataFetch">Fetch Users</button>
    <p v-if="items.length === 0">Loading Users...</p>
    <p v-else  v-for="(item, index) in items">{{ index + 1 }}</p>
</template>