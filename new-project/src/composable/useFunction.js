import {ref} from 'vue';

const globalCounter = ref(10)

export const counterBtn = (() => {
    const localCounter = ref(19);

    return {
        globalCounter,
        localCounter
    }
});