<template>
  <div>
    <nav>
      <router-link to="/player">状态</router-link>
      <router-link to="/bagage">背包</router-link>
      <router-link to="/adventure">冒险</router-link>
      <router-link to="/illustrate">图鉴</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {}
  },
  components: {},
  watch: {},
  methods: {},
  created() {
    if (this.$store.state.player === null) {
      this.$router.replace({
        name: 'register'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
