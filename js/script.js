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
                this.nodes.push({
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
                for (const ind in i) {
                    if (i[ind] == this.searchValue) {
                        return i;
                    }
                    if (i[ind] + i[ind + 1] == this.searchValue) {
                        return i;
                    }
                    if (i == this.searchValue) {
                        return i;
                    }
                }

            });

        }
    }
}

Vue.createApp(app).mount('#co');
