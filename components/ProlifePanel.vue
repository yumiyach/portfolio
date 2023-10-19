<template>
  <div class="profile">
    <div class="profile_photo">
      <img :src="profile.imageUrl" alt="avatar" />
    </div>
    <div class="profile_content">
      <h3 class="profile_name">{{ profile.name }}</h3>
      <p class="profile_caption">{{ profile.caption }}</p>
      <div class="profile_links">
        <a
          class="profile_link"
          v-for="(link, i) in profile.links"
          :key="i"
          :href="link.url"
        >
          <img :src="link.iconUrl" alt="icon" />
          {{ link.name }}
        </a>
      </div>
      <ul class="profile_list">
        <li
          class="profile_list_item"
          v-for="(item, i) in profile.list"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TProfile } from "~/types";
const props = defineProps({
  profile: {
    type: Object as () => TProfile,
    required: true,
  },
});
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .profile {
    flex-direction: column;
    align-items: center;
  }
}
.profile_photo {
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
.profile_photo img {
  width: 150px;
  height: 150px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

.profile_name {
  color: #142d4c;
  font-size: 1.6rem;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
}
.profile_caption {
  color: #142d4c;
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 12px;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
}
.profile_links {
  display: flex;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}
.profile_link {
  display: flex;
  align-items: center;
  color: #142d4c;
  font-size: 0.8rem;
  margin: 0 4px;
  font-weight: 400;
  text-decoration: none;
  border: 1px solid #142d4c;
  padding: 2px 4px;
  border-radius: 8px;
}
.profile_link img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.profile_list {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 20px;
}
.profile_list_item {
  color: #142d4c;
  font-size: 0.9rem;
  margin-bottom: 4px;
  margin-top: 0;
}
</style>
