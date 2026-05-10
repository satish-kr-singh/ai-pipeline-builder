export async function runPipeline(nodes) {
  const response = await fetch("http://127.0.0.1:8000/run-pipeline", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nodes }),
  });

  return response.json();
}
