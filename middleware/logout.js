export default defineNuxtRouteMiddleware((to,from)=>{
    const status=logInStatus();
    if(status.value===true){
        navigateTo("/")
    }
})