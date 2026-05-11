<script setup>
const { data: teams, refresh } = await useFetch('/api/teams')
const selectedTeam = ref(null)
const searchQuery = ref('')
const applying = ref(false)
const applySuccess = ref(false)

const filteredTeams = computed(() => {
  if (!teams.value) return []
  return teams.value.filter(t =>
    t.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    t.stack.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    t.course.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const statusColor = (status) => {
  if (status === 'Active') return '#16a34a'
  if (status === 'Pending') return '#d97706'
  return '#6b7280'
}

const applyToTeam = async (team) => {
  applying.value = true
  applySuccess.value = false
  try {
    await $fetch('/api/applications', { method: 'POST', body: { teamId: team.id, userId: 1, role: 'Розробник' } })
    applySuccess.value = true
  } catch (e) {
    console.error(e)
  } finally {
    applying.value = false
  }
}

onMounted(() => refresh())
</script>

<template>
  <div style="min-height: 100vh; background: #f8f9fa;">
    <div style="max-width: 1100px; margin: 0 auto; padding: 40px 20px;">
      <h1 style="font-size: 2rem; font-weight: 800; margin: 0 0 8px; color: #1a1a1a;">Каталог команд</h1>
      <p style="color: #666; margin: 0 0 24px;">Знайди команду за стеком, предметом або назвою</p>

      <input
        v-model="searchQuery"
        placeholder="🔍 Пошук за назвою, стеком або предметом..."
        style="width: 100%; padding: 12px 16px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; margin-bottom: 24px; box-sizing: border-box; outline: none;"
      />

      <div style="display: flex; gap: 24px;">
        <div style="flex: 1;">
          <div v-if="filteredTeams.length === 0" style="text-align: center; padding: 40px; color: #999;">Команд не знайдено</div>
          <div
            v-for="team in filteredTeams"
            :key="team.id"
            @click="selectedTeam = team; applySuccess = false"
            :style="`background: white; border: 2px solid ${selectedTeam?.id === team.id ? '#c0392b' : '#eee'}; border-radius: 12px; padding: 20px; margin-bottom: 12px; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.05);`"
          >
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
              <h3 style="margin: 0; color: #1a1a1a; font-size: 16px;">{{ team.name }}</h3>
              <span :style="`font-size: 11px; font-weight: 700; color: ${statusColor(team.status)}; background: ${statusColor(team.status)}20; padding: 3px 10px; border-radius: 20px;`">{{ team.status }}</span>
            </div>
            <p style="margin: 0 0 8px; color: #666; font-size: 13px;">{{ team.description }}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span v-for="tech in team.stack.split(',')" :key="tech" style="font-size: 11px; background: #f0f0f0; padding: 2px 8px; border-radius: 4px; color: #444;">{{ tech.trim() }}</span>
            </div>
            <div style="margin-top: 10px; font-size: 12px; color: #999;">📚 {{ team.course }} · 👥 {{ team.members.length }}/{{ team.maxMembers }}</div>
          </div>
        </div>

        <div style="width: 340px; flex-shrink: 0;">
          <div v-if="selectedTeam" style="background: white; border-radius: 12px; padding: 28px; border: 1px solid #eee; position: sticky; top: 80px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="margin: 0 0 4px; color: #1a1a1a; font-size: 20px;">{{ selectedTeam.name }}</h2>
            <span :style="`font-size: 11px; font-weight: 700; color: ${statusColor(selectedTeam.status)}; background: ${statusColor(selectedTeam.status)}20; padding: 3px 10px; border-radius: 20px;`">{{ selectedTeam.status }}</span>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="margin: 0 0 10px; font-size: 14px; color: #444;"><strong>👤 Лідер:</strong> {{ selectedTeam.lead }}</p>
            <p style="margin: 0 0 10px; font-size: 14px; color: #444;"><strong>📚 Предмет:</strong> {{ selectedTeam.course }}</p>
            <p style="margin: 0 0 10px; font-size: 14px; color: #444;"><strong>👥 Учасники:</strong> {{ selectedTeam.members.length }}/{{ selectedTeam.maxMembers }}</p>
            <p style="margin: 0 0 10px; font-size: 14px; color: #444;"><strong>💻 Стек:</strong> {{ selectedTeam.stack }}</p>
            <p style="margin: 0 0 20px; font-size: 14px; color: #444;"><strong>📄 Деталі:</strong> {{ selectedTeam.details }}</p>

            <div v-if="applySuccess" style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 12px; text-align: center; color: #16a34a; margin-bottom: 12px; font-size: 14px;">✅ Заявку подано!</div>

            <button
              v-if="selectedTeam.members.length < selectedTeam.maxMembers && !applySuccess"
              @click="applyToTeam(selectedTeam)"
              :disabled="applying"
              style="width: 100%; background: #c0392b; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: 700; cursor: pointer;"
            >
              {{ applying ? 'Надсилання...' : 'Подати заявку' }}
            </button>
            <div v-else-if="selectedTeam.members.length >= selectedTeam.maxMembers" style="text-align: center; color: #999; font-size: 13px; padding: 12px; background: #f8f9fa; border-radius: 8px;">Команда укомплектована</div>
          </div>
          <div v-else style="background: white; border-radius: 12px; padding: 40px; text-align: center; border: 2px dashed #ddd; color: #999;">
            <div style="font-size: 2rem; margin-bottom: 12px;">👈</div>
            <p style="margin: 0; font-size: 14px;">Обери команду зі списку</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>