<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">ANISMASH.COM</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/smash">Smash</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/leaderboard"
                >Leaders</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/all">All Stars</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
