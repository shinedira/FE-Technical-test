<template>
  <div class="main-content">
    <Component
      :is="findComponent(component.component_name)"
      v-for="component in components"
      :model="component.model"
    />
  </div>
</template>

<script lang="ts" setup>
const { components } = useHome();

const resolveComponents = [
  { name: "ComponentOne", component: resolveComponent("ComponentOne") },
  { name: "ComponentTwo", component: resolveComponent("ComponentTwo") },
  { name: "ComponentThree", component: resolveComponent("ComponentThree") },
  { name: "ComponentFour", component: resolveComponent("ComponentFour") },
  { name: "ComponentFive", component: resolveComponent("ComponentFive") },
  { name: "ComponentSix", component: resolveComponent("ComponentSix") },
];

const findComponent = (name: string) =>
  resolveComponents.find((component) => component.name === name)?.component;

onMounted(() => {});
</script>
