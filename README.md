# graph

A graph implementation with depth first search.

## Usage

```javascript
var graph = Graph();

graph.addEdge("A", "B");
graph.addEdge("B", "C");

// prints ["B"]
console.log(graph.adjacent("A"))

// Perform Depth First Search (DFS)
// nodes = ["C", "B", "A"]
var nodes = graph.DFS(["A"]);

var topologicallySorted = nodes.reverse();
```

## Running Unit Tests

```bash
mocha
```
