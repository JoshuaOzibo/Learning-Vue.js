
<script>
export default {
    

    emits: ["count"]


//   methods: {
//     add() {
//         $emit('count')
//     },
//     sub() {

//     }

    // increaseByAmount() {
    //   this.count += this.incrementAmount
    // }
  }
</script>



<template>
    <span>
      <button @click="$emit('count')"><p>Add</p></button>
      <!-- <button ><p>Sub</p></button> -->
    </span>
  </template>

