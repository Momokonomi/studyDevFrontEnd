import svgWrapper from '../../components/ui/svgWrapper';

export default function SearchIcon() {
  return svgWrapper(() => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        focusable='false'
        aria-hidden='true'
        style={{ display: 'inherit', width: '100%', height: '100%' }}
      >
        <path
          clip-rule='evenodd'
          d='M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z'
          fill-rule='evenodd'
        ></path>
      </svg>
    );
  });
}