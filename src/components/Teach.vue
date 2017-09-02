<template>
  <div class="teach">
    สอน
    {{$route.params.id}}
  </div>
</template>

<script>
import bot from '@/models/bot'
export default {
  name: 'Teach',
  created: function () {
    let self = this
    bot.set(this.$route.params.id, function (error, info) {
      if (error) {
        self.$router.push('/error')
      }
    })
  }
}
</script>

<style>
</style>
