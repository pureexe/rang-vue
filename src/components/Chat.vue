<template>
  <div>
    <header>
      <md-toolbar>
        <md-button class="md-icon-button" @click="$refs.leftSidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1">มิโดริ</h2>
      </md-toolbar>
      <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
      </md-sidenav>
    </header>
    <main>
      <div style="height: calc(100vh - 116px);width:100%;overflow:auto;">
      </div>
      <md-whiteframe md-elevation="1" style="width: 100%;">
        <div class="user-chat-input" >
          <input placeholder="ส่งข้อความ"/>
        </div>
        <md-button class="md-raised md-accent user-send-btn">
          <md-icon>send</md-icon>
        </md-button>
      </md-whiteframe>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
  }
}
</script>
<style scoped>
  .user-chat-input{
    padding-bottom:10px;
    padding-top:10px;
    width: calc(100% - 56px);
    display: inline-block;
  }
  .user-chat-input > input{
    width:100%;
    height: 32px;
    line-height:32px;
    border:none;
    outline: none;
    display:block;
    flex:1;
    transition-property: font-size;
    color: rgba(0, 0, 0, 0.54);
    font-family: inherit;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .user-send-btn{
    height: 52px;
    min-width: auto;
    width: 52px;
    padding: 0px;
    margin: 0px;
  }
</style>
