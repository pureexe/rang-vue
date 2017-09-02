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
    bot.set(this.$route.params.id, function (error) {
      if (error) {
        // 404 bot not found
      }
    })
  }
}
</script>

<style>
</style>
