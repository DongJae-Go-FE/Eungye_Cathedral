"use client";

import Script from "next/script";

import { useCallback, useRef } from "react";

const mapId = "naver-map";

export type NaverMap = naver.maps.Map;
type Lng = number;
type Lat = number;
export type Coordinates = [Lng, Lat];

export default function Map() {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng([
        37.4403306396609, 126.807329282198,
      ]),
      zoom: 15,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;
  }, []);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: "100%", height: 300 }} />
    </div>
  );
}
