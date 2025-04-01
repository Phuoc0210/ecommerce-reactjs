import Banner from '@/components/Banner/Banner';
import styles from './styles.module.scss';

function HomePage() {
  const { container } = styles;

  return (
    <div className={container}>
      <Banner />
    </div>
  );
}

export default HomePage;
