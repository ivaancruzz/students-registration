export default class Model{
    constructor( name_db ){
        this.view = null;
        this.name_db = name_db;

        if( localStorage.getItem(this.name_db) == null ){
            this.data = []
        } else {
            
            this.data = JSON.parse( localStorage.getItem(this.name_db) )
        }
        
    }

    setView( view ){
        this.view = view;
    }


    setData( data ){
        this.data = this.data || [];
        this.data.push( data ); 
        console.log(this.data)
        this.save();
    }

    setDataComplet( data ){
        this.data = data;
        console.log(this.data)
        this.save();
    }

    getData(){
        //console.log(this.data)
        return this.data;
    }

    save(){
        localStorage.setItem(this.name_db, JSON.stringify(this.data) );
    }
}