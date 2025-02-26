"use client";

import Script from "next/script";
import { useCallback, useRef, useEffect } from "react";

const mapId = "naver-map";

export type NaverMap = naver.maps.Map;

export default function Map() {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.4316116, 126.8002703),
      zoom: 18,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    const markerOptions = {
      position: new naver.maps.LatLng(37.4316116, 126.8002703),
      map: map,
    };

    new naver.maps.Marker(markerOptions);
  }, []);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      initializeMap();
    }
  }, [initializeMap]);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        onLoad={initializeMap}
      />
      <div id={mapId} className="aspect-[7/6] w-full bg-gray-200" />
    </div>
  );
}
