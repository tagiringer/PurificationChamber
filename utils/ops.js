
import Graph from "../Graph.js"
const supereffective = new Map()
const weak = new Map()

supereffective.set('fire', ['bug','grass','ice','steel'])
supereffective.set('water', ['fire','ground','rock'])
supereffective.set('grass', ['ground','water','rock'])
supereffective.set('flying', ['bug','fighting','grass'])
supereffective.set('fighting', ['dark','ice','normal','rock','steel'])
supereffective.set('poison', ['grass'])
supereffective.set('electric', ['flying', 'water'])
supereffective.set('ground', ['electric','fire','poison','rock','steel'])
supereffective.set('rock', ['fire','flying','ice','bug'])
supereffective.set('ice', ['dragon','flying','grass','ground'])
supereffective.set('bug', ['dark','grass','psychic'])
supereffective.set('dragon', ['dragon'])
supereffective.set('ghost', ['ghost','psychic'])
supereffective.set('dark', ['ghost','psychic'])
supereffective.set('steel', ['ice','rock'])
supereffective.set('psychic', ['fighting', 'poison'])
supereffective.set('normal', [''])

weak.set('fire', ['ground','rock','water'])
weak.set('water', ['electric','grass'])
weak.set('grass', ['bug','fire','flying','ice','poison'])
weak.set('flying', ['electric','ice','rock'])
weak.set('fighting', ['flying','psychic'])
weak.set('poison', ['ground','psychic'])
weak.set('electric', ['ground'])
weak.set('ground', ['grass','ice','water'])
weak.set('rock', ['fighting','grass','ground','steel','water'])
weak.set('ice', ['fighting','fire','rock','steel'])
weak.set('bug', ['fire','flying','rock'])
weak.set('dragon', ['dragon','ice'])
weak.set('ghost', ['dark','ghost'])
weak.set('dark', ['bug','fighting'])
weak.set('steel', ['fighting','fire','ground'])
weak.set('psychic', ['bug','dark','ghost'])
weak.set('normal', ['fighting'])

export const createGraph = () => {
    const graph = new Graph();
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 1);
    return graph

}

export const validateNode = (currentNodeArray, frontNeighbor, backNeighbor) => {

    let t1 = currentNodeArray[0];
    let t2 = currentNodeArray[1];


    let superFRes = supereffective.get(t1)
    let weakBRes = weak.get(t1)

    if(superFRes.find(e => e === frontNeighbor[0]) != null && weakBRes.find(e => e === backNeighbor[0]) != null){
        return true;
    }
    if(superFRes.find(e => e === frontNeighbor[0]) != null && weakBRes.find(e => e === backNeighbor[1]) != null){
        return true;
    }
    if(superFRes.find(e => e === frontNeighbor[1]) != null && weakBRes.find(e => e === backNeighbor[0]) != null){
        return true;
    }
    if(superFRes.find(e => e === frontNeighbor[1]) != null && weakBRes.find(e => e === backNeighbor[1]) != null){
        return true;
    }
    else
    {
        let superFRes = supereffective.get(t2)
        let weakBRes = weak.get(t2)

        if(superFRes.find(e => e === frontNeighbor[0]) != null && weakBRes.find(e => e === backNeighbor[0]) != null){
            return true;
        }
        if(superFRes.find(e => e === frontNeighbor[0]) != null && weakBRes.find(e => e === backNeighbor[1]) != null){
            return true;
        }
        if(superFRes.find(e => e === frontNeighbor[1]) != null && weakBRes.find(e => e === backNeighbor[0]) != null){
            return true;
        }
        if(superFRes.find(e => e === frontNeighbor[1]) != null && weakBRes.find(e => e === backNeighbor[1]) != null){
            return true;
        }
        
    }
    return false;   

}