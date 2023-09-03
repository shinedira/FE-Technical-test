<template>
  <section class="section-three">
    <div class="container">
      <div class="caption flex flex-column justify-end" v-animate-slide-bottom>
        <h1 v-html="model.title"></h1>
        <p v-html="model.description"></p>
      </div>
      <div
        class="container-image flex justify-center"
        @mouseover="onEnter"
        @mouseleave="onLeave"
      >
        <div class="image-wrapper" v-for="slide in model.dataSlider">
          <a href="">
            <img :src="parseImage(slide.featured_hover)" class="hover-img" />
            <img :src="parseImage(slide.featured)" class="main-img" />
          </a>
          <h4 class="title">{{ slide.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PropType } from "@vue/runtime-core";
import { BaseModel } from "~/types/home";

const props = defineProps({
  model: {
    type: Object as PropType<BaseModel>,
    required: true,
  },
});

const { gsapTo } = useAnimation();

const onEnter = () => {
  gsapTo(".main-img", { duration: 1, filter: "blur(5px)" });
  gsapTo(".hover-img", { xPercent: 0, ease: "sine.inOut" });
  gsapTo(".title", { opacity: 0.5, ease: "sine.inOut" });
};

const onLeave = () => {
  gsapTo(".main-img", { duration: 1, filter: "blur(0px)" });
  gsapTo(".hover-img", { xPercent: -101, ease: "sine.inOut" });
  gsapTo(".title", { opacity: 1, ease: "sine.inOut" });
};

onMounted(() => {
  onLeave();
});
</script>

<style lang="scss" scoped>
$bg-color: #5f5c68;
$color-description: #d8d6e2;

.section-three {
  padding: 150px 0;
  background-color: $bg-color;

  @include phone {
    padding: 25px 25px 50px;
  }

  & .container {
    padding: 0 17rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    @include phone {
      padding: 0;
    }

    & .caption {
      margin-left: auto;
      color: $white;
      width: 50%;

      @include phone {
        width: 100%;
      }

      & h1 {
        font-weight: 400;
        font-size: 35px;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin-top: 0;
        margin-bottom: 50px;

        @include phone {
          font-size: 25px;
          margin-bottom: 25px;
        }
      }

      & p {
        color: $color-description;
        font-size: 14px;
        letter-spacing: 1px;

        @include phone {
          font-size: 13px;
        }
      }
    }

    &-image {
      z-index: 2;
      margin-top: 20px;
      gap: 0.4rem;

      @include phone {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      & .image-wrapper {
        position: relative;
        aspect-ratio: 2.25 / 3;
        max-height: 250px;
        overflow: hidden;

        @include phone {
          aspect-ratio: 3 / 1.3;
        }

        & .hover-img {
          position: absolute;
          z-index: 2;
        }

        & .title {
          z-index: 2;
          position: absolute;
          bottom: 15%;
          margin: 0 auto;
          left: 50%;
          transform: translateX(-50%);
          color: $white;
          font-size: 9px;
          line-height: 30px;
          text-align: left;
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 2px;
        }

        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
