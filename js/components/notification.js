export default class Notification{

    show( show_secodns, type, elem_selected, message ){


        createNotification();

        function createNotification(){
            elem_selected = document.querySelector( elem_selected );

            const element = document.createElement('div');
            element.className = `notification is-${type}`;
            element.style.position = 'fixed';
            element.style.width = '100%'
            element.innerText = message;

            elem_selected.append( element );

            hide( element );

        }

        function hide( e ){
            setTimeout(() => {
                e.remove();
            }, show_secodns );
        }
    }

}