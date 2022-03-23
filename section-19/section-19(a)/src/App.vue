<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed ,watch,provide} from 'vue';
import UserData from './components/UserData.vue'

export default {
  components :{
     UserData
  },
  setup() {
    //const uName = ref('Maximilian');
    const uAge = ref(21);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name : 'Rutvik',
    //   age: 21
    // })

    
    provide('user-age',uAge)


    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge,uName],function(_,oldValues) {
      console.log('old value' + oldValues[0])
      // console.log('new value' + newValues[0])
      // console.log('old name' + oldValues[1])
      // console.log('new name' + newValues[1])
    })

    function setNewAge() {
      uAge.value = uAge.value + 1;
    }

    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }
    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }
    return {
      userName:uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,setLastName
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
