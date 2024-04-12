<script setup>
import { skillText } from "@/constants/index";
</script>

<template>
  <section id="skill">
    <div class="skill__inner">
      <h2 class="skill__title">Challenge<em>나의 도전</em></h2>
      <div class="skill_desc">
        <div v-for="(text, key) in skillText" :key="key">
          <span>{{ key + 1 }}.</span>
          <h3>{{ text.title }}</h3>
          <p>
            {{ text.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
