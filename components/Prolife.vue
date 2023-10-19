<template>
  <div class="profile">
    <div class="profile_photo">
        <img src="/avatar.jpg" alt="avatar" />
    </div>
    <div class="profile_content">
      <h3 class="h3">弓矢</h3>
      <p class="profile_copy">たのしい場所を作りたいWebエンジニアです。</p>
      <ul class="profile_list">
        <li>オタク文化わかります</li>
      </ul>
    </div>
  </div>
</template>

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
  width: 150px;
  aspect-ratio: 1;
}
@media screen and (max-width: 768px) {
  .profile_photo {
    margin-right: 0;
  }
}
.profile_photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile_content {
}
</style>
