import {ref} from 'vue';

const counter = ref(0)

export const counterBtn = (() => {
    counter ++;
});