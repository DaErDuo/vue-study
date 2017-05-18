/**
 * Created by Sean on 2017/5/18.
 */
var demo = new Vue({
    el: '#demo-0',
    data: {
        count: 0
    }
});

var demo1 = new Vue({
    el: '#demo-1',
    data: {
        name: 'Demo1'
    },
    methods: {
        greet: function (event) {
            console.log('Hello ' + this.name + '!');
            console.log(event.target.tagName);
        }
    }
});

var dem2 = new Vue({
    el: '#demo-2',
    methods: {
        say: function (msg) {
            console.log(msg);
        }
    }
});

var dem3 = new Vue({
    el: '#demo-3',
    methods: {
        warn: function (msg, e) {
            if (e) e.preventDefault();
            console.log(msg);
        }
    }
});