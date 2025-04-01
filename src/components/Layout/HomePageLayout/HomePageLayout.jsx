import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import styles from './styles.module.scss';
function HomePageLayout({ children }) {
  const { container, header } = styles;

  return (
    <div className={container}>
      <div className={header}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomePageLayout;
