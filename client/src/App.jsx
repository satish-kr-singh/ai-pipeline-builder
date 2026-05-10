import { useState } from "react"

import PipelineEditor from "./components/PipelineEditor"
import OutputPanel from "./components/OutputPanel"

import { runPipeline } from "./services/api"

function App() {

    const [nodes, setNodes] = useState([
        {
            id: "summary",
            template: "Summarize:\n{{input}}",
            variables: {
                input: "FastAPI is a modern Python framework."
            }
        },
        {
            id: "keywords",
            template:
                "Extract 3 keywords:\n{{summary.output}}",
            variables: {}
        },
        {
            id: "tweet",
            template:
                "Write a tweet using:\n{{summary.output}}\n{{keywords.output}}",
            variables: {}
        }
    ])

    const [results, setResults] = useState(null)

    const updateNode = (id, updatedNode) => {

        setNodes(prev =>
            prev.map(node =>
                node.id === id
                    ? updatedNode
                    : node
            )
        )
    }

    const handleRun = async () => {

        const data = await runPipeline(nodes)

        setResults(data.results)
    }

    return (
        <div style={{ padding: 24 }}>

            <h1>AI Pipeline Builder</h1>

            <PipelineEditor
                nodes={nodes}
                updateNode={updateNode}
            />

            <button onClick={handleRun}>
                Run Pipeline
            </button>

            <OutputPanel results={results} />

        </div>
    )
}

export default App