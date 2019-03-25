<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <BarraEsquerda class="col-3 barra" />
        <Feed class="col-6" />
        <BarraDireita class="col-3 barra" />
      </div>
    </div>
  </div>
</template>

<script>
import BarraDireita from "./BarraDireita";
import BarraEsquerda from "./BarraEsquerda";
import Feed from "./Feed";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    BarraDireita,
    BarraEsquerda,
    Feed
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.barra {
  background-color: #bbbbbb;
  height: "100%";
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
