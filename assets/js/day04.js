/**
 * Created by Sean on 2017/5/17.
 */
var demo = new Vue({
    el: '#demo-0',
    data: {
        items: [
            {message: 'Boo'},
            {message: 'Foo'},
            {message: 'Too'}
        ]
    }
});

var demo1 = new Vue({
    el: '#demo-1',
    data: {
        parentMessage: 'demo1',
        items: [
            {message: 'Boo'},
            {message: 'Foo'},
            {message: 'Too'}
        ]
    }
});

var demo2 = new Vue({
    el: '#demo-2',
    data: {
        parentMessage: 'demo2',
        items: [
            {message: 'Boo'},
            {message: 'Foo'},
            {message: 'Too'}
        ]
    }
});
demo2.items.push({ message: 'Xoo' });

var demo3 = new Vue({
    el: '#demo-3',
    data: {
        items: [
            {msg: 'Boo'},
            {msg: 'Foo'},
            {msg: 'Too'}
        ]
    }
});

var demo4 = new Vue({
    el: '#demo-4',
    data: {
        obj: {
            firstName: 'John',
            lastName: 'Doe',
            age: '30'
        }
    }
});

var demo5 = new Vue({
    el: '#demo-5'
});

Vue.component('todo-item', {
    template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
    props: ['title']
});

var demo6 = new Vue({
    el: '#demo-6',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
});

var demo7 = new Vue({
    el: '#demo-7',
    data: {
        todos: [
            {msg: 'Do the dishes', isComplete: false},
            {msg: 'Take out the trash', isComplete: true},
            {msg: 'Mow the lawn', isComplete: false}
        ]
    }
});

var demo8 = new Vue({
    el: '#demo-8',
    data: {
        items: [
            {id: 0, msg: 'Boo'},
            {id: 1, msg: 'Foo'},
            {id: 2, msg: 'Too'}
        ]
    }
});
Vue.set(demo8.items, 3, {id: 3, msg: 'Xoo'});
demo8.items.splice(0, 1, {id: 4, msg: 'Koo'});

var demo9 = new Vue({
    el: '#demo-9',
    data: {
        numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    computed: {
        evenNumbers: function() {
            return this.numArr.filter(function (n) {
                return n % 2 === 0;
            });
        }
    }
});

var demo10 = new Vue({
    el: '#demo-10',
    data: {
        numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function (n) {
                return n % 3 === 0;
            });
        }
    }
});



























