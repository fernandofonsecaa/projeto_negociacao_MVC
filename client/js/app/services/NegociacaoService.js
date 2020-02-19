class NegociacaoService{

    constructor(){

        this._http = new HttpService()

    }
    obtemNegociacoesDaSemana(){
        
           return this._http
           .get('negociacoes/semana')
           .then(negociacoes=>{
               return negociacoes.map(objeto=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro =>{
                console.log(erro)
                throw new Error('Não foi possível obter as negociações da semana')
            })
    }
        


    obtemNegociacoesDaSemanaAnterior(){
        
            return this._http
            .get('negociacoes/anterior')
            .then(negociacoes=>{
                return negociacoes.map(objeto=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
             })
             .catch(erro =>{
                 console.log(erro)
                 throw new Error('Não foi possível obter as negociações da semana anterior')
             })     
     }


    obtemNegociacoesDaSemanaRetrasada(){
        
            return this._http
            .get('negociacoes/retrasada')
            .then(negociacoes=>{
                return negociacoes.map(objeto=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
             })
             .catch(erro =>{
                 console.log(erro)
                 throw new Error('Não foi possível obter as negociações da semana retrasada')
             })    
     }

     obtemNegociacoes() {

        return Promise.all([
            this.obtemNegociacoesDaSemana(),
            this.obtemNegociacoesDaSemanaAnterior(),
            this.obtemNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), []); //concatenando os 3 arrays obtidos através das promises em um unico array

            return negociacoes;

        }).catch(erro => {
            throw new Error(erro);
        });

    } 

    
}




