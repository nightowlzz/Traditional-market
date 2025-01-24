import { useEffect, useRef } from 'react';

export default function KakaoLayout() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao) return;

      const { kakao } = window;
      // Kakao Maps 초기화
      kakao.maps.load(() => {
        if (mapRef.current) {
          mapRef.current = new kakao.maps.Map(mapRef.current, {
            center: new kakao.maps.LatLng(37.566535, 126.9779692),
            level: 8, // 초기 줌 레벨
          });
        }
      });
    };

    // Kakao SDK 로드 완료 이벤트를 기다림
    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      document.addEventListener('kakao-sdk-loaded', initializeMap);
    }

    // 이벤트 리스너 정리
    return () => {
      document.removeEventListener('kakao-sdk-loaded', initializeMap);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100&', height: '100vh' }}></div>
  );
}
