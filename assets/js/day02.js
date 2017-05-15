/**
 * Created by sean on 2017/5/15.
 */
// bind class
var demo = new Vue({
    el: '#demo-0',
    data: {
        isActive: true,
        hasError: false
    }
});

var demo1 = new Vue({
    el: '#demo-1',
    data: {
        classObj: {
            active: true,
            'text-danger': false
        }
    }
});

var demo2 = new Vue({
    el: '#demo-2',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObj: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            };
        }
    }
});

var demo3 = new Vue({
    el: '#demo-3',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var demo4 = new Vue({
    el: '#demo-4',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});
demo4.isActive = false;

var demo5 = new Vue({
    el: '#demo-5',
    data: {
        isActive: true,
        errorClass: 'text-danger'
    }
});

// bind component
Vue.component('my-component', {
    template: '<p class="foo bar">demo 6</p>'
});
var demo6 = new Vue({
    el: '#demo-6',
    data: {
        isActive: true
    }
});

// bind style
var demo7 = new Vue({
    el: '#demo-7',
    data: {
        activeClr: '#f00',
        fontSize: 24
    }
});

var demo8 = new Vue({
    el: '#demo-8',
    data: {
        styleObj: {
            color: '#0f0',
            fontSize: '18px'
        }
    }
});

var demo9 = new Vue({
    el: '#demo-9',
    data: {
        baseStyle: {
            color: '#0f0',
            fontSize: '18px'
        },
        overridingStyle: {
            color: '#00f',
            fontSize: '32px',
            background: '#ccc'
        }
    }
});

var demo10 = new Vue({
    el: '#demo-10',
    data: {
        styleObj: {
            color: '#0ff',
            fontSize: '18px',
            textAlign: 'center',
            transform: 'rotate(-5deg)'
        }
    }
});


























