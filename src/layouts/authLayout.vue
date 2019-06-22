<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row gutter-md flex-row">
      <div class="my-container">
        <q-page-container class="container-login">
          <router-view />
        </q-page-container>
      </div>
      <div class="col-lg-6 item centered-pic">
        <img src="~assets/logo.svg" class="logotipo q-mb-xl q-mt-xl">
      </div>
    </div>
  </q-layout>
</template>

<style scoped>
  .logotipo{
    max-width: 550px;
    max-height: 550px;
  }
  .item {
    display: flex;
    flex: 1;
  }
  .my-container {
    flex: 1;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
    background-color: rgba(200, 200, 200, 0.9);
    /* background-color: rgba(69,68,108,1); */
    align-items: center;
  }
  .centered-pic {
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(200, 200, 200, 0.9);
  }
  .flex-row {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    background-color: rgba(200, 200, 200, 0.9);
    /* background-color: rgba(69,68,108,1); */
  }
  .container-login {
    padding: 30px 50px;
    padding-top: 50px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
