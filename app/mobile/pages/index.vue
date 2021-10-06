<template>
  <div>
    <div>mobile</div>
    <Tutorial/>
    <t-demo></t-demo>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tutorial from '@@/components/Tutorial.vue'
import TDemo from '@/components/t-demo.vue'

export default Vue.extend({
  components: { TDemo, Tutorial }
})
</script>
