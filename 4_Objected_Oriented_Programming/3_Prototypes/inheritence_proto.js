// inheritance_concept_in prototype
const parent =  {
    a: 10,
    b: 20,
        sum : function() {
            console.log(this.a + this.b);
     },
}

const child = {
    c: 20,
    d: 30,
    multiply: function () {
        console.log(this.c * this.d);
    },
}

child.__proto__ = parent;