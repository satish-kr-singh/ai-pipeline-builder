from utils.dependency_parser import extract_dependencies

def validate_pipeline(nodes):

    node_ids = {node.id for node in nodes}

    errors = []

    for node in nodes:

        dependencies = extract_dependencies(node.template)

        print(f"\nNode: {node.id}")
        print("Dependencies:", dependencies)

        for dep in dependencies:

            # Missing dependency
            if dep not in node_ids:
                errors.append(
                    f"Node '{node.id}' depends on missing node '{dep}'"
                )

            # Self dependency
            if dep == node.id:
                errors.append(
                    f"Node '{node.id}' cannot depend on itself"
                )

    return errors