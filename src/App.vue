<template>
  <router-view></router-view>
</template>

<script>
import Event from './origin/Event'

export default {
  name: 'App',
  components: {},
  mounted() {
    document.body.addEventListener('click', function () {
      Event.$emit('closeAll')
    }, false)
  }
}
</script>
