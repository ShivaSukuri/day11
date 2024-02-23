// export default defineNuxtRouteMiddleware((to,from)=>{
//     const user=users();
//     console.log(user.value)
//    for(let x of user.value){
//     console.log(x.status);
//     if(x.status===false && to.path!=="/login"){
//         navigateTo("/login");
     
//     }
//    }
// })
export default defineNuxtRouteMiddleware((to,from)=>{
    const status=logInStatus();
    console.log(status.value)
    if(status.value===false && to.path!=="/login"){
        return navigateTo("/login")
    }
    
   
   
})