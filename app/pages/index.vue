<template>
  <div style="font-family: sans-serif; max-width: 900px; margin: 0 auto; padding: 40px 20px;">
    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 8px;">Lanka</h1>
    <p style="color: #666; margin-bottom: 40px;">Платформа пошуку команд для університетських проєктів</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="border: 1px solid #eee; border-radius: 8px; padding: 24px;">
        <h2>🔍 Знайти команду</h2>
        <p style="color: #888;">Переглянь відкриті команди та подай заявку</p>
        <NuxtLink to="/teams" style="display: inline-block; margin-top: 16px; background: #c0392b; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none;">
          Переглянути команди →
        </NuxtLink>
      </div>
      <div style="border: 1px solid #eee; border-radius: 8px; padding: 24px;">
        <h2>➕ Створити команду</h2>
        <p style="color: #888;">Створи команду та знайди напарників за стеком</p>
        <NuxtLink to="/create-team" style="display: inline-block; margin-top: 16px; background: #2c3e50; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none;">
          Створити →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>