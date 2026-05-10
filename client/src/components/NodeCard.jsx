import { useState } from "react"

function NodeCard({ node, updateNode }) {

    const handleTemplateChange = (e) => {
        updateNode(node.id, {
            ...node,
            template: e.target.value
        })
    }

    const handleVariablesChange = (e) => {

        try {

            const parsed = JSON.parse(e.target.value)

            updateNode(node.id, {
                ...node,
                variables: parsed
            })

        } catch {
            // ignore invalid json temporarily
        }
    }

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: 16,
                marginBottom: 16
            }}
        >
            <h3>{node.id}</h3>

            <textarea
                rows={6}
                cols={50}
                value={node.template}
                onChange={handleTemplateChange}
                placeholder="Template"
            />

            <br />

            <textarea
                rows={5}
                cols={50}
                defaultValue={
                    JSON.stringify(
                        node.variables,
                        null,
                        2
                    )
                }
                onChange={handleVariablesChange}
            />
        </div>
    )
}

export default NodeCard