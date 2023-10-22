let chaosPresets = {
  "original": {
    "sin": "random",
    "cos": "random",
    "tan": "random"
  },
  "funky": {
    "sin": "sinh",
    "cos": "cosh",
    "tan": "tanh"
  },
  "size": {
    "sin": "fib"
  }
};

(function() {
    let chaos = {
        init() {
            this.random = Math.random;
          
            this.abs = Math.abs;
            this.acos = Math.acos;
            this.acosh = Math.acosh;
            this.asin = Math.asin;
            this.asinh = Math.asinh;
            this.atan = Math.atan;
            this.atanh = Math.atanh;
            this.cbrt = Math.cbrt;
            this.ceil = Math.ceil;
            this.clz32 = Math.clz32;
            this.cos = Math.cos;
            this.cosh = Math.cosh;
            this.exp = Math.exp;
            this.expm1 = Math.expm1;
            this.floor = Math.floor;
            this.fround = Math.fround;
            this.log = Math.log;
            this.log1p = Math.log1p;
            this.log10 = Math.log10;
            this.log2 = Math.log2;
            this.sign = Math.sign;
            this.sin = Math.sin;
            this.sinh = Math.sinh;
            this.sqrt = Math.sqrt;
            this.tan = Math.tan;
            this.tanh = Math.tanh;
            this.trunc = Math.trunc;
          
            this.atan2 = Math.atan2;
            this.hypot = Math.hypot;
            this.imul = Math.imul;
            this.max = Math.max;
            this.min = Math.min;
            this.pow = Math.pow;
          
            this.fib = (n) => {for(var r,c=1,f=0;n>=0;)r=c,c+=f,f=r,n--;return f};
            this.carea = (a) => {return a*a*Math.PI};
            this.fix = (n) => {return n<0?Math.ceil(n):n>0?Math.floor(n):n};
            this.cat = (n) => {if(n<=1)return 1;let t=0;for(let a=0;a<n;n++)t+=this.cat(a)*this.cat(n-a-1);return t}
            this.erandom = (n) => {(Math.random()-0.5)*2}

            this.start("original");
            globalThis.ovoChaos = this;
        },

        start(presetName="original") {
            let preset = chaosPresets[presetName];
            
            if (preset) {
              for (const [key, value] of Object.entries(preset)) {
                eval(`Math.${key} = this.${value}`)
              }
            }
        },

        stop() {
            Math.random = this.random;
          
            Math.abs = this.abs;
            Math.acos = this.acos;
            Math.acosh = this.acosh;
            Math.asin = this.asin;
            Math.asinh = this.asinh;
            Math.atan = this.atan;
            Math.atanh = this.atanh;
            Math.cbrt = this.cbrt;
            Math.ceil = this.ceil;
            Math.clz32 = this.clz32;
            Math.cos = this.cos;
            Math.cosh = this.cosh;
            Math.exp = this.exp;
            Math.expm1 = this.expm1;
            Math.floor = this.floor;
            Math.fround = this.fround;
            Math.log = this.log;
            Math.log1p = this.log1p;
            Math.log10 = this.log10;
            Math.log2 = this.log2;
            Math.sign = this.sign;
            Math.sin = this.sin;
            Math.sinh = this.sinh;
            Math.sqrt = this.sqrt;
            Math.tan = this.tan;
            Math.tanh = this.tanh;
            Math.trunc = this.trunc;
          
            Math.atan2 = this.atan2;
            Math.hypot = this.hypot;
            Math.imul = this.imul;
            Math.max = this.max;
            Math.min = this.min;
            Math.pow = this.pow;
        }
    }

    chaos.init();
})();