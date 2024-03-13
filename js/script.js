const { createApp } = Vue;

createApp({
    
    data() {
       
        return{

            toDoList: [
                `Fare la to-do-list`,
                `Giocare a playstation`,
                `Sfamare la gatta infame`,
                `Mangiare il crostone pesto e gorgonzola`,
                `Ubriacarsi molestamente al bar`
            ],

            newTask: ``,
        }
    },

    methods:{
        
        addTask(){
            this.toDoList.unshift(this.newTask)
            this.newTask = ``;
        },

        deleteTask(index) {
            this.toDoList.splice(index,1)
        }
    }

}).mount(`#app`);