import Node from "./Node.js"
import Pokemon from "./Pokemon.js"

import * as fs from "fs";

import { validateNode, createGraph } from "./utils/ops.js";



//At current node, looks forwards and backwards and validates if its a max tempo chain

const seedPokemon = (graph, nodeID, pokemon) => {
    graph.getNode(nodeID).setPokemon(pokemon);
}

// We loop through the nodes in the chain, and return a value 0-4 based on how many nodes are validated in the chain. 4 is max tempo.
const getTempoScore = (graph) => {
    let tempoScore = 0;
    for(let i = 1; i < 5; i++){
        
        let curNode = graph.getNode(i);

        if(validateNode(curNode.getPokemon().getTypes(), curNode.getAdjacents()[0].getPokemon().getTypes(), curNode.getAdjacents()[1].getPokemon().getTypes()))
        {
            tempoScore++;
        }
       

    }

    return tempoScore;
}

const seedDex = () => {
    const currentDir = `.`;
    const dexMap = new Map();
    let textBuffer = fs.readFileSync(currentDir + '/dex.csv') // returns a buffer representing the text
    textBuffer.toString().split(/\n/).forEach(line => {
        let dataRow = line.split(',') // split csv into array of ,'s
        dexMap.set(dataRow[1], [dataRow[5], dataRow[6]]) // grab the data you need
    })
    return dexMap; 

}
const populateFullRing = (dex) =>
{
    let ring = createGraph();

    seedPokemon(ring, 1, new Pokemon(dex.get('Aron')))
    seedPokemon(ring, 2, new Pokemon(dex.get('Vulpix')))
    seedPokemon(ring, 3, new Pokemon(dex.get('Aron')))
    seedPokemon(ring, 4, new Pokemon(dex.get('Numel')))

    return ring;

}


const main = () => {

  
    // let aron1 = new Pokemon(["steel", "rock"]);
    // let vulpix = new Pokemon(["fire", "fire"]);
    // let aron2 = new Pokemon(["steel", "rock"]);
    // let numel = new Pokemon(["fire", "ground"]);
  
    // seedPokemon(graph, 1, aron1);
    // seedPokemon(graph, 2, vulpix);
    // seedPokemon(graph, 3, aron2);
    // seedPokemon(graph, 4, numel);
  

    let dex = seedDex(); // return our map of name => [types]
    let fullRing = populateFullRing(dex);
    let score = getTempoScore(fullRing)
    console.table(score);
};

main();
//-------------------------------------------------------------------------------------------------------------------------------------------


