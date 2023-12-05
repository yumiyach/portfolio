<template>
  <div class="skills">
    <SkillCard
      v-for="(skill, i) in skills.filter((s) =>
        s.category.find((c) => c === 'front-end')
      )"
      :key="i"
      :skill="skill"
    />
    <SkillCard
      v-for="(skill, i) in skills.filter((s) =>
        s.category.find((c) => c === 'back-end')
      )"
      :key="i"
      :skill="skill"
    />
    <SkillCard
      v-for="(skill, i) in skills.filter((s) =>
        s.category.find((c) => c === 'others')
      )"
      :key="i"
      :skill="skill"
    />
  </div>
</template>
<script setup lang="ts">
import type { TSkill } from "@/middleware/types";

const props = defineProps({
  skills: {
    type: Object as () => TSkill[],
    required: false,
    default: [],
  },
});
</script>

<style scoped>
.skills_title {
  margin-bottom: 20px;
  text-align: center;
}
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 80px;
}
@media screen and (max-width: 480px) {
  .skills {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
