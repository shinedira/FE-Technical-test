<template>
  <section class="section-two">
    <div class="container">
      <div class="img-wrapper" v-animate-slide-bottom:options="animateImage">
        <img :src="parseImage(model.featured)" />
      </div>
      <div class="caption">
        <div
          class="caption-wrapper"
          v-animate-slide-bottom:options="animateCaption"
        >
          <h1 v-html="model.title"></h1>
          <p v-html="model.description"></p>
          <div class="caption-wrapper-link" v-magnet>
            <a :href="model.link?.url">
              {{ model.link.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType } from "@vue/runtime-core";
import { BaseModel } from "~/types/home";
import { parseImage } from "~/utils/helper";

const props = defineProps({
  model: {
    type: Object as PropType<BaseModel>,
    required: true,
  },
});

const animateImage = {
  x: -50,
  y: 0,
  opacity: 1,
  filter: "blur(5px)",
  trigger: { end: "bottom 90%", scrub: 1 },
};

const animateCaption = {
  opacity: 1,
  trigger: { scrub: 1 },
};
</script>

<style lang="scss" scoped>
.section-two {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0 100px;

  @include phone {
    height: auto;
    display: flex;
    padding: 10px 25px 30px;
  }

  & .container {
    width: 100%;
    height: 100%;
    padding: 0 20rem;
    position: relative;

    @include phone {
      display: flex;
      flex-direction: column-reverse;
      gap: 5px;
      padding: 0;
      width: auto;
    }

    & .img-wrapper {
      position: absolute;
      width: 25%;
      height: 100%;
      left: 27%;
      min-height: 250px;
      z-index: 2;
      overflow: hidden;

      @include phone {
        position: initial;
        width: 100%;
        height: 50%;
      }

      & img {
        width: 100%;
        transform: scale(1.1);
        object-fit: cover;
      }
    }

    & .caption {
      position: absolute;
      background-color: #d8d6e2;
      height: 100%;
      top: 35px;
      width: 40%;
      right: 22%;
      display: flex;
      justify-content: flex-end;

      @include phone {
        position: initial;
        background-color: transparent;
        width: 100%;
        height: 30%;
        margin-bottom: 10px;
      }

      &-wrapper {
        width: 50%;
        padding: 40px 5px;

        @include phone {
          padding: 0;
          width: 100%;
        }

        & h1 {
          font-weight: 400;
          font-size: 35px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #5f5c68;
          margin-bottom: 50px;

          @include phone {
            font-size: 30px;
          }
        }

        & p {
          width: 68%;
          font-size: 13px;
          line-height: 1.8;
          font-weight: 400;
          color: #5f5c68;

          @include phone {
            width: 100%;
            font-size: 13px;
            line-height: 1.8;
            font-weight: 400;
            color: #5f5c68;
          }
        }

        &-link {
          position: relative;
          width: 120px;

          & a {
            text-decoration: none;
            font-size: 11px;
            line-height: 2;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: $primary;

            @include phone {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
