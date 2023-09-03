<template>
  <section class="section-five">
    <img :src="parseImage(model.featured)" v-animate-parallax />
    <div class="caption">
      <h1 v-html="model.title" v-animate-slide-bottom></h1>
      <p v-html="model.description" v-animate-slide-bottom></p>
      <div class="caption-wrapper-link" v-magnet v-animate-slide-bottom>
        <a :href="model.link?.url">
          {{ model.link.title }}
        </a>
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
  // console.log(props.model);
});
</script>

<style lang="scss" scoped>
.section-five {
  position: relative;
  height: 100vh;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    transform: scale(1.1);
  }

  & .caption {
    position: absolute;
    top: 25%;
    left: 50%;
    color: white;
    z-index: 1;
    width: 100%;
    max-width: 600px;
    padding: 0 20px;

    @include phone {
      top: 30%;
      transform: translate(-35%, -50%);
    }

    & h1 {
      width: 50%;
      font-weight: 400;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 3px;
      line-height: 40px;
      margin-bottom: 50px;

      @include phone {
        width: 100%;
      }
    }

    & p {
      width: 50%;
      font-size: 10px;
      line-height: 1.8;
      font-weight: 400;
      margin-bottom: 20px;

      @include phone {
        width: 70%;
        font-size: 15px;
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
        color: $white;

        @include phone {
          font-size: 10px;
        }

        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
