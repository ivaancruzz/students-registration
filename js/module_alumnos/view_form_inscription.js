import View from '../view.js';
import Alert_input from '../components/alert-input.js';
import Notification from '../components/notification.js';

export default class View_form_inscrption extends View{
    constructor( model ){
        super( model );
        this.notification = new Notification();


        this.get_form = document.querySelector("#form-enviar");
        this.box = document.querySelector('#box');

        this.name = this.get_form['name'];
        this.alerta_name = new Alert_input( 'name' );

        this.name.addEventListener( 'change', () =>{
            this.validName(this.name.value);
        })
        

        this.email = this.get_form['email'];
        this.alerta_email = new Alert_input( 'email' );
        this.email.addEventListener( 'change', () =>{
            this.validEmail(this.email.value);
        })
        

        this.materia = this.get_form['materia'];

        this.enviar = document.querySelector("#btn-enviar");
        this.send()
        this.valid_name = false;
        this.valid_email = false;

        this.data = {};
        
    }

    validName( name_str ){
        const exp_reg = new RegExp(/^[a-z]+$/i);
        
        let valid_name = (exp_reg.test( name_str ))

        if( valid_name ){
            this.valid_name = true;
            this.alerta_name.success( 'Nombre valido!');

        } else {
            this.valid_name = false;
            this.alerta_name.error( 'Nombre invalido' );
        }

       
    }

    validEmail( email_str ){
        const exp_reg = new RegExp  (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        
        let valid_email = (exp_reg.test( email_str ))

        if( valid_email ){
            this.valid_email = true;
            this.alerta_email.success( 'Email valido!');
        } else {
            this.valid_email = false;
            this.alerta_email.error( 'Email invalido' );
            
        }
    }

    formValid(){
        return ( this.valid_name && this.valid_email && this.materia.value != '' );
    }

    send(){

        this.enviar.addEventListener('click', () =>{
            if( this.formValid() ){
                success();
            } else {
                alert('Por favor verifica los campos.1')
            }
        })
        
        this.get_form.addEventListener('keypress', (e) => {
            if(e.code == 'Enter' ){
                if( this.formValid() ){              
                    success();
                    
                } else {
                    alert('Por favor verifica los campos.')
                }
            }
            
        })

        const success = () => {
            this.enviar.className += ' is-loading';
            
            setTimeout(() => {
                this.enviar.className = this.enviar.className.replace('is-loading', '');
                this.notification.show( 2000, 'success', '.hero', '¡Enviaste tus datos con éxito!');

                send_form();
                clearForm();
            }, 1000);

            const clearForm = () =>{
                this.name.value = '';
                this.email.value = '';
                this.materia.value = '';
                this.alerta_name.clear();
                this.alerta_email.clear();
            }
        }


        const send_form = () => {
            this.data = ( {
                'nombre_alumno': this.name.value,
                'email_alumno': this.email.value,
                'materia_adeudada': this.materia.value,
            });

            super.setData( this.data );
            
        }
        
    }

}