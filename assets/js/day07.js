/**
 * Created by sean on 2017/6/3.
 */
// register component
Vue.component('my-component', {
    template: '<p style="font-size: 18px; color: blue;">This is my component.</p>'
});
var demo = new Vue({
    el: '#demo-0'
});

// partial register component
var child = {
    template: '<p style="font-size: 18px; color: green;">This is another component.</p>'
};
var demo1 = new Vue({
    el: '#demo-1',
    components: {
        'my-component': child
    }
});

var myRow = {
    template: '<tr><td>This is my row.</td></tr>'
};
var demo2 = new Vue({
    el: '#demo-2',
    components: {
        'my-row': myRow
    }
});

// data should be a function
var counter = { count: 0 };
Vue.component('my-counter', {
    //template: '<span>{{ message }}</span>',
    //data: {
    //    message: 'Hello vue component!'
    //}

    template: '<button v-on:click="count += 1">{{ count }}</button>',
    data: function() {
        return counter;
    }
});
var demo3 = new Vue({
    el: '#demo-3'
});

Vue.component('my-counter', {
    template: '<button v-on:click="count++">{{ count }}</button>',
    data: function() {
        return {
            count: 0
        };
    }
});
var demo4 = new Vue({
    el: '#demo-4'
});

// props
Vue.component('my-child', {
    props: ['message', 'message1'],
    template: '<span>{{ message }} {{ message1 }}</span>'
});
var demo5 = new Vue({
    el: '#demo-5'
});

// props: camelCase vs. kebab-case
Vue.component('my-child', {
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
});
var demo6 = new Vue({
    el: '#demo-6'
});

// props down
Vue.component('my-child', {
    props: ['childMessage'],
    template: '<p>Messages from parent: {{ childMessage }}</p>'
});
var demo7 = new Vue({
    el: '#demo-7',
    data: {
        parentMsg: ''
    }
});

// props validation
// type: String, Number, Boolean, Object, Function, Array
Vue.component('my-component', {
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
            type: String,
            required: true
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default: function() {
                return { message: 'hello' }
            }
        },
        propF: {
            validator: function(val) {
                return val > 10;
            }
        }
    },
    template: '<p>propA: {{ propA }}, propB: {{ propB }}, propC: {{ propC }}, propD: {{ propD }}, propE: {{ propE }}, propF: {{ propF }}</p>'
});
var demo8 = new Vue({
    el: '#demo-8',
    data: {
        msgA: 0,
        msgB: '123',
        msgC: 'vue',
        //msgD: 0,
        //msgE: {},
        msgF: 11
    }
});























