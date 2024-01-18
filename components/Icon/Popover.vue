<template>    
  <Icon :data-popover-target="props.targetID+props.nameIcon" :name="props.nameIcon" size="35px" class="hover:cursor-pointer" :class="props.class"/>

  <div data-popover :id="props.targetID+props.nameIcon" role="tooltip" :class="classContainer" class="flex absolute z-10 invisible text-sm text-gray-500 transition-opacity duration-300  border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600">
      <div @click="$emit('evento')" class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700/65">
          <h3 class="font-semibold text-gray-900 dark:text-white">{{props.content}}</h3>
      </div>
      <div data-popper-arrow></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  nameIcon:string,
  content?:string,
  class?:string,
  classContainer?:string
  targetID:string,
}

// withDefaults es para asignar por default

const props = withDefaults(defineProps <Props>(),{
  nameIcon:'nombre del icono',
  content:'content',
  class:'class',
  targetID:'two'
})


const emits = defineEmits<{
  evento: []
}>()
</script>


