<template>
  <div>
    <HeaderPanel />
    <div class="contents">
      <div class="content">
        <h2 class="h2">自己紹介</h2>
        <ProlifePanel :profile="profile" />
      </div>
      <div class="content">
        <h2 class="h2">個人開発作品</h2>
        <WorksPanel :works="works" />
      </div>
      <div class="content">
        <h2 class="h2">スキル</h2>
        <SkillsPanel :skills="skills" />
      </div>
      <div class="content">
        <h2 class="h2">お問合せ</h2>
        <ContactPanel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TWork, TSkill, TProfile } from "@/middleware/types";
import profileData from "../assets/profile.json";
import microCmsApi from "@/middleware/microCmsApi";

const profile = ref<TProfile>(profileData);
const skills = useState<TSkill[]>("skills", () => []);
const works = useState<TWork[]>("works", () => []);

skills.value = await microCmsApi<TSkill>("skills", 100);
works.value = await microCmsApi<TWork>("works", 100);

useHead({
  title: "弓矢 Webエンジニア・個人開発者",
});
</script>
