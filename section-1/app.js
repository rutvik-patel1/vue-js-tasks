const app = Vue.createApp({
   data() {
       return {
          courseGoal1:'Goal 1!!',
          courseGoal2:'<a href="https://www.google.com">Goal 2!!</a>', 
           setLink:'www.example.com'
        }
   },
   methods: {
       setCourseGoal(){
           const rand = Math.random() *10
           if(rand<5){
               return this.courseGoal1;
           }
           else{
               return this.courseGoal2;
           }
       }
   }
});

app.mount('#user-goal')