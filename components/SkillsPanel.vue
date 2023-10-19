<template>
  <div class="skills">
    <SkillCard v-for="(skill, i) in skills" :key="i" :skill="skill" />
  </div>
</template>
<script setup lang="ts">
import { TSkill } from '~/types';
const props = defineProps({
  skills: {
    type: Object as () => TSkill[],
    required: false,
    default: [],
  },
});
</script>

<style scoped>
.skills{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

