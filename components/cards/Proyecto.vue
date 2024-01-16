<template>
    

<div class="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden rounded-lg">

    <div id="gallery" class="relative w-full overflow-hidden" data-carousel="slide" data-carousel-interval="3000">
        <!-- Carousel wrapper -->
        <div v-if="props.imagenes" class="relative h-56   md:h-96" >
            <!-- Item 1 -->

            <div  v-for="imagen in props.imagenes " class="hidden duration-700 ease-in-out " data-carousel-item >
                <img :src="imagen.src" class="absolute object-cover w-full h-full block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="imagen.alt">
            </div>
 

        </div>
        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-green-800/80 group-hover:bg-white/50 dark:group-hover:bg-green-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Anterior</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-green-800/80 group-hover:bg-white/50 dark:group-hover:bg-green-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Siguiente</span>
            </span>
        </button>
    </div>





    

    <div class="p-5 ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.titulo }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ props.descripsion }}
        </p>
        <div class="flex justify-center items-center flex-col">
            <h1 class="text-xl font-semibold self-start p-1 px-2 border-b-2 border-blue-500 w-fit  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">tecnologías</h1>
            <div class="flex  gap-x-5 pt-4">
                <slot name="iconos" >

                </slot>
            </div>
                

        </div>


        <a v-if="props.hrefProyecto" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Saber mas
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



</template>


<script setup>


const props = defineProps([
    'titulo',
    'descripsion',
    'imagenes',
    'hrefProyecto'
    
])



</script>