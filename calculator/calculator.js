var app = new Vue({
    el:'.app',
    data: {
        current:'',
        operator:null,
        previous:null,
        operatorClicked:false,
        
       
    },
    methods: {
        clear(){
            this.current='';
        },
        sign(){
           this.current = this.current.charAt(0) ==='-'?
           this.current.slice(1):`-${this.current}`;
        },
        percentage(){
            this.current = parseFloat(this.current)/100; 
        },
        append(number){
            if(this.operatorClicked){
                this.current='';
                this.operatorClicked = false;
            }
            this.current=`${this.current}${number}`;
        },
        dot(){
            if(this.current.indexOf('.')===-1){
                 this.append('.');
            }   
        },
        setPrevious(){
            this.previous = this.current;
            this.operatorClicked = true;
          
        },
        divide(){
            this.operator = (a, b) => a / b;
            this.setPrevious();
            console.log(this.operator); 
            console.log(this.previous);    
        },
        minus(){
            this.operator = (a, b) => a - b;
            this.setPrevious();
            console.log(this.operator);    
        },
        add(){
            this.operator = (a, b) => a + b;
            this.setPrevious();
            console.log(this.operator);    
        },
        times(){
            this.operator = (a, b) => a * b;
            this.setPrevious();
            console.log(this.operator);    
        },
        
        equal(){
            if(this.current!=''&& this.previous!=null){
                this.current = this.operator(parseFloat(this.previous),parseFloat(this.current));
             
            }
            this.previous=null;
        }
    }
})