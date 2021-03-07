const app = {
    data () {
        return {
            counter: 'Заметки',
            plhText: 'О чём думаете?...',
            inpValue: '',
            nodes: []
        }
    },
    methods: {
        onInput(event) {
            this.inpValue = event.target.value;
        },
        onClick (event) {
            event.preventDefault();
            if (this.inpValue != '') {
                this.nodes.push(this.inpValue);
                this.inpValue = '';
                console.log(this.nodes);
            }
        },
        Delete (index) {
            this.nodes.splice(index, 1);
        }
    }
}

Vue.createApp(app).mount('#co');
