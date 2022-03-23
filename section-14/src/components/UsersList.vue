<template>
        <transition-group tag="ul" name="user-list">
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}} </li>
        </transition-group>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users:['Rutvik','Mayank','Dhruval','John','karm','smit']
        }
    },
    methods: {
        addUser(){
            console.log('add')
            const name = this.$refs.userNameInput.value;
            this.users.unshift(name);
        },
        removeUser(user){
            this.users = this.users.filter(usr => usr !== user)
        }
    },
}
</script>

<style scoped>
ul{
    list-style:none;
    margin:0;
    padding:0;

}
li{
    border:1px solid #ccc;
    padding:1rem;
    text-align: center;
}
.user-list-enter-form{
    opacity: 0;
    transform: translateY(-300px);
}
.user-list-enter-active{
    transition: all 1s ease-out;
}
.user-list-enter-to{
    opacity: 1;
    transform: translateY(0);
}

</style>