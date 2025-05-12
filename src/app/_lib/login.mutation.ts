export async function login(postData: {
  username: string;
  password: string;
}): Promise<string> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    if (response.status === 401)
      throw new Error('Invalid username or password');
    throw new Error('Failed to fetch token');
  }

  const token = await response.json();

  return token?.token as string;
}
