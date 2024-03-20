export async function GET() {
    console.log('todo-api: GET')
    return Response.json( {
        title : 'Learn HTML'
     } )
} 