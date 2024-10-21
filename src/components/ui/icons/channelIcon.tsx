import icon from '../../../app/public/images/channelIcon.jpg';

export default function ChannelIcon() {
  return (
    <button>
      <img src={icon.src} alt='チャンネルアイコン' />
    </button>
  );
}
