

async function busca_VM(){
    const url = "http://127.0.0.1:5000/api/vms"
    try {
        const response = await fetch(url);
        const data = await response.json();

        monta_tabela_vm(data)
    
    } catch (error) {
        console.log(error);
    }
}



const FiltraVMS = () => {
    const tabela     =document.getElementsByClassName('tabelaVMS')[0]
    const pesquisar = document.getElementById('inpuTabelaVMS').value
    const linhas = Array.from(tabela.children).slice(1, )   
    contador=0
    linhas.forEach( element => {
        const colunas = Array.from(element.children);
        const vmsDaLinha = colunas[1].textContent
        const encontrado =  vmsDaLinha.toUpperCase().includes( pesquisar.toString().toUpperCase()) 
        if (encontrado == true){
            element.className="linha_"+(++contador%2).toString()            
        }
        else {
            element.className="linha_oculta"
        }
    });
 
}


function criaEstruturaRelatorioVMS(){
    const teste=document.getElementById('relatorio')
    teste.textContent = '';
    var inputFiltro  = document.createElement("input");
    inputFiltro.id="inpuTabelaVMS"
    inputFiltro.onkeyup=FiltraVMS
    teste.appendChild(inputFiltro)
    var divShow  = document.createElement("div");
    divShow.id="show"
    teste.appendChild(divShow)
    
}



function monta_tabela_vm(data){
    criaEstruturaRelatorioVMS()
    geraTabela(data)
}

const geraTabela = (filtrados)=>{
    
    const teste=document.getElementById('show')
    var tabela  = document.createElement("table");
    //tabela.id="tabelaVMS"
    tabela.className="tabelaVMS"
    
    
    
    
    
    const headerLinha  = document.createElement("tr");
    const titulos =["HOSP",  "VM",  "STATE"   ]
    titulos.forEach( element => {
        const tituloColuna  = document.createElement("th");
        tituloColuna.textContent=element
        tituloColuna.classList.add("coluna"+element);
        headerLinha.appendChild(tituloColuna)
    })
    headerLinha.classList.add("linha_header");
    tabela.appendChild(headerLinha)
    
    
    filtrados.forEach((elementx) => {
        const headerLinha  = document.createElement("tr");
        const titulos =["hosp",  "vm",  "state"   ]
        titulos.forEach( element => {
            const tituloColuna  = document.createElement("td");
            tituloColuna.textContent=elementx[element]
            headerLinha.appendChild(tituloColuna)
        })
        headerLinha.classList.add("linha_header");
        tabela.appendChild(headerLinha)
    }
    )
    
    
    
    
    
    
    
    teste.appendChild(tabela)
     FiltraVMS()
    }

    

    
    
    
    var hostVms=[]
    
    

    function tabelaVMS(){
        busca_VM()
    }
    
    
    

function tabelaDisco(){
   
    busca_Disco()
}




async function busca_Disco(){
    const url = "http://127.0.0.1:5000/api/disco"
    try {
        const response = await fetch(url);
        const data = await response.json();
        

        monta_tabela_disco(data)
        
    } catch (error) {
        console.log(error);
    }
}

function monta_tabela_disco(data){
    criaEstruturaRelatorioDisco()
    geraTabelaDisco(data)
}




function criaEstruturaRelatorioDisco(){
    
    const teste=document.getElementById('relatorio')
    apagaTudo(teste)
    
    const  divShow  = document.createElement("div");
    divShow.id="show"
    teste.appendChild(divShow)
    
}

function  apagaTudo(no){
    var  delChild = no.lastChild;
    while (delChild) {
        apagaTudo("delChild");
        no.removeChild(delChild);
        delChild = no.lastChild;
    }

}
const geraTabelaDisco = (data)=>{
    
    todosOsCampos= ["host", "hostid", "itemid", "lastclock", "lastvalue", "name"] 
    camposDaTabela=["host",  "lastvalue"]
    tabeladorDisco(data, camposDaTabela)
    }

const tabeladorDisco = (data, camposDaTabela)=>{
    const teste=document.getElementById('show')
    
    const tabelaPagina = document.createElement("table")
    const headerLinha  = document.createElement("tr");
    headerLinha.className="linha_header"

    
    camposDaTabela.forEach( element => {
        const tituloColuna  = document.createElement("th");
        tituloColuna.textContent=element
        tituloColuna.classList.add("colunaDireita");
        headerLinha.appendChild(tituloColuna)
    })
    tabelaPagina.appendChild(headerLinha)

    teste.append(tabelaPagina)
    data.forEach( linha => {
        const linhaDisco = document.createElement("tr")
        camposDaTabela.forEach( coluna => {
            const colunaDisco = document.createElement("td")
            colunaDisco.textContent= linha[  coluna]
            linhaDisco.appendChild(colunaDisco)
        }   
        )
    tabelaPagina.appendChild(linhaDisco)

        
    })



}

