<script setup lang="ts">
import { ref } from "vue";
import LeftDesignBar from "./left/LeftDesignBar.vue"
import DesignRender from "./medium/DesignRender.vue";
import RightDesignBarVue from "./right/RightDesignBar.vue";

</script>
<template>
    <div class="outer">
        <LeftDesignBar></LeftDesignBar>
        <DesignRender></DesignRender>
        <RightDesignBarVue></RightDesignBarVue>
    </div>
</template>

<style scoped>
.outer {
    display: flex;
    justify-content: space-between;
}
</style>