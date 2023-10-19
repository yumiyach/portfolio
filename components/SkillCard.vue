<template>
  <div class="skillCard">
    <img class="skillCard_image" :src="skill.imageUrl" alt="skill" />
    <div class="skillCard_content">
      <h3 class="skillCard_title h3">{{ skill.name }}</h3>
      <p class="skillCard_description">{{ skill.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TSkill } from "~/types";
const props = defineProps({
  skill: {
    type: Object as () => TSkill,
    required: true,
  },
});
</script>

<style scoped>
.skillCard {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  overflow: hidden;
}
.skillCard_image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  padding: 8px;
}
.skillCard_content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
}

.skillCard_title {
  font-size: 1.2rem;
  margin-bottom: 8px;
  margin-top: 0;
  color: #385170;
}
.skillCard_description {
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
