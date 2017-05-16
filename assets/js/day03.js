/**
 * Created by Sean on 2017/5/16.
 */
var demo = new Vue({
    el: '#demo-0',
    data: {
        isOk: true
    }
});

var demo1 = new Vue({
    el: '#demo-1'
});

var demo2 = new Vue({
    el: '#demo-2',
    data: {
        type: 'B'
    }
});
demo2.type = 'abc';