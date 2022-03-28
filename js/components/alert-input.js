export default class Alert_input{
    constructor( id ){
        this.obj = document.querySelectorAll(`#${id}`)

        this.input = this.obj[0];
        this.class_input_original = this.input.className;

        this.msj_small = this.obj[1];
        this.class_msj_small_original = this.msj_small.className;

        
        
    }

    success( message ){        
        this.input.className = `${this.class_input_original} is-success`;
        
        this.msj_small.className = `${this.class_msj_small_original} is-success`;
        this.msj_small.className = this.msj_small.className.replace('is-hidden','is-block');
        this.msj_small.innerText = message;
        
    }

    error( message ){

        this.input.className = `${this.class_input_original} is-danger`;



        this.msj_small.className = `${this.class_msj_small_original} is-danger`;
        this.msj_small.className = this.msj_small.className.replace('is-hidden','is-block');
        this.msj_small.innerText = message;
    }

    clear(){
        this.input.className = this.class_input_original;
        this.msj_small.className = this.class_msj_small_original;
    }

}