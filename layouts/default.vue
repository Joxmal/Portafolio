<template>
<!-- <div class="hidden dark:block fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> -->
<!-- <div class="hidden dark:block fixed top-0 z-[-2] h-screen w-screen bg-blue-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> -->
<div class="fixed inset-0 -z-10 h-screen w-screen dark:items-center dark:px-5 dark:py-24 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#0EC7EC_100%)] dark:bg-transparent dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#408CD3_100%)] transition-colors duration-1000"></div>

<div class="py-5 max-w-[1120px] h-full text-black dark:text-white mx-auto px-4 ">
    <Header class=""/>
    <div class="flex flex-col justify-center ">
        <NuxtPage/>
    </div>
</div>

</template>

<script>
import '@fontsource-variable/onest';

</script>

<style>
html {
  scroll-behavior: smooth;
}


body{
    font-family: 'Onest Variable', sans-serif;
}


/* @media (prefers-reduced-motion: no-preference){
    html{
        scroll-behavior: auto;
    }
} */
</style>