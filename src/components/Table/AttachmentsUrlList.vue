<template>
    <div style="min-width: 200rem;background-color: black;">{{attaches}}</div>

</template>

<script>
import {storeAttachments} from '@/store/storeAttachments.js';
export default {
    data(){
        return {
            attaches: storeAttachments.getAllAttachments(),
        }
    }
}
</script>