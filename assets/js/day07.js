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
    template: '<p>' +
        'propA: {{ propA }}, ' +
        'propB: {{ propB }}, ' +
        'propC: {{ propC }}, ' +
        'propD: {{ propD }}, ' +
        'propE: {{ propE }}, ' +
        'propF: {{ propF }}' +
    '</p>'
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


// custom events
Vue.component("button-counter", {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function() {
            this.counter += 1;
            this.$emit('increment'); // pass information to parent component
        }
    }
});
var demo9 = new Vue({
    el: '#demo-9',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1;
        }
    }
});

// Form Input Components using Custom Events
Vue.component('currency-input', {
    template: '<span>' +
        '$' +
        '<input ref="input" ' +
            'v-bind:value="value" ' +
            'v-on:input="updateValue($event.target.value)">' +
        '</span>',
    props: ['value'],
    methods: {
        updateValue: function(value) {
            var formattedValue = value.trim().slice(
                0,
                value.indexOf('.') === -1
                    ? value.length
                    : value.indexOf('.') + 3
            );

            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue;
            }
            this.$emit('input', Number(formattedValue));
        }
    }
});
var demo10 = new Vue({
    el: '#demo-10',
    data: {
        price: ''
    }
});

Vue.component('currency-input', {
    template: '' +
        '<div>' +
            '<label v-if="label">{{ label }}</label>' +
            ' $' +
            '<input ' +
                'ref="input" ' +
                'v-bind:value="value" ' +
                'v-on:input="updateValue($event.target.value)" ' +
                'v-on:focus="selectAll" ' +
                'v-on:blur="formatValue">' +
        '</div>',

    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },

    mounted: function() {
        this.formatValue()
    },

    methods: {
        updateValue: function(value) {
            var result = currencyValidator.parse(value, this.value);
            if (result.warning) {
                this.$refs.input.value = result.value;
            }

            this.$emit('input', result.value);
        },

        formatValue: function() {
            this.$refs.input.value = currencyValidator.format(this.value)
        },

        selectAll: function(event) {
            setTimeout(function() {
                event.target.select();
            }, 0);
        }
    }
});
var demo11 = new Vue({
    el: '#demo-11',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function() {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 +
                this.discount * 100
            ) / 100).toFixed(2)
        }
    }
});



















