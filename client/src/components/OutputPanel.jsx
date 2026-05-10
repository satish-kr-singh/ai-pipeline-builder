function OutputPanel({ results }) {

    if (!results) return null

    return (
        <div>

            <h2>Outputs</h2>

            {
                results.map(result => (

                    <div
                        key={result.node_id}
                        style={{
                            border: "1px solid green",
                            marginBottom: 16,
                            padding: 12
                        }}
                    >
                        <h3>{result.node_id}</h3>

                        <pre>
                            {result.output}
                        </pre>

                    </div>
                ))
            }

        </div>
    )
}

export default OutputPanel