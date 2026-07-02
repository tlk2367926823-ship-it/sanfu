<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sanfoLogo from './sanfo-logo.png'

const navItems = [
  { label: '首页', to: '/' },
  { label: '产品', to: '/products/' },
  { label: '工厂', to: '/factory/' },
  { label: '定制', to: '/custom/' },
  { label: '联系', to: '/contact/' },
]
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/" aria-label="三富锂电首页">
        <img class="brand-logo" :src="sanfoLogo" alt="SanF 三富" />
      </RouterLink>

      <nav class="nav" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          active-class="is-active"
          exact-active-class="is-active"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
