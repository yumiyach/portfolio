<template>
  <div>
    <Header />
    <div class="contents">
      <div class="content">
        <h2 class="h2">自己紹介</h2>
        <ProlifePanel />
      </div>
      <div class="content">
        <h2 class="h2">個人開発作品</h2>
        <WorksPanel :works="works" />
      </div>
      <div class="content">
        <h2 class="h2">スキル</h2>
        <SkillsPanel :skills="skills"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TWork,TSkill } from "~/types";
const works: TWork[] = Array(6).fill({}).map((v, i) => ({
  title: "作品名" + i,
  caption: "作品説明" + i,
  imageUrl: "/work.jpg",
  link: "/" + i,
  tags: ["タグ1", "タグ2", "タグ3"],
  description: "作品説明" + i,
}));
const skills: TSkill[] = Array(6).fill({}).map((v, i) => ({
  name: "スキル名" + i,
  description: "スキル説明" + i,
  imageUrl: "/work.jpg",
}));

</script>
