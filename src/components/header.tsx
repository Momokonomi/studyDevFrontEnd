import HamburgerIcon from '../public/icons/hamburgerIcon';
import YoutubeIcon from '../public/icons/youtubeIcon';
// import SearchForm from './searchFrom';
import SoundSearchIcon from '../public/icons/soundSearchIcon';
import SubmitMovieIcon from '../public/icons/submitMovieIcon';
import NoticeIcon from '../public/icons/noticeIcon';
import ChannelIcon from '../public/icons/channelIcon';
import Button from './ui/button/button';
import styles from './header.module.css';

export default function Header() {
  return (
    <header id={styles.header}>
      <Button>
        <HamburgerIcon />
      </Button>
      <Button>
        <YoutubeIcon />
      </Button>
      {/* <Button>
        <SearchForm />
      </Button> */}
      <Button>
        <SoundSearchIcon />
      </Button>
      <Button>
        <SubmitMovieIcon />
      </Button>
      <Button>
        <NoticeIcon />
      </Button>
      <Button>
        <ChannelIcon />
      </Button>
    </header>
  );
}
