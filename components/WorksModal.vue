<template>
  <div
    class="modal"
    :style="{
      display: visible ? 'flex' : 'none',
    }"
  >
    <div
      class="modal-shadow"
      @click="
        () => {
          onClose();
        }
      "
    ></div>
    <div v-if="work" class="modal_body">
      <span v-if="work.closed" class="modal_closedLabel">公開終了</span>
      <span
        class="modal_close"
        @click="
          () => {
            onClose();
          }
        "
      ></span>
      <img class="modal_image" :src="work.image.url" alt="works1" />
      <div class="modal_content">
        <h3 class="modal_content_title">{{ work.title }}</h3>
        <a
          :href="work.url"
          :style="{
            textDecoration: work.closed ? 'line-through' : 'none',
          }"
          class="modal_content_link"
          target="_blank"
          >{{ work.url }}</a
        >
        <div class="modal_tags">
          <span class="modal_tag" v-for="(skill, i) in work.skills" :key="i">
            {{ skill.name }}
          </span>
        </div>
        <div v-if="work.oldSkills.length" class="modal_tags">
          <span class="modal_tags_title">過去使っていた技術:</span>
          <span
            class="modal_tag-old"
            v-for="(skill, i) in work.oldSkills"
            :key="i"
          >
            {{ skill.name }}
          </span>
        </div>
        <div class="modal_content_text" v-html="work.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TWork } from "@/middleware/types";

interface Props {
  visible: boolean;
  onClose: () => void;
  work: TWork;
}
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
  work: {
    type: Object as () => TWork,
    required: false,
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: none;
  z-index: 100;
}
.modal-shadow {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal_close {
  position: absolute;
  cursor: pointer;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  z-index: 100;
}
.modal_close::before,
.modal_close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: calc(1.41 * 20px);
  background: #888;
}

.modal_close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.modal_close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.modal_body {
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
  width: 80%;
  max-width: 800px;
  overflow: scroll;
  max-height: calc(70vh - 40px);
}
@media screen and (max-width: 768px) {
  .modal_body {
    max-height: calc(100vh - 40px);
    display: block;
    flex-direction: column;
  }
}
.modal_closedLabel {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e92323;
  color: #fff;
  padding: 4px;
  font-size: 0.8rem;
}
.modal_image {
  width: 50%;
  aspect-ratio: 1.5;
  object-fit: contain;
}
@media screen and (max-width: 768px) {
  .modal_image {
    width: 100%;
    margin-bottom: 20px;
    aspect-ratio: auto;
  }
}
.modal_content {
  width: 50%;
  padding: 20px;
  overflow: scroll;
}
@media screen and (max-width: 768px) {
  .modal_content {
    width: calc(100% - 40px);
    padding: 0 20px 20px 20px;
  }
}
.modal_content_title {
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 4px;
  margin-top: 0;
}
.modal_content_link {
  font-size: 0.9rem;
  margin-bottom: 8px;
  margin-top: 0;
  display: inline-block;
}
.modal_content_text {
  font-size: 1rem;
  margin-bottom: 0;
  margin-top: 0;
}
.modal_tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.modal_tags_title {
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.8rem;
}
.modal_tag,
.modal_tag-old {
  font-size: 0.8rem;
  background: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.modal_tag-old {
  font-size: 0.6rem;
  font-weight: 300;
}
</style>

<style>
.modal_content_text h4 {
  font-weight: 400;
  font-size: 1.1rem;
}
</style>
