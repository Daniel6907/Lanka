<script setup>
const form = ref({ name: '', email: '', password: '', faculty: '', skills: '' })
const loading = ref(false)
const error = ref('')
const success = ref(false)

const submit = async () => {
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: { ...form.value, skills: form.value.skills.split(',').map(s => s.trim()).filter(Boolean) }
    })
    success.value = true
  } catch (e) {
    error.value = e.data?.message || 'Помилка реєстрації'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style="min-height: 100vh; background: #f8f9fa;">
    <div style="max-width: 480px; margin: 60px auto; padding: 0 20px;">
      <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <h1 style="margin: 0 0 8px; font-size: 1.8rem; color: #1a1a1a;">Реєстрація</h1>
        <p style="margin: 0 0 32px; color: #666; font-size: 14px;">Приєднуйся до платформи Lanka · УКД</p>

        <div v-if="success" style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; text-align: center; color: #16a34a;">
          ✅ Реєстрація успішна!
          <NuxtLink to="/teams" style="color: #c0392b; display: block; margin-top: 8px;">Перейти до команд →</NuxtLink>
        </div>

        <div v-else>
          <div v-if="error" style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px; color: #dc2626; margin-bottom: 20px; font-size: 14px;">{{ error }}</div>

          <div v-for="field in [
            { key: 'name', label: 'Імя', placeholder: 'Ваше імя', type: 'text' },
            { key: 'email', label: 'Email', placeholder: 'email@ukd.edu.ua', type: 'email' },
            { key: 'password', label: 'Пароль', placeholder: 'Мінімум 8 символів', type: 'password' },
            { key: 'faculty', label: 'Факультет', placeholder: 'ФІТ, ФЕМ...', type: 'text' },
            { key: 'skills', label: 'Навички (через кому)', placeholder: 'Vue, React, Python...', type: 'text' },
          ]" :key="field.key" style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #374151;">{{ field.label }}</label>
            <input v-model="form[field.key]" :type="field.type" :placeholder="field.placeholder" style="width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;" />
          </div>

          <button @click="submit" :disabled="loading" style="width: 100%; background: #c0392b; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 8px;">
            {{ loading ? 'Реєстрація...' : 'Зареєструватись' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>