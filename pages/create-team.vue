<script setup>
const form = ref({ name: '', description: '', lead: '', stack: '', details: '', course: '', maxMembers: 4 })
const loading = ref(false)
const error = ref('')
const success = ref(false)

const submit = async () => {
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/teams', { method: 'POST', body: form.value })
    success.value = true
  } catch (e) {
    error.value = e.data?.message || 'Помилка створення команди'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style="min-height: 100vh; background: #f8f9fa;">
    <div style="max-width: 560px; margin: 60px auto; padding: 0 20px;">
      <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <h1 style="margin: 0 0 8px; font-size: 1.8rem; color: #1a1a1a;">Створити команду</h1>
        <p style="margin: 0 0 32px; color: #666; font-size: 14px;">Заповни дані та знайди напарників</p>

        <div v-if="success" style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; text-align: center; color: #16a34a;">
          ✅ Команду створено!
          <NuxtLink to="/teams" style="color: #c0392b; display: block; margin-top: 8px;">Переглянути каталог →</NuxtLink>
        </div>

        <div v-else>
          <div v-if="error" style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px; color: #dc2626; margin-bottom: 20px; font-size: 14px;">{{ error }}</div>

          <div v-for="field in [
            { key: 'name', label: 'Назва команди', placeholder: 'Lanka Dev Team' },
            { key: 'description', label: 'Опис', placeholder: 'Коротко про команду...' },
            { key: 'lead', label: 'Лідер', placeholder: 'Ваше імя' },
            { key: 'course', label: 'Предмет', placeholder: 'Конструювання ПЗ' },
            { key: 'stack', label: 'Стек технологій', placeholder: 'Vue, Node.js, PostgreSQL' },
            { key: 'details', label: 'Кого шукаєте', placeholder: 'Шукаємо Frontend розробника...' },
          ]" :key="field.key" style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #374151;">{{ field.label }}</label>
            <input v-model="form[field.key]" :placeholder="field.placeholder" style="width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;" />
          </div>

          <div style="margin-bottom: 24px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #374151;">Макс. учасників</label>
            <input v-model.number="form.maxMembers" type="number" min="2" max="8" style="width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;" />
          </div>

          <button @click="submit" :disabled="loading" style="width: 100%; background: #c0392b; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: 700; cursor: pointer;">
            {{ loading ? 'Створення...' : 'Створити команду' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>