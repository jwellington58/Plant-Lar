<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div>
          <a class="navbar-brand" href="#">PlantLar</a>
        </div>
        <div style="flex: 1">
          <form
            class="form-inline my-2 my-lg-0"
            style="display: flex;
                   align-items: center;
                   justify-content: center"
          >
            <input
              style="width: 50%; border-radius: 15px; padding: 20px; "
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div>
          <label class="text-white">Joyce Quintino</label>
          <i
            class="far fa-user-circle text-white"
            style="margin-left: 10px; font-size: 25px; line-height: 32px;"
          ></i>
        </div>
      </div>
    </nav>

    <!-- <nav class="navbar navbar-dark bg-dark">
      <div>
        <a class="navbar-brand" href="#">
          PlantLar
        </a>
      </div>
      <div style="">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div>
        <label class="text-white">Joyce Quintino</label>
        <i class="far fa-user"></i>
      </div>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
/* @import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css"; */

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50; */
/* }

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
