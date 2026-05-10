import NodeCard from "./NodeCard"

function PipelineEditor({
    nodes,
    updateNode
}) {

    return (
        <div>
            {
                nodes.map(node => (
                    <NodeCard
                        key={node.id}
                        node={node}
                        updateNode={updateNode}
                    />
                ))
            }
        </div>
    )
}

export default PipelineEditor