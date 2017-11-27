<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-sm-6 text-center nopad">
        <itunes class="itunes"></itunes>
      </div>
      <div class="col-sm-6 text-center nopad">
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
  .nopad {
    padding: 0px 0px !important;
  }
  .mytunes {
    display: inline-block;
    min-height: 500px;
    min-width: 95%;
  }

  .itunes {
    display: inline-block;
    min-height: 500px;
    min-width: 95%;
    padding: 0px 0px !important
  }
  header{
    color: white;
    outline: black solid 1px;
    background-color: purple;
    height: 12vh
  }
  .container-fluid{
    background-color: gray;
  }
  .card{
        outline: black 1px solid;
        margin: 5px 0px;
        background-color: tan;
    }
  .blacktext{
    color: black;
  }
</style>