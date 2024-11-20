import { Vertex } from './vertex.mjs'

class Graph {
  constructor() {
    this.queue = []
  }
  nextMove(vertex) {
    let x = vertex.position[0]
    let y = vertex.position[1]
    const adjacentSquares = [[x + 2, y + 1],[x + 1, y + 2],[x - 1, y + 2],[x - 2, y + 1],[x - 2, y - 1],[x - 1, y - 2],[x + 1, y - 2],[x + 2, y - 1]]
    for (let i = 0; i < adjacentSquares.length; i++) {
      let a = adjacentSquares[i][0]
      let b = adjacentSquares[i][1]
      if (a > 7 || a < 0 || b > 7 || b < 0) {
        adjacentSquares.splice(adjacentSquares[i], [a, b])
      } else {
        vertex.adjacent.push([a, b])
      }
    }
    return
  }
  buildPath(vertex, endPosition, startPosition) {
    let path = []
    path.push(`[${endPosition}]`)
    let predecessor = vertex.predecessor[0]
    while (predecessor.predecessor.length != 0) {
      path.push(`[${predecessor.position}]`)
      predecessor = predecessor.predecessor[0]
    }
    path.push(`[${startPosition}]`)
    return path.reverse().join(' ')
  }
  knightMoves(endPosition, startPosition) {
    let start = new Vertex(startPosition)
    this.nextMove(start)
    this.queue.push(start)
    while (this.queue.length) {
      let vertex = this.queue.shift()
      for (let i = 0; i < vertex.adjacent.length; i++) {
          let newPosition = vertex.adjacent[i]
          let newVertex = new Vertex(newPosition)
          newVertex.edges = vertex.edges + 1
          newVertex.predecessor.push(vertex)
          if ((newVertex.position[0] === endPosition[0]) && (newVertex.position[1] === endPosition[1])) {
            return `You made it in ${newVertex.edges} move(s). Here's your path: ${this.buildPath(newVertex, endPosition, startPosition)}` 
          } else {
            this.nextMove(newVertex)
          }
          this.queue.push(newVertex)
        }
    }
    return false
  }
}

export { Graph }
