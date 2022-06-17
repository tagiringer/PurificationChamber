class Pokemon {
    constructor(types){
        this.types = types;
        this.name;        
    }

    getTypes() {
        return this.types;
    }

    getName() {
        return this.name;
    }

    setName(Name){
        this.name = Name;
    }


}

export default Pokemon