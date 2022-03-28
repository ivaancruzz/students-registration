import View from '../view.js';


export default class View_panel_profesores extends View{
    constructor( model_panel, model_inscriptions ){
        super( model_panel )
        
        this.slide_actual = 'is-hidden';

        this.model_inscriptions = model_inscriptions;
        this.data = model_inscriptions.getData();
        console.log(this.data)
        this.data_acepted = []; //Almacena todos los usuarios aceptados

        this.box = document.querySelector('#box');
        
        this.select = document.querySelector('#select-semana');

        this.name = document.querySelector('#name');
        this.email = document.querySelector('#email');
        this.materia = document.querySelector('#materia');

        this.btn_acept = document.querySelector('#aceptar');
        this.btn_denieg = document.querySelector('#denegar');


        this.btn_acept.addEventListener('click', () =>{
            this.aceptedInscription();
            
        });

        this.btn_denieg.addEventListener('click', () =>{
            this.deniegedInscription();
            
        });


        this.showInscription();
        this.showTotalSolicitys();

       

        
    } 

    showInscription(){
        
        if( this.data.length != 0 ){
            const getFristInscription = () =>{ //Obtener el primer elemento del array
                return this.data[0];
            }
            
            const addDatesToBox = () => {
                this.name.innerText = getFristInscription().nombre_alumno;
                this.email.innerText = getFristInscription().email_alumno;
                this.materia.innerText = getFristInscription().materia_adeudada;   
    
            }
           
            this.box.className = this.box.className.replace(this.slide_actual, 'show');

            
    
            addDatesToBox();
        } else {
            
            this.box.className = this.box.className.replace(this.slide_actual, 'show');
            this.box.innerHTML =  `
                <p class="title is-5 has-text-weight-bold has-text-grey has-text-centered">
                    Ya no quedan solicitudes
                </p>
             `
            
        }
        
        
    }

    aceptedInscription(){
        
        
        
        this.data_acepted = ({
            'nombre_alumno':this.data[0].nombre_alumno,
            'email_alumno':this.data[0].email_alumno,
            'materia_alumno':this.data[0].materia_adeudada,
            'semana':this.select.value,
        })
            

        
        this.saveDates();
        
        
        

        this.showTotalSolicitys();
        this.slide_actual = 'slide-aceppted';
        this.box.className = this.box.className.replace('show', this.slide_actual);

        setTimeout( () => {
            
            this.showInscription();
        }, 1100);
    }

    deniegedInscription(){
        this.saveDates();

        this.showTotalSolicitys();
        this.slide_actual = 'slide-denieged';
        this.box.className = this.box.className.replace('show', this.slide_actual);

        setTimeout( () => {
            this.showInscription();
        }, 1100);
    }

    saveDates(){
        this.data.splice(0, 1);
        this.model_inscriptions.setDataComplet( this.data );
        super.setData( this.data_acepted );
        
    }

    showTotalSolicitys(){
        document.querySelector('#count-solicitys').innerHTML = `<i>${this.data.length}</i>`;
        document.querySelector('#text-solicity').innerText = this.data.length == 1 ? 'Solicitud':'Solicitudes';
    }
}