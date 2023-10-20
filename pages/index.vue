<template>
  <div>
    <Header />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { TWork, TSkill, TProfile } from "~/types";
import profileData from "~/assets/profile.json";

const profile = ref<TProfile>(profileData);

const skills = useState<TSkill[]>("skills", () => []);
const works = useState<TWork[]>("works", () => []);

onMounted(async () => {
  await useMicroCMSUrl();
  const worksRes = await useMicroCMSGetList<TWork>({
    endpoint: "works",
  });
  works.value = worksRes.data.value?.contents ?? [];
  const skillsRes = await useMicroCMSGetList<TSkill>({
    endpoint: "skills",
  });
  skills.value = skillsRes.data.value?.contents ?? [];
});
</script>
