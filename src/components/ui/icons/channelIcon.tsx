import icon from '../../../app/public/images/channelIcon.jpg';
import Image from 'next/image';

export default function ChannelIcon() {
  return (
    <button>
      <Image src={icon.src} alt='' width={100} height={100} />
    </button>
  );
}
