<script>
import Table from './Table.vue';
import SlotLayout from './SlotLayout.vue'

export default{
    components: {
    Table,
    SlotLayout
},

    data(){
        return {
            inputValue: {name: '', email: '', age: ''},
            movedItems: []
        }
    },

    
    methods: {
        HandleUserData(e){
            e.preventDefault();
            this.movedItems.push({name: this.inputValue.name, email: this.inputValue.email, age: this.inputValue.age})
            console.log(this.movedItems)

        }
    }
}
</script>


<template>
    <SlotLayout>
        <template v-slot: one>
            <form>
        <div>
            <label>Name of candidate:</label>
            <input v-model.text="inputValue.name" type="text">
        </div>

        <div>
            <label>Email of candidate:</label>
            <input v-model.text="inputValue.email"type="email">
        </div>

        <div>
            <label>Age of candidate:</label>
            <input v-model.number="inputValue.age"type="number">
        </div>

        <div>
            <button @click="HandleUserData"  type="submit">Submit user Data</button>
        </div>
    </form>
        </template>
    </SlotLayout>
    <section>
        <div>
        <h1>Todo App With Vue</h1>
    </div>


   <div>
    {{ console.log(movedItems) }}
    <Table :items="movedItems" />

   </div>
    </section>
</template>