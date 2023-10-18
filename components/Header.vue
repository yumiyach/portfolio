<template>
  <div class="header">
    <div class="kv"></div>
    <div class="title">
      <h1 class="h1">弓矢 Yumiya</h1>
      <p>Webエンジニア・個人開発者</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: relative;
  color: #fff;
  text-align: center;
}
.kv {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/kv.jpg");
  background-size: cover;
  background-position: 50% 70%;
}
/**フィルター */
.kv:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #67bbab, #385170);
  mix-blend-mode: multiply;
}
.title{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
}
.h1 {
  margin: 0;
}
</style>
