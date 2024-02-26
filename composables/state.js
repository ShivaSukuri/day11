export const users=()=>useState(()=>[
    {
        id:1,
        name:"Shiva",
        email:"12345",
        password:"12345",
        status:false,
        cart:[],
        whishlist:[]
    }
])
export const logInStatus=()=>useState(()=>false);
export const userLogeedIn=()=>useState(()=>"")
export const id=()=>useState(()=>2);
export const product=()=>useState(()=>[])