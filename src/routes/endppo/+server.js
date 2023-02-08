import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const res = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
    return json(res)
}

export async function POST({ request }) {
    const {title, body, userId} = await request.json();
    const res = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    return json(res);
  }