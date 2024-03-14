import NextLink from 'next/link';
import Link from '@mui/material/Link';

const HomePage = () => {
  return (
    <div>
      <Link href="/mustaj" color="secondary" component={NextLink}>
        Start
      </Link>
    </div>
  );
}

export default HomePage;