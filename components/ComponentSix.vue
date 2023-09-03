<template>
  <section class="section-six">
    <div class="container">
      <Swiper
        :modules="[SwiperPagination]"
        :pagination="{ clickable: true, el: '.slide-six' }"
      >
        <SwiperSlide v-for="slide in model.dataSlider">
          <div class="flex flex-column align-center">
            <p v-html="slide.description"></p>
            <small v-html="slide.title"></small>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="slide-six"></div>
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
  console.log(props.model);
});
</script>

<style lang="scss">
.section-six {
  padding: 100px 0;
  background-color: #f0f0f5;

  @include phone {
    padding: 25px 20px;
  }

  .container {
    position: relative;
    height: 100%;
    padding: 0 17rem;
    text-align: center;
    color: #5f5c68;

    @include phone {
      padding: 0;
    }

    & p {
      font-family:
        Playfair Display,
        serif;
      font-size: 16px;
      font-weight: 400;
      width: 50%;
      letter-spacing: 0.5px;
      line-height: 1.5;
      margin-bottom: 25px;

      @include phone {
        width: 100%;
      }
    }

    & small {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.5px;
      line-height: 1.5;
      margin-bottom: 50px;
    }
  }
}
</style>
