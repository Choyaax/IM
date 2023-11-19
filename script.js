export default { 

    data(){
    return{
      name:'', 
      password:'', 
    };
    },
    
    methods:{
    login(){
    console.log("Testing"); 
    this.$router.push('src/homepage');
    
    }
    
    }
    }