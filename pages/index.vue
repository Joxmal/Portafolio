<template>
  <div class="w-full md:w-[740px] mx-auto">
    <!-- <EnvioCorreoTest></EnvioCorreoTest> -->
    <section class="pt-14 md:pt-32" v-motion="motionFadeUpDelayOld" id="inicio">
      <div class="flex gap-4">
        <img
          class="rounded-full size-24 mb-4 md:size-12"
          alt="foto José Montes"
          src="/yo.jpg"
        />
        <a
          class="justify-center items-center md:hidden flex"
          href="https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/"
          target="_blank"
          rel="noopener"
        >
          <Badge class="text-lg">Disponible para trabajar</Badge>
        </a>
      </div>

      <div
        class="text-black dark:text-white font-bold justify-start flex flex-col-reverse md:flex-row gap-x-4 pb-10"
      >
        <h1 class="text-3xl md:text-5xl">Hola, soy José Montes</h1>
        <a
          class="justify-center items-center hidden md:flex"
          href="https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/"
          target="_blank"
          rel="noopener"
        >
          <Badge class="">Disponible para trabajar </Badge>
        </a>
      </div>
      <h2 class="text-2xl opacity-85 text-wrap">
        <span></span>
        <span class="text-blue-700 dark:text-yellow-200/90"
          >Desarrollador Web frontEnd</span
        >
        <span class="text-purple-700 dark:text-sky-400">
          de Aragua Venezuela</span
        >
        <span
          class="dark:opacity-75 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
        >
          especializado en crear soluciones
        </span>
      </h2>

      <nav class="flex flex-wrap gap-x-3 gap-y-2 mt-8">
        <a
          v-for="(link, index) in LinksNav"
          :key="index"
          class="rounded-full border border-black dark:border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:bg-white/10 hover:scale-110 transition"
          target="_blank"
          :href="link.href"
        >
          <Icon :name="link.iconName" class="text-2xl" :class="link.bg" />
          {{ index }}
        </a>

        <div
          class="rounded-full border border-black dark:border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:bg-white/10 transition"

        >
        <a
          target="_blank"
          href="mailto:joxmal123@gmail.com"
         >
          <Icon name="icomoon-free:mail" class="text-2xl dark:text-white " />
          joxmal123@gmail.com
        </a>

          <IconPopover
            targetID="contacto"
            content="copiar"
            name-icon="mingcute:copy-line"
            @evento="copiarTexto({texto:'joxmal123@gmail.com'})"
            class="size-4"
            class-container="h-4 flex items-center justify-center cursor-pointer"
          />
        </div>
      </nav>
    </section>

    <section
      class="my-20 pb-24"
      id="experiencia"
      v-motion="motionFadeUpDelayOld"
    >
      <div
        class="ml-4 mb-4 block min-[305px]:flex sm:items-center sm:justify-start gap-2"
      >
        <h2 class="text-2xl font-semibold block items-center gap-3 text-pretty">
          Experiencia Laboral
        </h2>
        <Icon name="uil:suitcase-alt" class="text-3xl" />
      </div>
      <Experiencia class="mx-4">
        <ExperienciaItem
          titulo="Alcaldía de Turmero-Aragua"
          sub-titulo="Desde Agosto de 2022 ( 1 año de experiencia )"
          descripsion="Me encargo crear aplicaciones de uso interno para los diferentes eventos que se presentan, aumentando el valor el departamento de Informática"
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

    <section class="my-20 " id="proyectos">
      <div class="ml-4 mb-4 flex items-center start-0 gap-2">
        <h2 class="text-2xl font-semibold">Proyectos</h2>
        <Icon name="octicon:project-symlink-16" class="text-2xl"></Icon>
      </div>

      <div class="flex flex-col gap-y-4">

        <CardsProyecto
          titulo="Sistema de gestión interna oficina de alcaldía santiago Marino Aragua"
          descripsion="Creado con la finalidad de optimizar las tareas diarias y actividades realizadas por el departamento de informática, gracias a esto se mejoró el rendimiento un 50%"
          :imagenes="proyectos.SGI.imagenes"
        >
          <template #iconos>
            <IconPopover
              targetID="sgiOficina"
              nameIcon="mdi:vuetify"
              content="Vuetify"
              class="text-blue-500 stroke-black stro"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="simple-icons:pocketbase"
              content="Pocketbase"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="devicon:tailwindcss"
              content="Tailwind"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="logos:nuxt-icon"
              content="Nuxt"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="vscode-icons:file-type-html"
              content="HTML"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="logos:css-3"
              content="CSS"
            />
            <IconPopover
              targetID="sgiOficina"
              nameIcon="devicon:javascript"
              content="JavaScript"
            />
          </template>
        </CardsProyecto>


        <CardsProyecto
          titulo="Proyecto Personal para guardar inmuebles"
          descripsion="Creado con la finalidad de recordar y guardar datos relacionados a los inmuebles para luego evaluar dichos datos dependiendo de las circunstancias"
          :imagenes="proyectos.casas.imagenes"
        >
          <template #iconos>
            <IconPopover
              targetID="inmuebles"
              nameIcon="devicon:quasar"
              content="Quasar"
            />
            <IconPopover
              targetID="inmuebles"
              nameIcon="simple-icons:pocketbase"
              content="Pocketbase"
            />
            <IconPopover
              targetID="inmuebles"
              nameIcon="devicon:tailwindcss"
              content="Tailwind"
            />
            <IconPopover
              targetID="inmuebles"
              nameIcon="vscode-icons:file-type-html"
              content="HTML"
            />
            <IconPopover
              targetID="inmuebles"
              nameIcon="logos:css-3"
              content="CSS"
            />
            <IconPopover
              targetID="inmuebles"
              nameIcon="devicon:javascript"
              content="JavaScript"
            />
          </template>
        </CardsProyecto>

        <CardsProyecto
          titulo="Blog personal sobre VueJS"
          descripsion="Con la finalidad de aprender, practicar y mejorar cree un blog de uso personal que uso para documentar la información sobre el framework VueJS"
          :imagenes="proyectos.blog.imagenes"
        >
          <template #iconos>
            <IconPopover
              targetID="blogPersonal"
              nameIcon="devicon:vuejs"
              content="VUEJS"
            />
            <IconPopover
              targetID="blogPersonal"
              nameIcon="devicon:tailwindcss"
              content="Tailwind"
            />
            <IconPopover
              targetID="blogPersonal"
              nameIcon="vscode-icons:file-type-html"
              content="HTML"
            />
            <IconPopover
              targetID="blogPersonal"
              nameIcon="logos:css-3"
              content="CSS"
            />
            <IconPopover
              targetID="blogPersonal"
              nameIcon="devicon:javascript"
              content="JavaScript"
            />
          </template>
        </CardsProyecto>

        <CardsProyecto
          titulo="Blog laboral para la oficina de Informática"
          descripsion="Proyecto Personal Con el fin de realizar una documentación de los conceptos, actividades y gestiones diarias cree un blog que logro agilizar la obtención de la información que no se encontraba debidamente almacenada para guardar inmuebles"
          :imagenes="proyectos.blogOficina.imagenes"
        >
          <template #iconos>
            <IconPopover
              targetID="blogOficina"
              nameIcon="devicon:vuejs"
              content="VuejS"
            />
            <IconPopover
              targetID="blogOficina"
              nameIcon="devicon:tailwindcss"
              content="Tailwind"
            />
            <IconPopover
            nameIcon="vscode-icons:file-type-html"
            content="HTML"
            target-i-d="Tailwind"
            />
            <IconPopover
              targetID="blogOficina"
              nameIcon="logos:css-3"
              content="CSS"
            />
            <IconPopover
              targetID="blogOficina"
              nameIcon="devicon:javascript"
              content="JavaScript"
            />
          </template>
        </CardsProyecto>
      </div>
    </section>

    <section class="my-20 pb-12 flex flex-col gap-y-4 text-lg text-pretty border-2 shadow-xl dark:shadow-blue-500 dark:border-yellow-400 p-4 rounded-xl bg-white dark:bg-gray-500/40 relative" id="sobreMi" > 
      <img class="absolute -right-8 top-0 w-24 rotate-45" src="/muchoTexto.png" alt="imagen de mucho texto meme">
      <div class="">
   
          <img src="/yo.jpg" alt="mi imagen" class="size-36 rounded-full float-left m-2">
  
        
        <p>
          ¡Hola! Soy José, un desarrolladxor web junior frontend con 1 año de experiencia en una institución gubernamental. Mi pasión por la programación y mi dedicación me han permitido adquirir habilidades en varios lenguajes de programación, como JavaScript, CSS, HTML, Vue.js, Nuxt, Quasar, Node y TypeScript.
        </p>
      </div>


      <p>
        Durante mi tiempo en la institución gubernamental, participé en proyectos desafiantes y enriquecedores que me permitieron aplicar mis conocimientos y desarrollar soluciones creativas. Además, he trabajado en 2 proyectos personales que me han permitido explorar mi creatividad y ampliar mis habilidades técnicas.
      </p>
        
      <p>
        Mi enfoque en el desarrollo frontend se centra en crear experiencias de usuario atractivas y funcionales. Me apasiona el diseño web y la creación de interfaces intuitivas y atractivas. Además, tengo habilidades en el desarrollo de aplicaciones web responsivas y amigables para dispositivos móviles.
      </p>

      <p>
        Estoy emocionado de seguir creciendo en mi carrera como desarrollador web y estoy abierto a nuevas oportunidades desafiantes.
      </p>
  

      
    </section>
  </div>

  <!-- <div
        class="bg-red-400"
      v-motion="motionFadeUpDelay">
      Hello
    </div> -->
