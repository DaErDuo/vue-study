
/**
 * Created by sean on 2017/5/11.
 */
var demo = new Vue({
    el: '#demo-0',
    data: {
        message: 'Hello Vue!'
    }
});

var demo1 = new Vue({
    el: '#demo-1',
    data: {
        message: 'loading time is ' + new Date()
    }
});

// if condition
var demo2 = new Vue({
    el: '#demo-2',
    data: {
        seen: true
    }
});

// for loop
var demo3 = new Vue({
    el: '#demo-3',
    data: {
        list: [
            {text: 'learn Javascript'},
            {text: 'learn Vue'},
            {text: 'do a nb project'}
        ]
    }
});

// bound event
var demo4 = new Vue({
    el: '#demo-4',
    data: {
        message: 'WYSIWYG'
    },
    methods: {
        reverseMsg: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

// user input
var demo5 = new Vue({
    el: '#demo-5',
    data: {
        message: 'what you see is what you get'
    }
});

// component
Vue.component('item', {
    props: ['foo'],
    template: '<li>{{ foo.text }}</li>'
});

var demo6 = new Vue({
    el: '#demo-6',
    data: {
        itemList: [
            {'text': 'Apple'},
            {'text': 'Orange'},
            {'text': 'Banana'}
        ]
    }
});

var demo7 = new Vue({
    el: '#demo-7',
    data: {
        message: 'WYSIWYG'
    }
});





























