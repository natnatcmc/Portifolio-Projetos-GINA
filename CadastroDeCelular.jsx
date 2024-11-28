import React, {useState} from 'react'

function CadastroDeCelular() {
    const [celular, setCelular] = useState([])
    const [marca, setMarca] = useState([])
    const [modelo, setModelo] = useState([])
    const [preco, setPreco] = useState([])
    const [memoria, setMemoria] = useState([])
    const [cor, setCor] = useState([])
    const [processador, setProcessador] = useState([])
    const [composicaoBateria, setComposicaoBateria] = useState([])
    const [tamanhoTela, setTamanhoTela] =useState([])
    const [hertzTela, setHertzTela] = useState([])
    const [camera, setCamera] = useState([])
    const [sistemaOperacional, setSistemaOperacional] = useState([])
    const [descricao, setDescricao] = useState([])
    const [avaliacao, setAvaliacao] = useState([])
    const [armazenamento, setArmazenamento] = useState([])
    const [peso, setPeso] = useState([])
    const [dimensao, setDimensao] = useState([])
    const [conector, setConector] = useState([])
    const [carregador, setCarregador] = useState([])
    const [numeroDeSerie, setNumeroDeSerie] = useState([])
    const [fone, setFone] = useState([])
    const [quantidadeChips, setQuantidadeChips] = useState([])
    const [entradaMiscroSD, setEntradaMicroSD] = useState([])

    function adicionarCelular() {
        if (marca.trim() !== '' &&
            modelo.trim !== '' &&
            preco.trim !== '' &&
            memoria.trim !== '' &&
            cor.trim !== '' &&
            processador.trim !== '' &&
            composicaoBateria.trim !== '' &&
            tamanhoTela.trim !== '' &&
            hertzTela.trim !== '' &&
            camera.trim !== '' &&
            sistemaOperacional.trim !== '' &&
            descricao.trim !== '' &&
            avaliacao.trim !== '' &&
            armazenamento.trim !== '' &&
            peso.trim !== '' &&
            dimensao.trim !== '' &&
            conector.trim !== '' &&
            carregador.trim !== '' &&
            numeroDeSerie.trim !== '' &&
            fone.trim !== '' &&
            quantidadeChips.trim !== '' &&
            entradaMiscroSD.trim !== '') {

            setCelular((prevCelulares) => [
                ...prevCelulares, 

                {
                marca,
                modelo,
                preco,
                memoria,
                cor,
                processador,
                composicaoBateria,
                tamanhoTela,
                hertzTela,
                camera,
                sistemaOperacional,
                descricao,
                avaliacao,
                armazenamento,
                peso,
                dimensao,
                conector,
                carregador,
                numeroDeSerie,
                fone,
                quantidadeChips,
                entradaMiscroSD
                },
            ])

            setMarca('')
            setModelo('')
            setPreco('')
            setMemoria('')
            setCor('')
            setProcessador('')
            setComposicaoBateria('')
            setTamanhoTela('')
            setHertzTela('')
            setCamera('')
            setSistemaOperacional('')
            setDescricao('')
            setAvaliacao('')
            setArmazenamento('')
            setPeso('')
            setDimensao('')
            setConector('')
            setCarregador('')
            setNumeroDeSerie('')
            setFone('')
            setQuantidadeChips('')
            setEntradaMicroSD('')
        }

    }

    const removerCelular = (index) => {
        setCelular((prevCelulares) => {
            const novosCelulares = [...prevCelulares];
            novosCelulares.splice(index, 1);
            return novosCelulares;
        });
    };    

    return(

    <>

    <h2>Cadastro de Celular</h2>

    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder='Digite a marca do celular'/>
    <br />
    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder='Digite a modelo do celular'/>
    <br />
    <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder='Digite a preço do celular'/>
    <br />
    <input type="text" value={memoria} onChange={(e) => setMemoria(e.target.value)} placeholder='Digite a memória do celular'/>
    <br />
    <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} placeholder='Digite a cor do celular'/>
    <br />
    <input type="text" value={processador} onChange={(e) => setProcessador(e.target.value)} placeholder='Digite o processador do celular'/>
    <br />
    <input type="text" value={composicaoBateria} onChange={(e) => setComposicaoBateria(e.target.value)} placeholder='Digite a composição da bateria do celular'/>
    <br />
    <input type="text" value={tamanhoTela} onChange={(e) => setTamanhoTela(e.target.value)} placeholder='Digite o tamanho da tela do celular'/>
    <br />
    <input type="text" value={hertzTela} onChange={(e) => setHertzTela(e.target.value)} placeholder='Digite os hertz da tela do celular'/>
    <br />
    <input type="text" value={camera} onChange={(e) => setCamera(e.target.value)} placeholder='Digite o tipo de câmera do celular'/>
    <br />
    <input type="text" value={sistemaOperacional} onChange={(e) => setSistemaOperacional(e.target.value)} placeholder='Digite o sistema operacional do celular'/>
    <br />
    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Digite a descrição do celular'/>
    <br />
    <input type="text" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} placeholder='Digite a avaliação do celular'/>
    <br />
    <input type="text" value={armazenamento} onChange={(e) => setArmazenamento(e.target.value)} placeholder='Digite o armazenamento do celular'/>
    <br />
    <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='Digite o peso do celular'/>
    <br />
    <input type="text" value={dimensao} onChange={(e) => setDimensao(e.target.value)} placeholder='Digite a dimensão do celular'/>
    <br />
    <input type="text" value={conector} onChange={(e) => setConector(e.target.value)} placeholder='Digite o conector do celular'/>
    <br />
    <input type="text" value={carregador} onChange={(e) => setCarregador(e.target.value)} placeholder='Digite o carregador do celular'/>
    <br />
    <input type="text" value={numeroDeSerie} onChange={(e) => setNumeroDeSerie(e.target.value)} placeholder='Digite o número de série do celular'/>
    <br />
    <input type="text" value={fone} onChange={(e) => setFone(e.target.value)} placeholder='Digite o fone do celular'/>
    <br />
    <input type="text" value={quantidadeChips} onChange={(e) => setQuantidadeChips(e.target.value)} placeholder='Digite a quantidade de chips do celular'/>
    <br />
    <input type="text" value={entradaMiscroSD} onChange={(e) => setEntradaMicroSD(e.target.value)} placeholder='Digite a entrada micro SD do celular'/>
    <br />
    <button onClick={adicionarCelular}>Adicionar</button>
    <ul>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {celular.map((cel, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            margin: '10px',
                            width: '250px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <strong>Marca:</strong> {cel.marca} <br />
                        <strong>Modelo:</strong> {cel.modelo} <br />
                        <strong>Preço:</strong> {cel.preco} <br />
                        <strong>Memória:</strong> {cel.memoria} <br />
                        <strong>Cor:</strong> {cel.cor} <br />
                        <strong>Processador:</strong> {cel.processador} <br />
                        <strong>Composição da Bateria:</strong> {cel.composicaoBateria} <br />
                        <strong>Tamanho da Tela:</strong> {cel.tamanhoTela} <br />
                        <strong>Hertz da Tela:</strong> {cel.hertzTela} <br />
                        <strong>Câmera:</strong> {cel.camera} <br />
                        <strong>Sistema Operacional:</strong> {cel.sistemaOperacional} <br />
                        <strong>Descrição:</strong> {cel.descricao} <br />
                        <strong>Avaliação:</strong> {cel.avaliacao} <br />
                        <strong>Armazenamento:</strong> {cel.armazenamento} <br />
                        <strong>Peso:</strong> {cel.peso} <br />
                        <strong>Dimensão:</strong> {cel.dimensao} <br />
                        <strong>Conector:</strong> {cel.conector} <br />
                        <strong>Carregador:</strong> {cel.carregador} <br />
                        <strong>Número de Série:</strong> {cel.numeroDeSerie} <br />
                        <strong>Fone:</strong> {cel.fone} <br />
                        <strong>Quantidade de Chips:</strong> {cel.quantidadeChips} <br />
                        <strong>Entrada MicroSD:</strong> {cel.entradaMicroSD} <br />

                        <button onClick={() => removerCelular(index)}>Remover</button>
                </div>
            ))}
        </div>

    </ul>
    </>
    )
}

export default CadastroDeCelular