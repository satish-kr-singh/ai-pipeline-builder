from services.gemini_service import run_gemini

def execute_pipeline(nodes):

    context = {}
    results = []

    for node in nodes:

        # Merge context + node variables
        variables = {
            **context,
            **(node.variables or {})
        }

        output = run_gemini(
            node.template,
            variables
        )

        print("OUTPUT:")
        print(output)

        # Store by node id
        context[node.id] = {
            "output": output
        }

        results.append({
            "node_id": node.id,
            "output": output
        })

    return results