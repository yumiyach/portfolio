<template>
  <div class="contact">
    <a
      class="contact_button"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdnW0_HoPtNdZJrk-QBvawTE_yGD_5MI_ENmZnQOJF3fSjSnA/viewform"
      target="_blank"
    >
      <img src="/post.png" alt="post" />
      Google Form
    </a>

    <!--
    <a
      class="contact_button"
      href="https://www.twitter.com/messages/compose?recipient_id=869063479998660608"
      target="_blank"
    >
      <img src="/twitter.png" alt="twitter" />
      Twitter(DM)
    </a>
  -->
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
.contact_button {
  display: flex;
  align-items: center;
  color: #385170;
  font-size: 1.2rem;
  margin: 4px;
  font-weight: 400;
  text-decoration: none;
  border: 1px solid #385170;
  padding: 8px 16px;
  border-radius: 8px;
}
.contact_button img {
  width: 40px;
  height: 40px;
  margin-right: 4px;
  object-fit: contain;
}
</style>
