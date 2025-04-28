export async function login(postData: {username: string, password: string}): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  const token = await response.json();

  return token?.token as string;
}
