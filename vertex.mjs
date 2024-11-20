class Vertex {
    constructor(position) {
        this.position = position
        this.edges = 0
        this.predecessor = []
        this.adjacent = []
    }
}

export { Vertex }
