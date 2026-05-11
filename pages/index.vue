<template>
  <div>
    <section style="background: linear-gradient(135deg, #c0392b 0%, #922b21 100%); color: white; padding: 80px 40px; text-align: center;">
      <h1 style="font-size: 3rem; font-weight: 800; margin: 0 0 16px; letter-spacing: -1px;">Знайди свою команду</h1>
      <p style="font-size: 1.2rem; opacity: 0.9; margin: 0 0 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
        Платформа пошуку команд для міждисциплінарних проєктів та практичних робіт студентів УКД
      </p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <NuxtLink to="/teams" style="background: white; color: #c0392b; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
          Переглянути команди
        </NuxtLink>
        <NuxtLink to="/create-team" style="background: transparent; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; border: 2px solid white;">
          Створити команду
        </NuxtLink>
      </div>
    </section>

    <section style="background: #f8f9fa; padding: 40px; display: flex; justify-content: center; gap: 60px; flex-wrap: wrap;">
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: #c0392b;">3+</div>
        <div style="color: #666; font-size: 14px; margin-top: 4px;">Активних команд</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: #c0392b;">5</div>
        <div style="color: #666; font-size: 14px; margin-top: 4px;">Ролей у проєктах</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: #c0392b;">УКД</div>
        <div style="color: #666; font-size: 14px; margin-top: 4px;">Університет Короля Данила</div>
      </div>
    </section>

    <section style="padding: 60px 40px; max-width: 1100px; margin: 0 auto;">
      <h2 style="text-align: center; font-size: 2rem; font-weight: 800; margin-bottom: 40px; color: #1a1a1a;">Як це працює?</h2>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
        <div style="background: white; border: 1px solid #eee; border-radius: 12px; padding: 32px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-size: 2.5rem; margin-bottom: 16px;">👤</div>
          <h3 style="margin: 0 0 12px; color: #1a1a1a;">Зареєструйся</h3>
          <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Створи профіль з навичками та факультетом</p>
        </div>
        <div style="background: white; border: 1px solid #eee; border-radius: 12px; padding: 32px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-size: 2.5rem; margin-bottom: 16px;">🔍</div>
          <h3 style="margin: 0 0 12px; color: #1a1a1a;">Знайди команду</h3>
          <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Фільтруй за предметом, роллю або стеком</p>
        </div>
        <div style="background: white; border: 1px solid #eee; border-radius: 12px; padding: 32px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-size: 2.5rem; margin-bottom: 16px;">🚀</div>
          <h3 style="margin: 0 0 12px; color: #1a1a1a;">Приєднайся</h3>
          <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">Подай заявку та починай працювати разом</p>
        </div>
      </div>
    </section>

    <footer style="background: #1a1a1a; color: #888; padding: 24px 40px; text-align: center; font-size: 13px;">
      Lanka · Університет Короля Данила · Конструювання ПЗ · 2025
    </footer>
  </div>
</template>