</template>

<script setup>
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { initCarousels, initPopovers } from "flowbite";
import {
  motionFadeUpDelay,
  motionFadeUpDelayOld,
  motionFadeUpDelay1000
} from "../assets/animations/VueUseMotion.js";


const copiarTexto =  ({ texto = "correo" }) => {
  navigator.clipboard.writeText(texto);
  toastr.success('!copiado con exito')
};

onMounted(() => {
  initCarousels();
  initPopovers();
});

useHead({
  htmlAttrs: {
    lang: "es",
  },
});

useSeoMeta({
  title: "Portafolio de José Montes programador Front End",
  description:
    "Soy un desarrollador Junior con 1 año de experiencia que siempre busca una solución óptima que satisfaga las necesidades",
});

const LinksNav = {
  linkedin: {
    iconName: "mdi:linkedin",
    bg: "text-sky-500",
    href: "https://www.linkedin.com/in/jos%C3%A9-rafael-montes-gonzalez-746977278/",
  },
  github: {
    iconName: "mdi:github",
    bg: "dark:text-white",
    href: "https://github.com/Joxmal",
  },
};

//imagenes de los proyecyos

const proyectos = {
  SGI: {
    imagenes: {
      1: {
        src: "/proyectos/SGI/pantalla1.jpg",
        alt: "imagen de la administracion de las asistencias diarias de cada trabajador ",
      },
      2: {
        src: "/proyectos/SGI/pantalla2.jpg",
        alt: "imagen de la administracion de las asistencias diarias de cada trabajador ",
      },
      3: {
        src: "/proyectos/SGI/pantalla3.jpg",
        alt: "imagen de la administracion de las asistencias diarias de cada trabajador ",
      },
      4: {
        src: "/proyectos/SGI/pantalla4.jpg",
        alt: "imagen de la administracion de las asistencias diarias de cada trabajador ",
      },
    },
  },
  casas: {
    imagenes: {
      1: {
        src: "/proyectos/casas/pantalla1.jpg",
        alt: "imagen del login ",
      },
      2: {
        src: "/proyectos/casas/pantalla2.jpg",
        alt: "imagen de la seleccion ",
      },
      3: {
        src: "/proyectos/casas/pantalla3.jpg",
        alt: "imagen detallada de cada casa",
      },
    },
  },
  blog: {
    imagenes: {
      1: {
        src: "/proyectos/blog/pantalla1.jpg",
        alt: "pantalla del blog personal ",
      },
      2: {
        src: "/proyectos/blog/pantalla2.jpg",
        alt: "pantalla del blog personal ",
      },
      3: {
        src: "/proyectos/blog/pantalla3.jpg",
        alt: "pantalla del blog personal ",
      },
      4: {
        src: "/proyectos/blog/pantalla4.jpg",
        alt: "pantalla del blog personal ",
      },
      5: {
        src: "/proyectos/blog/pantalla5.jpg",
        alt: "pantalla del blog personal ",
      },
    },
  },
  blogOficina: {
    imagenes: {
      1: {
        src: "/proyectos/blogOficina/pantalla1.jpg",
        alt: "blog de oficina ",
      },
      2: {
        src: "/proyectos/blogOficina/pantalla2.jpg",
        alt: "blog de oficina",
      },
      3: {
        src: "/proyectos/blogOficina/pantalla3.jpg",
        alt: "blog de oficina ",
      },
    },
  },
};
</script>

<style scoped>


</style>
