<script setup>
const route = useRoute()

const links = [
  { to: '/', label: '🏠 Головна' },
  { to: '/teams', label: '📋 Команди' },
  { to: '/create-team', label: '➕ Створити команду' },
  { to: '/register', label: '👤 Реєстрація' },
]
</script>

<template>
  <header style="background: #c0392b; color: white; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    <div style="max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; height: 60px;">
      <NuxtLink to="/" style="color: white; text-decoration: none; font-size: 22px; font-weight: 800; letter-spacing: -1px;">
        Lanka <span style="font-size: 11px; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; letter-spacing: 2px; font-weight: 400;">УКД</span>
      </NuxtLink>
      <nav style="display: flex; gap: 4px; align-items: center;">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :style="`color: white; text-decoration: none; font-size: 14px; padding: 6px 14px; border-radius: 6px; background: ${route.path === link.to ? 'rgba(255,255,255,0.25)' : 'transparent'};`"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>