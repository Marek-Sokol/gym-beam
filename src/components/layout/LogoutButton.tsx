import { Button } from '@/components';
import { logoutAction } from '@/app/_lib/actions/logout';

export function LogoutButton() {
  return <Button onClick={logoutAction}>Odhlásiť</Button>;
}
