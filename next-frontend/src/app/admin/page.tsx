"use client";

import { useRef } from "react";
import { useMap } from "../../hooks/useMaps";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef);

  return <div className="h-screen w-full bg-default" ref={mapContainerRef} />;
}

export default AdminPage;