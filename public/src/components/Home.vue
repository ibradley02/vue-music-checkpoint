<template>
  <div class="home container">
    <div class="row">
      <div class="col-sm-6">
        <itunes class="itunes"></itunes>
      </div>
      <div class="col-sm-6">
          <mytunes class="mytunes"></mytunes>
      </div>
    </div>
  </div>
</template>

<script>
  import itunes from './itunes'
  import mytunes from './mytunes'

  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      itunes,
      mytunes
    }
  }
</script>


<style>
  .mytunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>