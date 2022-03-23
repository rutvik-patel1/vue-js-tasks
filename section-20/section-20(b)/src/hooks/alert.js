import { ref } from 'vue'

export default function userAlert(isVisivle=false) {
    
    const alertIsVisible = ref(isVisivle);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
    
    return [
      alertIsVisible,
      showAlert,
      hideAlert
    ];
  
}