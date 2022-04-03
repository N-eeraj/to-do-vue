const app = Vue.createApp({
    data() {
        return {
            input: "",
            items: [],
            count: 0
        }
    },
    methods: {
        addItem() {
            if (this.input === '')
                return
            this.items.push({
                index: this.count++,
                text: this.input,
                done: false
            })
            this.input = ""
        },
        clearList() {
            this.items = []
            count = 0
        },
        changeStatus(index) {
            this.items[index].done = !this.items[index].done
        },
        deleteItem(index) {
            this.items.splice(index, 1)
        }
    },
    components: ["list-item"],
    template: `
        <div>
            <input type="text" placeholder="Enter Item Here" @keydown.enter="addItem" v-model=input>
            <button @click="addItem">Add Item</button>
            <button @click="clearList">Clear List</button>
        </div>

        <div id="item_list">
            <div class="item" :class="(item.done)?'done':''" v-for="(item, index) in items" :key="index">
                <i class="fa-solid fa-square-check" @click="changeStatus(index)"></i>
                <span @click="changeStatus(index)">{{item.text}}</span>
                <i class="fa-solid fa-trash-can" @click="deleteItem(index)"></i>
            </div>
        </div>`
})

app.mount("#app")