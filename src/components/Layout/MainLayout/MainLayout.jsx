import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import styles from './styles.module.scss';
function MainLayout({ children }) {
  const { container } = styles;

  return (
    <div className={container}>
      <div>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
