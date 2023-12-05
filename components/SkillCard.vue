<template>
  <div class="skillCard">
    <img class="skillCard_image" :src="skill.image.url" alt="skill" />
    <div class="skillCard_content">
      <h3 class="skillCard_title h3">{{ skill.name }}</h3>
      <!--
      <div class="skillCard_level">
        <span
          class="skillCard_level_star"
          v-for="(level, i) in skill.level"
          :key="i"
        >
          ★
        </span>
        <span
          class="skillCard_level_star-empty"
          v-for="(level, i) in 5 - skill.level"
          :key="i"
        >
          ★
        </span>
      </div>
    -->
      <div class="skillCard_experiences">
        <span
          class="skillCard_experience"
          v-for="(experience, i) in skill.experiences.sort((a, b) => {
            // あいうえお順
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          })"
          :key="i"
        >
          {{ experience.replace(/^[0-9]\./, "") }}
        </span>
      </div>
      <p v-if="skill.description" class="skillCard_description">
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TSkill } from "@/middleware/types";
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
  width: 50px;
  object-fit: contain;
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
.skillCard_level {
  display: flex;
  margin-bottom: 8px;
}
.skillCard_level_star {
  width: 16px;
  height: 16px;
  color: #f5a623;
  margin-right: 4px;
}
.skillCard_level_star-empty {
  width: 16px;
  height: 16px;
  color: #eaeaea;
  margin-right: 4px;
}

.skillCard_experiences {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -8px;
}
.skillCard_experience {
  font-size: 0.7rem;
  background: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.skillCard_description {
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 8px;
}
</style>
