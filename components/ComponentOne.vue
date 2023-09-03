<template>
  <section>
    <div class="banner">
      <!--      // switch this logo with image-->
      <!--      <h1>LOGO</h1>-->
      <Swiper
        v-animate-slide-bottom:options="{ y: 200 }"
        :allowTouchMove="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        :modules="slideModules"
        :navigation="{
          nextEl: '.nav-next',
          prevEl: '.nav-prev',
        }"
        :pagination="slidePagination"
        :speed="700"
        @swiper="initSlider"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="slide in slides">
          <div class="slide-card">
            <div class="content">
              <div class="caption">
                <h1 v-html="slide.title"></h1>
                <p>{{ slide.description }}</p>
                <a v-magnet class="btn btn-primary" :href="slide.link?.url">
                  {{ slide.link.title }}
                </a>
              </div>
            </div>
            <div class="image-wrapper" v-parallax>
              <img
                :alt="slide.title"
                :src="parseImage(slide.featured!)"
                class="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="pagination"></div>

      <div class="navigation">
        <div v-magnet class="circle-border nav-prev">
          <Icon name="heroicons:chevron-left-solid" />
        </div>
        <div v-magnet class="circle-border nav-next">
          <Icon name="heroicons:chevron-right-solid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Slider } from "~/types/home";
import { PropType } from "@vue/runtime-core";

const { gsapFrom } = useAnimation();

const props = defineProps({
  model: {
    type: Object as PropType<Slider>,
    required: true,
  },
});

const slides = computed(() => props.model?.dataSlider);
const slideModules = [SwiperPagination, SwiperNavigation, SwiperAutoplay];
const slidePagination = {
  clickable: true,
  el: ".pagination",
  horizontalClass: "swiper-pagination-bullets",
  bulletClass: "pagination-item circle-border",
  bulletActiveClass: "active",
};

const initSlider = (swiper: any) => {
  const { slides } = swiper;

  const caption = slides[0].querySelector(".caption");
  gsapFrom(caption, { x: 100, opacity: 0, ease: "power.in", duration: 1 });
};
const onSlideChange = (swiper: any) => {
  const { activeIndex, previousIndex, slides } = swiper;

  const activeSlide = slides[activeIndex];
  gsapFrom(activeSlide, {
    ease: "power.in",
    duration: 1,
    filter: "blur(10px)",
  });

  // animate caption
  const x = activeIndex > previousIndex ? "-100%" : "100%";
  const caption = activeSlide.querySelector(".caption");
  gsapFrom(caption, { x, opacity: 0, ease: "power.in", duration: 1 });
};
</script>

<style lang="scss">
.banner {
  background-color: #000;
  position: relative;

  & .slide-card {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    & .content {
      z-index: 2;
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%) translateY(0);
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @include phone {
        bottom: 20%;
      }

      & .caption {
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 480px;

        & h1 {
          font-size: 2.5rem;
          font-weight: 400;
          line-height: 1.3;
          margin: 0 auto;
          text-transform: uppercase;
          letter-spacing: 5px;

          @include phone {
            font-size: 1.2rem;
          }
        }

        & p {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.8;
          letter-spacing: 1px;
          margin: 30px auto 30px;
          max-width: 400px;

          @include phone {
            font-size: 14px;
            margin: 30px auto 40px;
          }
        }

        & a {
          capitalize: uppercase;
          padding: 10px 25px;
          border: 1px solid white;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          font-size: 11px;
          color: white;
          transition: all 0.3s ease-in-out;
          text-decoration: none;

          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }

    & .image-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      & img {
        -webkit-user-drag: none;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.1);
        filter: brightness(80%);
      }

      &:after {
        content: "";
        position: absolute;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0) 40%
        );
        z-index: 1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  & .navigation {
    position: absolute;
    right: 10%;
    z-index: 2;
    bottom: 10%;
    margin-top: -56px;
    color: $white;
    font-size: 25px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;

    & svg {
      cursor: pointer;
    }

    @include phone {
      gap: 15px;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & .pagination {
    position: absolute;
    left: 10%;
    z-index: 2;
    bottom: 10%;
    margin-top: -56px;
    display: flex;
    gap: 25px;

    @include phone {
      display: none;
    }

    &-item {
      background-color: white;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      cursor: pointer;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    & .active {
      opacity: 1;
    }
  }
}
</style>
