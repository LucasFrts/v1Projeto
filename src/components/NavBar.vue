<script setup lang="ts">

</script>
<template>
<nav class="navbar navbar-expand-lg bg-top-terminal p-2 bg-opacity-25">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="btn btn-outline-success terminal-button" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-success terminal-button" href="#">Projetos</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-success terminal-button" href="#">Contatos</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-success terminal-button" href="#">Sobre mim</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
.navbar{
    width: 100vw;
}
ul{
    justify-content: center !important;
    width: 100%;
    gap: 1.8rem;
}
.btn{
    border:none;
}
</style>