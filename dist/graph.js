(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Graph = {}))
}(this, function (exports) { 'use strict';

  exports.Graph = Graph;

  function Graph(){
    
    // Keys are node ids.
    // Values are arrays of adjacent node ids.
    var edges = {};
    
    function adjacent(u){
      return edges[u] || (edges[u] = []);
    }
    
    return {

      addEdge: function (u, v){
        adjacent(u).push(v);
      },
      removeEdge: function (u, v){ /* TODO */ },
      removeNode: function (u){ /* TODO */ },

      adjacent: adjacent,

      DFS: function (originNodes){

        // Keys are node ids.
        // Values are true when the node has been visited.
        var visited = {};
        
        // An array of nodes containing the result of DFS().
        var nodes = [];

        function DFSVisit(u){
          if(!visited[u]){
            visited[u] = true;
            adjacent(u).forEach(DFSVisit);
            nodes.push(u);
          }
        }
    
        originNodes.forEach(DFSVisit);

        return nodes;
      }
    };
  }

}));