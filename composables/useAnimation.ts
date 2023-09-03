export const useAnimation = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  const gsap = (action: "set" | "to" | "from", el: any, opts: {}) => {
    $gsap[action](el, opts);
  };
  const gsapFrom = (el: any, opts: {}) => {
    return gsap("from", el, opts);
  };

  const gsapTo = (el: any, opts: {}) => {
    return gsap("to", el, opts);
  };

  const gsapSet = (el: any, opts: {}) => {
    return gsap("set", el, opts);
  };

  return {
    scrollTrigger: $ScrollTrigger,
    gsap,
    gsapFrom,
    gsapTo,
    gsapSet,
  };
};
