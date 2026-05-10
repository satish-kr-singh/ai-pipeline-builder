import re

def extract_dependencies(template:str):
    pattern = r"\{\{(.*?)\}\}"

    matches = re.findall(pattern, template)

    dependencies = set()

    for match in matches:
        path = match.strip()

        if "." in path:
            node_id = path.split(".")[0]

            dependencies.add(node_id)

    return dependencies