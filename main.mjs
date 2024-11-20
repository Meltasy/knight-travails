import { Graph } from './graph.mjs'

const graph = new Graph

console.log(graph.knightMoves([2, 2], [4, 5]))
console.log(graph.knightMoves([6, 6], [3, 4]))
console.log(graph.knightMoves([4, 3], [1, 7]))
console.log(graph.knightMoves([7, 4], [3, 0]))
console.log(graph.knightMoves([4, 2], [5, 6]))
console.log(graph.knightMoves([5, 6], [4, 1]))
console.log(graph.knightMoves([1, 0], [7, 5]))
