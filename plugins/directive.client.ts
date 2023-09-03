export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("magnet", {
    mounted(el, binding) {
      const childWidth = el.clientWidth;
      const childHeight = el.clientHeight;
      const parentSize = 20;

      // crate ring parent
      const wrapper = document.createElement("div");
      wrapper.style.width = `${childWidth + parentSize}px`;
      wrapper.style.height = `${childHeight + parentSize}px`;
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.alignItems = "center";

      el.parentNode.replaceChild(wrapper, el);
      wrapper.appendChild(el);

      const { gsapTo } = useAnimation();

      // add magnet effect
      wrapper.addEventListener("mousemove", moveMagnet);
      wrapper.addEventListener("mouseleave", () => {
        gsapTo(wrapper, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
      });
    },
  });

  vueApp.directive("parallax", {
    mounted(el, binding) {
      const step = -20;
      const aggressive = 500;

      // add magnet effect
      el.addEventListener("mousemove", (e: any) => {
        const x = (e.clientX * step) / aggressive;
        const y = (e.clientY * step) / aggressive;

        const { gsapTo } = useAnimation();

        gsapTo(el, {
          x,
          y,
          duration: 0.5,
          ease: "power2.out",
          scale: 1.1,
        });
      });
    },
  });

  vueApp.directive("animate-slide-bottom", {
    mounted(el, binding) {
      const { gsapFrom, scrollTrigger } = useAnimation();

      const options = {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 0%",
          toggleActions: "play none none reverse",
          ...binding.value?.trigger,
        },
        ...binding.value,
      };

      gsapFrom(el, options);
    },
  });

  vueApp.directive("animate-parallax", {
    mounted(el, binding) {
      const { gsapFrom } = useAnimation();

      gsapFrom(el, {
        y: 100,
        yPercent: -50,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
  });
});

const moveMagnet = (e: any) => {
  const strength = 10;
  const magnet = e.currentTarget;
  const bounding = magnet.getBoundingClientRect();

  const x = ((e.clientX - bounding.left) / magnet.offsetWidth - 0.5) * strength;
  const y = ((e.clientY - bounding.top) / magnet.offsetHeight - 0.5) * strength;

  const { gsapTo } = useAnimation();

  gsapTo(magnet, { x, y, duration: 0.5, ease: "power2.out" });
};
