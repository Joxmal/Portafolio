<template>
  <div>
    <section class="w-full md:w-[740px] mx-auto py-20 md:py-44 " >
      <div class="flex gap-4">
        <img class=" rounded-full size-24 mb-4 md:size-12" alt="foto José Montes" src="/yo.jpg">
        <a 
        class="justify-center items-center md:hidden flex" 
        href="https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/" 
        target="_blank"
        rel="noopener"
        >
          <Badge class="text-lg">Disponible para trabajar</Badge>
        </a>
      </div>


      <h1 class="text-black dark:text-white text-5xl font-bold justify-start flex flex-col-reverse md:flex-row gap-x-4 pb-10">
        <div>Hola, soy José Montes</div>
        <a 
        class="justify-center items-center hidden md:flex" 
        href="https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/" 
        target="_blank"
        rel="noopener"
        >
          <Badge class="">Disponible para trabajar </Badge>
        </a>
      </h1>
      <h2 class="text-2xl opacity-85 text-wrap">
        <span></span>
        <span class="text-blue-700 dark:text-yellow-200/90">Desarrollador Web frontEnd</span>
        <span class="text-purple-700 dark:text-sky-400"> de Aragua Venezuela</span> 
        <span class=" dark:opacity-75 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          especializado en crear soluciones
        </span>
      </h2>
      
      <nav class="flex flex-wrap gap-x-3 gap-y-2 mt-8">
        <a v-for="(link,index) in LinksNav" :key="index"
          class="rounded-full border border-black dark:border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:bg-white/10 hover:scale-110 transition" 
          target="_blank"
          :href="link.href" >
          <Icon :name="link.iconName" class=" text-2xl" :class="link.bg" />
          {{ index }}
        </a>
      </nav>
    </section>
    
    <section>
      <Experiencia  class="mx-4">
        <ExperienciaItem 
          titulo="Alcaldía de Turmero-Aragua"
          sub-titulo="Desde Agosto de 2022 ( 1 año de experiencia )"
          descripsion="Me encargué crear aplicaciones de uso interno para los diferentes eventos que se presentaban, aumentando el valor el departamento de Informática"
          href="sd"
          hrefTitle="Proyectos"
          />
          <ExperienciaItem 
          titulo="Siempre en Creciemiento"
          sub-titulo="Todos lo diás"
          descripsion="Día a día mantengo una constante disciplina para mejorar como desarrollador y como persona"
          />
      </Experiencia>

    </section>
  </div>


    <!-- <div
        class="bg-red-400"
      v-motion="motionFadeUpDelay">
      Hello
    </div> -->

</template>
  
<script setup>
// import {motionFadeUpDelay} from '/assets/Animations/VueUseMotion'

useSeoMeta({
  title:'Portafolio de José Montes programador Front End',
  description:'Soy un desarrollador Junior con 1 año de experiencia que siempre busca una solución óptima que satisfaga las necesidades'
})

const LinksNav ={
  linkedin:{
    iconName:'mdi:linkedin',
    bg: 'text-sky-500',
    href:'https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/'
  },
  github:{
    iconName:'mdi:github',
    bg: 'dark:text-white',
    href:'https://github.com/Joxmal'
  },
  'joxmal123@gmail.com':{
    iconName:'icomoon-free:mail',
    bg: 'dark:text-white',
    href:'https://github.com/Joxmal'
  }

}
</script>



<style scoped>


</style>