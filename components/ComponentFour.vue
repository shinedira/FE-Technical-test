<template>
  <section class="section-four">
    <div class="container flex">
      <div class="image-wrapper">
        <img :src="parseImage(model.featured)" v-animate-parallax />
      </div>
      <div class="caption">
        <h1
          v-html="model.title_one"
          class="title-one"
          v-animate-slide-bottom
        ></h1>
        <h1
          v-html="model.title_two"
          class="title-two"
          v-animate-slide-bottom
        ></h1>
        <p v-html="model.description"></p>
        <div class="caption-wrapper-link" v-magnet v-animate-slide-bottom>
          <a :href="model.link?.url">
            {{ model.link.title }}
          </a>
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

onMounted(() => {
  // console.log(window.screenY);
});
</script>

<style lang="scss" scoped>
$bg-color: #f0f0f5;

.section-four {
  background-color: $bg-color;
  padding: 150px 0;

  @include phone {
    padding: 25px 20px 115%;
  }

  .container {
    position: relative;
    height: 100%;
    padding: 0 17rem;

    @include phone {
      padding: 0;
    }

    & .image-wrapper {
      aspect-ratio: 2.2 / 1.45;
      margin-left: 10%;
      width: 70%;
      overflow: hidden;

      @include phone {
        width: 90%;
        margin-left: 0;
        aspect-ratio: 2 / 1.6;
      }
    }

    & .caption {
      position: absolute;
      background-color: $white;
      aspect-ratio: 1 / 1.1;
      width: 27%;
      z-index: 2;
      top: 10%;
      right: 25%;
      padding: 40px;

      @include phone {
        width: 90%;
        aspect-ratio: 1 / 1;
        padding: 50px 20px;
        top: 90%;
        left: 6%;
      }

      & .title-one {
        color: #5f5c68;
        font-size: 30px;
        font-weight: 400;
        line-height: 40px;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 0px;

        @include phone {
          font-size: 28px;
          line-height: 20px;
          letter-spacing: 2px;
        }
      }

      & .title-two {
        color: $primary;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 45px;

        @include phone {
          font-size: 28px;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }
      }

      & p {
        width: 80%;
        font-size: 14px;
        line-height: 1.8;
        font-weight: 400;
        color: #5f5c68;
        margin-bottom: 15px;

        @include phone {
          width: 100%;
          font-size: 13px;
        }
      }

      &-wrapper-link {
        position: relative;
        width: 120px;

        & a {
          text-decoration: none;
          font-size: 8px;
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
</style>
