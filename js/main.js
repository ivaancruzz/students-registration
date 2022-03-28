//import Formulario from './module_alumnos/formulario-mesa.js';

import Model from './model.js';
import View from './view.js'
import View_form_inscrption from './module_alumnos/view_form_inscription.js';
import View_panel_profesores from './module_panel/view_panel_profesores.js';

addEventListener('load', () => {
    const model_form_inscription = new Model('data_inscriptions');
    const model_panel_profesores = new Model('data_inscriptions_acepted');

    if ( !location.href.includes('cp-profesores') ){
        //Formulario de inscripcion
        
        const view_form_inscription = new View_form_inscrption( model_form_inscription );
        model_form_inscription.setView( view_form_inscription );
    } else {
        //Panel de profesores
        const view_panel_profesores = new View_panel_profesores( model_panel_profesores, model_form_inscription);
        model_panel_profesores.setView( view_panel_profesores );
    }
    
    
    


    



    


    //let form = new Formulario();
})


