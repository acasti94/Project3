import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
    el: '#app',
    data: {
        timeInput: '',    
        timeLeft: 0,      
        interval: null    
    },
    methods: {
        startCountdown() {
            if (this.timeInput > 60 || this.timeInput <= 0) {
                alert('Please enter a time between 1 and 60 seconds.');
                return;
            }

            this.timeLeft = this.timeInput;
            clearInterval(this.interval); 

            this.interval = setInterval(() => {
                this.timeLeft--;

                if (this.timeLeft <= 0) {
                    clearInterval(this.interval);
                    alert('Time is up!');
                }
            }, 1000);
        },
        resetCountdown() {
            clearInterval(this.interval); 
            this.timeInput = '';          
            this.timeLeft = 0;            
        }
    }
});