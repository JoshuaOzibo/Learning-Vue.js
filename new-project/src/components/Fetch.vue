<script>
    export default{
        data: () => ({
          
                pokimonData: [1, 2, 3],
        }),

        methods: {
            async fetchpokenmon() {
                const fetchData =  await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
                const response = await fetchData.json();
                this.pokimonData = response;
                console.log(response.results)
            }
        },

        created(){
            this. response
        }
    }
</script>

<template>
    <p>{{ pokimonData.results}}</p>
    <button @click="fetchpokenmon">FetchData</button>
</template>