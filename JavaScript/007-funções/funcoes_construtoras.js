function Name(name,sobreNome){
    this.name = name;

    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${sobreNome}`;  
        return nomeCompleto;
    }
}

const ferna = new Name("Fernando", "sanches");
console.log(ferna.sobreNome());


