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
</style>
