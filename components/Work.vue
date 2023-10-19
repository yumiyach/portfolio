<template>
  <div class="work">
    <img class="work_image" :src="work.imageUrl" alt="works1" />
    <div class="work_content">
      <h3 class="work_content_title">{{ work.title }}</h3>
      <p class="work_content_caption">{{ work.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TWork } from "~/types";

const props = defineProps({
  work: {
    type: Object as () => TWork,
    required: true,
  },
});
</script>

<style scoped>
.work {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: flex-end;
}
@media screen and (max-width: 480px) {
  .work {
    aspect-ratio: 2;
  }
}
.work_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.work_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  margin-top: auto;
  color: #fff;
  padding: 12px;
}
.work_content_title {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 8px;
  margin-top: 0;
}
.work_content_caption {
  font-size: 0.8rem;
  font-weight: 100;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
