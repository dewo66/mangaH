<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ post.mangaName }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manga sub</h6>
      <p class="card-text">
        Bizim mangalarımız çok güzel bizim mangalarımızı okuyun yalvarırım 1
        kere okuyun
      </p>
      <div class="admin-button-container" v-if="isAdmin">
        <a
          href="#"
          @click.prevent="$router.push('/admin/1')"
          class="btn btn-outline-warning btn-sm"
          >Düzenle</a
        >
        <a href="#" class="btn btn-outline-danger btn-sm">Sil</a>
      </div>
      <div class="admin-button-container" v-else>
        <a
          href="#"
          @click.prevent="$router.push('/posts/1')"
          class="btn btn-outline-info btn-sm"
          >Görüntüle</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isAdmin: {
      required: true,
      type: Boolean,
    },
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>
