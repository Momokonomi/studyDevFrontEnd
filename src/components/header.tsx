import HamburgerIcon from '../public/icons/hamburgerIcon';
import YoutubeIcon from '../public/icons/youtubeIcon';
import SearchForm from './searchFrom';
import SoundSearchIcon from '../public/icons/soundSearchIcon';
import SubmitMovieIcon from '../public/icons/submitMovieIcon';
import NoticeIcon from '../public/icons/noticeIcon';
import ChannelIcon from '../public/icons/channelIcon';
import Button from './ui/buttons/button';
export default function Header() {
  return (
    <header>
      <Button>
        <HamburgerIcon />
      </Button>
      <YoutubeIcon />
      <SearchForm />
      <SoundSearchIcon />
      <SubmitMovieIcon />
      <NoticeIcon />
      <ChannelIcon />
    </header>
  );
}
