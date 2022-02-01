function dataTypes() {
   let n = 2
   let big = 5n
   let str = 'string'
   let bln = Boolean()
   let ll = null;
   let und
   let obj = Object()
   let smbl = Symbol()
   let fn = function() {}
   let result = Object.keys({n}) + ' is ' + typeof(n) + '\n' +
   Object.keys({big}) + ' is ' + typeof(big) + '\n' +
   Object.keys({str}) + ' is ' + typeof(str) + '\n' +
   Object.keys({bln}) + ' is ' + typeof(bln) + '\n' +
   Object.keys({ll}) + ' is ' + typeof(ll) + '\n' +
   Object.keys({und}) + ' is ' + typeof(und) + '\n' +
   Object.keys({smbl}) + ' is ' + typeof(smbl) + '\n' +
   Object.keys({fn}) + ' is ' + typeof(fn)
   return result    
}
alert(dataTypes());