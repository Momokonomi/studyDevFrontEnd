import svgWrapper from '../../components/ui/svgWrapper';

/**
 * ハンバーガーアイコン
 * @returns ハンバーガーアイコン
 */
export default function HamburgerIcon() {
  return svgWrapper(() => {
    return (
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <title>Hamburger Icon</title>
        <desc>Hamburger Icon</desc>
        <path d='M6 7 L26 7' stroke='black' stroke-width='2' />
        <path d='M6 15 L26 15' stroke='black' stroke-width='2' />
        <path d='M6 23 L26 23' stroke='black' stroke-width='2' />
      </svg>
    );
  });
}
