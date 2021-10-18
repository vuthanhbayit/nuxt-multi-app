<template>
  <div>
    <div>mobile</div>
    <Tutorial title='abc' />
    <t-demo></t-demo>
    <t-btn></t-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tutorial from '@@/components/Tutorial.vue'
import { logger } from '@@/utils/logger'
import TBtn from '@base/button/t-btn.vue'
import { getDom } from '@/utils/dom'
import TDemo from '@/components/t-demo.vue'

export default Vue.extend({
  components: { TBtn, TDemo, Tutorial },

  mounted() {
    logger('papge index')
    console.log(getDom())
  }
})
</script>
