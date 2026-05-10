import re

def resolve_variable(path: str, variables: dict):
    """
    Resolves nested paths like:
    keywords.output
    """

    keys = path.split(".")

    value = variables

    for key in keys:
        if isinstance(value, dict):
            value = value.get(key)
        else:
            return f"{{{{{path}}}}}"

    return value if value is not None else f"{{{{{path}}}}}"

def render_template(template: str, variables: dict):

    def replace(match):
        path = match.group(1).strip()

        value = resolve_variable(path, variables)

        return str(value)

    pattern = r"\{\{(.*?)\}\}"

    return re.sub(pattern, replace, template)