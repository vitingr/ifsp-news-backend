import { render } from '@react-email/render'

import { InviteEmail } from './index'

export const generateInviteEmailHtml = async (inviteLink: string) => {
  return await render(<InviteEmail inviteLink={inviteLink} />)
}
