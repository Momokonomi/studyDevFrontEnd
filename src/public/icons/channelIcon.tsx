import icon from '../images/channelIcon.jpg';
import Image from 'next/image';

export default function ChannelIcon() {
  return <Image src={icon.src} alt='' width={100} height={100} />;
}
