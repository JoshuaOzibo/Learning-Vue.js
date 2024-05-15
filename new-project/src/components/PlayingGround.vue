<script>
import CounterComp from './Counter.vue';
     export default {

        components:{
            CounterComp,
        },

        data(){
    return {
        count: 0,
        addCounterMsg: '',
        incrementAmount: 5,
        message: 'joshua',
        listNumbers: [1, 2, 3, 4, 5] ,
        tvShow: ['NTA', 'ITV', 'EBS'],
        userItems: {name: '', age: ''},
        newUserData:[],
        favouriteChar: [],
    }
   },

   computed: {
    increasebyTitle(){
        if(this.count >= 10){
           return 'counter greater than 10';
        }else{
           return 'Vue Counter'
        }
    }
   },

   methods: {

    submituserData(e){
        e.preventDefault()
        console.log("object")
        // console.log(newUserData.push(this.userItems))
    },

    clearTvShow(){
        this.tvShow.length = 0
    },

    favouriteShow(tv){
        console.log(this.favouriteChar.push(tv))
    },

    add(){
        this.count ++
    }
   },

   watch: {
    count(newvalue){
        console.log(newvalue >= 10 ? 'greater' : 'lesser')
        console.log()
    }
   }
     }

</script>


<template>
    <h1>{{increasebyTitle}}</h1>

{{newUserData.name}}
<div>
    <p v-if="userItems.name && userItems.age === 0">user not avaliable</p>
    <p v-else="userItems.name">my name is {{userItems.name}} and am {{userItems.age}} years old</p>
</div>

<div>
    <form>
        <div>
            <label>user name</label>
            <input v-model.text="userItems.name" type="text">
        </div>
        <div>
            <label>user age</label>
            <input v-model.number="userItems.age" type="number">
        </div>

        <button v-on:click="submituserData(userItems)" type="submit">submitUserData</button>
    </form>
</div>

<hr>
<h3 >counter number: {{count}}</h3>

<div>
    <CounterComp @count="add"  />
</div>


<ul v-if="favouriteChar.length > 0">
    <li><p v-for="favourite in favouriteChar">{{favourite}}</p></li>
    
</ul>
<p v-else>favourite character is empty</p>

<!-- v-on:input="changeincreaseByAmount  and v-bind:value="incrementAmount"" use v-model insted -->
<input v-model="incrementAmount" type="number">

<button v-on:click="increaseByAmount">Increase by {{incrementAmount}}</button>

<p>{{message.toUpperCase()}}</p>
<p v-for="number in listNumbers"> {{Math.random()}}</p>

<h3 v-if="tvShow.length === 0">No tv show</h3>
<h3 v-for="tv in tvShow"><p> <button @click="favouriteShow(tv)">Favourite</button>{{tv}}</p></h3>
<button @click="clearTvShow()">clear tvShow</button>
</template>