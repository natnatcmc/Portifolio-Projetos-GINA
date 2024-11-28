import Carro from './Carro'

function Garagem() {
    
    const carro = ['Honda', 'Volkswagen', 'BMW', 'Toyota', 'Audi'];

    return (
        <>

            <h1>Quais carros eu almejo comprar</h1>

            <ul>
                {carro.map((carro) => <Carro marca={carro} />)}
            </ul>

        </>
    )
}

export default Garagem