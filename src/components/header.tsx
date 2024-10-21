import HamburgerIcon from './ui/icons/hamburgerIcon';
import YoutubeIcon from './ui/icons/youtubeIcon';
import SearchForm from './searchFrom';
import SoundSearchIcon from './ui/icons/soundSearchIcon';
import SubmitMovieIcon from './ui/icons/submitMovieIcon';
import NoticeIcon from './ui/icons/noticeIcon';
import ChannelIcon from './ui/icons/channelIcon';
export default function Header() {
  return (
    <header>
      <HamburgerIcon />
      <YoutubeIcon />
      <SearchForm />
      <SoundSearchIcon />
      <SubmitMovieIcon />
      <NoticeIcon />
      <ChannelIcon />
    </header>
  );
}
