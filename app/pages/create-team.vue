<script setup>
import { ref } from 'vue'

const form = ref({ name: '', description: '', lead: '', stack: '', details: '' })
const isSubmitting = ref(false)

const submitTeam = async () => {
  if (!form.value.name || !form.value.lead) {
    alert('Назва та Куратор є обов\'язковими!')
    return
  }
  isSubmitting.value = true

  // Надсилаємо дані на бекенд
  await $fetch('/api/teams', {
    method: 'POST',
    body: form.value
  })

  // Перекидаємо назад на сторінку команд
  navigateTo('/teams')
}
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif; max-width: 600px; margin: 0 auto;">
    <NuxtLink to="/teams" style="color: #64748b; text-decoration: none; margin-bottom: 20px; display: inline-block;">
      ⬅ Повернутися до списку
    </NuxtLink>

    <h1>Створення команди</h1>
    
    <div style="display: flex; flex-direction: column; gap: 15px; background: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
      <div>
        <label style="font-weight: bold; display: block; margin-bottom: 5px;">Назва команди *</label>
        <input v-model="form.name" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-weight: bold; display: block; margin-bottom: 5px;">Куратор *</label>
        <input v-model="form.lead" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-weight: bold; display: block; margin-bottom: 5px;">Опис</label>
        <input v-model="form.description" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-weight: bold; display: block; margin-bottom: 5px;">Стек технологій</label>
        <input v-model="form.stack" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-weight: bold; display: block; margin-bottom: 5px;">Деталі</label>
        <textarea v-model="form.details" rows="4" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box;"></textarea>
      </div>
      <button @click="submitTeam" :disabled="isSubmitting" style="margin-top: 10px; background: #3b82f6; color: white; padding: 12px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
        {{ isSubmitting ? 'Збереження...' : 'Створити команду' }}
      </button>
    </div>
  </div>
</template>