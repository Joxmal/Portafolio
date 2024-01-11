<template>
<div class="hidden dark:block fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
<div class="dark:hidden fixed inset-0 -z-10 h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#63E000_100%)]"></div>

<div class="py-5 max-w-[1120px] h-full text-black dark:text-white mx-auto px-4">
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
body{
    @apply dark:bg-black bg-sky-200 ;
    font-family: 'Onest Variable', sans-serif;
}
</style>