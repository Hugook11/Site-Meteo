<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <NuxtLink class="navbar-brand" to="/">LOGO</NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">Accueil</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/formulaire">Formulaire</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/shop">Shop</NuxtLink>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Panier</button>
      </div>
      <form action="/meteo" method="GET" class="d-flex">
        <input class="form-control me-2" name="ville" type="search" placeholder="Entrez une ville" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Météo</button>
      </form>
    </div>
  </div>
</nav>
    <div class="container">
        <br>
        <Nuxt />
        <ShoppingCart/>
    </div>
    </div>
</template>
