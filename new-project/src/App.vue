<script>
// import PlayGround from './components/PlayingGround.vue';
import Todo from './components/TodoApp.vue';
import SlotButton from './components/SlotButton.vue';
import FetchData from './components/Fetch.vue';
import UsersPage from './components/UsersPage.vue';

  export default{
    components: {
    Todo,
    SlotButton,
    FetchData,
    UsersPage
  },

  data(){
    return{
      itemName: 'Hello From vue',
      name: 'Button',
    }
  }
  }
</script>

<template>
  <!-- <Todo />
  <SlotButton :name="name" :item="itemName"> </SlotButton> -->


  <h2>Hello Fetching</h2>
  <FetchData />
  <UsersPage />
</template>
