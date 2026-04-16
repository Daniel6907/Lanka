<script setup>
import { ref } from 'vue'

const { data: teams, refresh } = await useFetch('/api/teams')
const selectedTeam = ref(null)

const selectTeam = (team) => {
  selectedTeam.value = team
}

onMounted(() => {
  refresh() // Оновлюємо дані при заході на сторінку
})
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif; max-width: 1000px; margin: 0 auto;">
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h1>📋 Наявні команди</h1>
      <NuxtLink to="/create-team" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        ➕ Створити команду
      </NuxtLink>
    </div>

    <div style="display: flex; gap: 30px;">
      <div style="flex: 1;">
        <div 
          v-for="team in teams" 
          :key="team.id" 
          @click="selectTeam(team)"
          style="border: 1px solid #ccc; margin-bottom: 15px; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.2s;"
        >
          <h2 style="margin-top: 0; color: #2c3e50;">{{ team.name }}</h2>
          <p><strong>Опис:</strong> {{ team.description }}</p>
          <span style="font-size: 12px; color: #3b82f6;">Натисни, щоб побачити деталі ➔</span>
        </div>
      </div>

      <div style="flex: 1;">
        <div v-if="selectedTeam" style="background: #f8fafc; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; position: sticky; top: 20px;">
          <h2 style="margin-top: 0; color: #1e40af;">{{ selectedTeam.name }}</h2>
          <p><strong>👤 Куратор:</strong> {{ selectedTeam.lead }}</p>
          <p><strong>🟢 Статус:</strong> {{ selectedTeam.status }}</p>
          <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 15px 0;" />
          <h3>Детальніше:</h3>
          <p><strong>💻 Стек:</strong> {{ selectedTeam.stack }}</p>
          <p><strong>📄 Інфо:</strong> {{ selectedTeam.details }}</p>
        </div>
        
        <div v-else style="display: flex; align-items: center; justify-content: center; height: 200px; border: 2px dashed #ccc; border-radius: 8px; color: #64748b;">
          <p>Обери команду зі списку зліва</p>
        </div>
      </div>
    </div>
  </div>
</template>