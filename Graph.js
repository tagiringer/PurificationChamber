import Node from "./Node.js"

class Graph{

    constructor(){
        this.nodes = new Map();
    }

    getNode(nodeID){
        return this.nodes.get(nodeID);
    }

    addVertex(id){
        if(this.nodes.has(id)){
            return this.nodes.get(id)
        }
        const vertex = new Node(id);

        this.nodes.set(id, vertex);
        return vertex;
    }

    addEdge(srcID, destID){
        const srcNode = this.addVertex(srcID);
        const destNode = this.addVertex(destID);

        srcNode.addAdjacent(destNode);
        destNode.addAdjacent(srcNode);
    }


}








export default Graph