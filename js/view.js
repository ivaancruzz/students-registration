
export default class View{
    constructor( model ){
        this.model = model;

        this.data = []

    }


    setData( data ){
        this.data = data;
        this.model.setData( this.data );
    }

    getData( ){
        this.data = this.model.getData();
        return this.data;
    }


}