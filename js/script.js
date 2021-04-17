const app = {
    data() {
        return {
            counter: 'Заметки',
            plhnameText: 'Название...',
            plhText: 'О чём думаете?...',
            nameValue: '',
            inpValue: '',
            nodes: [],
            searchValue: ''
        }
    },
    methods: {
        onInput(event) {
            this.inpValue = event.target.value;
        },
        onInputName(event) {
            this.nameValue = event.target.value;
        },
        onClick(event) {
            if (this.inpValue != '') {
                this.nodes.unshift({
                    name: this.nameValue,
                    node: this.inpValue
                })
                this.inpValue = '';
                this.nameValue = '';
            }
        },
        Delete(index) {
            this.nodes.splice(index, 1);
        },
        Search(event) {
            this.searchValue = event.target.value;
        }
    },

    computed: {
        evenItems() {
            if (this.searchValue == '') {
                return this.nodes.filter(i => i);
            }
            return this.nodes.filter(i => {
                i = i.name;
                for (const ind in i) {
                    // if (i[ind] == this.searchValue) {
                    //     return i;
                    // }
                    // if (i[ind] + i[ind + 1] == this.searchValue) {
                    //     return i;
                    // }
                    // if (i == this.searchValue) {
                    //     return i;
                    // }
                    if (i.indexOf(this.searchValue) != -1) {
                        return i;
                    }
                }
            })
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => json.forEach(i => {
                this.nodes.push({
                    name: i.title,
                    node: i.body
            })
        }))
    }
}

const forComp = Vue.createApp(app);

forComp.component('todo-item', {
    template: `<li>gg</li>`
})

forComp.mount('#co');

let search = document.querySelector('#search'),
    searchValue = "";
search.onblur = () => {
    searchValue = search.value;
    search.value = "";
}
search.onfocus = () => {
    search.value = searchValue;
    search.style.color = '#000';
}
