<template>
  <div>
    <div>mobile</div>
    <Tutorial title='abc' />
    <t-demo></t-demo>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tutorial from '@@/components/Tutorial.vue'
import { logger } from '@@/utils/logger'
import { getDom } from '@/utils/dom'
import TDemo from '@/components/t-demo.vue'

export default Vue.extend({
  components: { TDemo, Tutorial },

  mounted() {
    logger('papge index')
    console.log(getDom())
  }
})
</script>
