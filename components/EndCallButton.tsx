'use client'

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const EndCallButton = () => {

  const router = useRouter();
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call?.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      className="rounded-md bg-red-500 px-4 py-2.5"
      onClick={async () => {
        await call?.endCall();
        router.push('/');
      }}
    >
      End Call for everyone
    </Button>
  )
}

export default EndCallButton