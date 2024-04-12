<script setup>
import { portText } from "@/constants/index";
</script>

<template>
  <section id="port">
    <div class="port__inner">
      <div class="port__title">portfolio <em>포폴 작업물</em></div>
      <div class="port__wrap">
        <div class="port__item" v-for="(port, key) in portText" :key="key">
          <span class="num">{{ port.num }}.</span>
          <img :src="port.img" :alt="port.name" />
          <h3 class="title">{{ port.title }}</h3>
          <p class="desc">{{ port.desc }}</p>
          <a :href="port.view" target="_blank" class="site">사이트 보기</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  // Vue 컴포넌트의 라이프사이클 훅 중 하나인 mounted에서 scrollAnimation() 메서드를 호출합니다.
  // mounted 훅은 컴포넌트가 화면에 마운트(렌더링)된 직후에 호출되는 훅입니다.
  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      //gsap.utils.toArray(".port__item")를 사용하여 클래스가
      //"port__item"인 요소들을 선택하여 배열로 가져옵니다.
      const horSection = gsap.utils.toArray(".port__item");

      gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#port",
          start: "top 56px",
          end: "+=3000",
          pin: true,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true, //스크롤 트리거를 새로 고칠 때마다 트리거를 다시 설정합니다.
          anticipatePin: 1, //고정(pinned)된 요소의 이동을 어느 정도 예상하여 부드러운 스크롤링을 제공합니다.
        },
      });
    },
  },
};
</script>
