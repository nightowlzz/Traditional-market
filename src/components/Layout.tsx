import KakaoLayout from './Kakao/KakaoLayout';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={`${styles.wrap} wrap`}>
      <KakaoLayout />
    </div>
  );
}
