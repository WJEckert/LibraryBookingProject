<template>
  <nav>
    <ul>
      <li @click="$i18n.locale = 'es'">ES</li>
      <li @click="$i18n.locale = 'en'">EN</li>
      <li @click="$i18n.locale = 'eus'">EUS</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "LanguageHeader"
  }
</script>

<style scoped>
  nav {
    position: absolute;
    background: var(--color-light);
    right: 0.75rem;
    top: 0.75rem;
    z-index: 99;
  }

  nav ul {
    list-style: none;
    display: flex;
    margin: 0.25rem;
    padding: 0.25rem;
  }

  nav ul li {
    margin: 0 0.25rem;
    cursor: pointer;
    color: var(--color-blue);
  }
</style>
