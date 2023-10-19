<template>
  <div>
    <Header />
    <div class="contents">
      <div class="content">
        <h2 class="h2">自己紹介</h2>
        <Prolife />
      </div>
      <div class="content">
        <h2 class="h2">個人開発作品</h2>
        <Works :works="works" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TWork } from "~/types";
const works: TWork[] = Array(6).fill({}).map((v, i) => ({
  title: "作品名" + i,
  caption: "作品説明" + i,
  imageUrl: "/work.jpg",
  link: "/" + i,
  tags: ["タグ1", "タグ2", "タグ3"],
  description: "作品説明" + i,
}));
</script>
