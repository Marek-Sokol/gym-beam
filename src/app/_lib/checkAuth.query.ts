export async function checkAuth(): Promise<boolean> {
  const response = await fetch('/api/auth', {
    method: 'GET',
  });

  const result = await response.json();

  return result;
}
