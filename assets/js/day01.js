/**
 * Created by sean on 2017/5/14.
 */
// computed attribute
var demo = new Vue({
    el: '#demo-0',
    data: {
        message: 'Hello Vue!'
    },
    computed: {
        reservedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
});

demo.message = 'What\'s up man?';

// Watched

var demo1 = new Vue({
    el: '#demo-1',
    data: {
        firstName: 'Sean',
        lastName: 'Sen',
        //fullName: ''
    },

    // watch
    //watch: {
    //    firstName: function(val) {
    //        this.fullName = val + ' ' + this.lastName;
    //    },
    //    lastName: function(val) {
    //        this.fullName = this.firstName + ' ' + val;
    //    }
    //}

    // computed
    //computed: {
    //    fullName: function() {
    //        return this.firstName + ' ' + this.lastName;
    //    }
    //}

    // computed
    computed: {
        fullName: {
            set: function(nameStr) {
                var names = nameStr.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            },

            get: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
});