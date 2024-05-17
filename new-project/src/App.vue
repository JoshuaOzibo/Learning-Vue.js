<script>
// import PlayGround from './components/PlayingGround.vue';
import Todo from './components/TodoApp.vue';
import SlotButton from './components/SlotButton.vue';
import FetchData from './components/Fetch.vue';
import UsersPage from './components/UsersPage.vue';
import compositionRef from './components/composition&Ref.vue';
import {ref} from 'vue';
  export default{
    components: {
    Todo,
    SlotButton,
    FetchData,
    UsersPage,
    compositionRef
  },

  data(){
    return{
      itemName: 'Hello From vue',
      name: 'Button',
      data:  [],
    }
  }
  }
</script>

<template>
  <!-- <Todo />
  <SlotButton :name="name" :item="itemName"> </SlotButton> -->


  <h2>Hello Fetching</h2>
  <!-- <FetchData /> -->
  
  <SlotButton />
  <Suspense>
    <compositionRef />
    <!-- <UsersPage :items="Hello" />  -->

    <template #fallback>
      <h1>Loading....</h1>
    </template>
  </Suspense>
</template>
