<template>
  <div id="app">
    <header>
      <div class="logo">Transfer<span class="logo-accent">App</span></div>
      <nav>
        <router-link to="/">Agendar</router-link>
        <router-link to="/extrato">Extrato</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: sans-serif;
  background-color: #f0f0f0;
  color: #333;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.logo-accent {
  color: #007bff; /* Uma cor de destaque para o App */
}

nav {
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
}

nav a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #555;
}

nav a.router-link-exact-active {
  color: #007bff;
}
</style>