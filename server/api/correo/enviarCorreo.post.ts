import { Resend } from 'resend';


const resend = new Resend(useRuntimeConfig().RESEND_API_KEY);
export default defineEventHandler(async (event) => {
  console.log('ejecutado')
  try {
    const {mensajeInput} = await readBody(event)

    const data = await resend.emails.send({
      from: 'correContenido <onboarding@resend.dev>',
      to: ['joxmal123@gmail.com'],
      subject: 'hola que tal',
      html: `<strong>${mensajeInput}</strong>`,
    });
    console.log('correo enviado')
   return data
    
  } catch (error) {
    return { error };
  }
});

// export default defineEventHandler(async(event) => {

//   // const body = await readBody(event)

//   const datos = event.context.params
//   console.log(datos)
//   return 'los datos son'+ datos
//   // const name =  getRouterParam(event, 'enviar')
    



// })