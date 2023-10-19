<template>
  <div class="works">
    <Work
      v-for="(work, i) in works"
      :key="i"
      :work="work"
      @click="
        () => {
          handleClickWork(i);
        }
      "
    />
    <WorksModal
      :visible="openWorksModal"
      :onClose="
        () => {
          openWorksModal = false;
        }
      "
      :work="modalWork"
    />
  </div>
</template>

<script setup lang="ts">
import { TWork } from "~/types";

const props = defineProps({
  works: {
    type: Object as () => TWork[],
    required: false,
    default: [],
  },
});
const openWorksModal = ref(false);
const modalWork = ref<TWork | undefined>();

const handleClickWork = (index: number) => {
  openWorksModal.value = true;
  modalWork.value = props.works[index];
};
</script>

<style scoped>
.works {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
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
.work_content_description {
  font-size: 0.8rem;
  font-weight: 100;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
