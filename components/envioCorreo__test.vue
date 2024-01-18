<template>
<div class="flex flex-col my-10 gap-4 text-black">

    <form @submit.prevent ref="formulario">
        <input type="text" v-model="mensajeInput" :is="componenKey" dis>


        <button
          class="p-2 bg-blue-100 "
          type="submit"
          @click.once="enviarCorreo"
         >
            enviar correo
        </button>

    </form>


</div>
---
<pre>

    {{ dato }}
</pre>
{{ componenKey }}
</template>


<script setup>

const mensajeInput = ref()
const formulario =ref()

const datos =  ref({
    mensaje:'dato'
})

const dato = ref()

//  async function enviarCorreo(){
//     try {
//         const { data } = await useFetch(async()=>{
//        const response = await fetch('/api/correo/enviarCorreo',{
//            method:'POST',
//            headers:{'Content-Type': 'application/json'},
//            body: JSON.stringify({ miMensaje: 'Hola, servidor!' })
//        })
//        console.log(await data.value)
//        })
        
//     } catch (error) {
//         console.log(error)
//     }

// }

const componenKey = ref(0)
async function enviarCorreo(){
    
    const { data, } = await useFetch('/api/correo/enviarCorreo',{
        method: 'post',
        body: {mensajeInput}
    })
    dato.value = data.value
    console.log(data.value)
    
    componenKey.value++
    formulario.value.children[0].setAttribute('disabled','')
}
</script>