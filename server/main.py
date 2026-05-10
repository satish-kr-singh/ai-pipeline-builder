from fastapi import FastAPI
from pydantic import BaseModel
from services.gemini_service import run_gemini

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    template: str
    variables: dict = {}

class PipelineRequest(BaseModel):
    nodes : list[Node]

from services.pipeline_executor import execute_pipeline

from utils.pipeline_validator import validate_pipeline

@app.post("/run-pipeline")
def run_pipeline(data: PipelineRequest):

    errors = validate_pipeline(data.nodes)

    if errors:
        return {
            "success": False,
            "errors": errors
        }

    result = execute_pipeline(data.nodes)

    return {
        "success": True,
        "results": result
    }