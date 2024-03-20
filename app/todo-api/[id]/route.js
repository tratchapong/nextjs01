export async function GET(req, {params}) {
    return Response.json({
        title : `Belong to id:${params.id}`,
        id: params.id
    })
}