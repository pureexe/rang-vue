<template>
  <div>
    <main>
      <md-list style="max-height:100vh;overflow:auto;">
        <md-list-item v-for="bot in bots" :key="bot.id"  @click="$router.push('/bot/'+bot.id)" >
          <span>{{bot.name}}</span>
          <md-button class="md-icon-button md-list-action" @click="remove(bot.id, $event)">
           <md-icon class="md-primary" >delete</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
      <md-button class="md-fab md-fab-bottom-right" @click="$refs['dialog-add'].open()">
        <md-icon>add</md-icon>
      </md-button>
      <md-dialog-prompt
        md-title="สร้างบอทใหม่"
        md-ok-text="ตกลง"
        md-cancel-text="ยกเลิก"
        v-model="botname"
        ref="dialog-add"
        @close="onAddDialogClose"
      >
      </md-dialog-prompt>
    </main>
  </div>
</template>
<script>
import bot from '@/models/bot'
export default {
  data: () => {
    return {
      botname: '',
      bots: [
        {name: 'test', id: 0}
      ]
    }
  },
  methods: {
    add: function () {
    },
    onAddDialogClose: function (type) {
      if (type === 'ok') {
        let self = this
        bot.add(this.botname).then((id) => {
          this.bots.push({'id': id, name: self.botname})
        })
      }
    },
    remove: function (id, event) {
      event.preventDefault()
      let position = this.bots.map((a) => a.id).indexOf(id)
      this.bots.splice(position, 1)
      bot.remove(id)
      console.log('Remove ' + id)
    }
  },
  created: function () {
    let self = this
    bot.list().then((botList) => {
      self.bots = botList
    })
  }
}
</script>
<style scoped>

</style>
