'use client'
import React from "react";
import useSWR from "swr";
import MachineData from "./MachineData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Loader from "./Loader";
import Image from "next/image";
import internetError from "../../public/internetConnectivityError.svg";
import ProductionBarChartDashboard from "./charts/ProductionBarChartDashboard";
import SpeedLineChartDashboard from "./charts/SpeedLineChartDashboard";

// Define the fetcher function
const fetcher = async (url) => {
  const response = await fetch(url, { cache: "no-store" });
  const responseData = await response.json();

  if (responseData.message) {
    throw new Error(responseData.message);
  }

  return responseData;
};

const DashboardData = () => {
  const { data: machineData, error: errorMessage } = useSWR(
    process.env.NODE_ENV !== "production"
      ? `${process.env.NEXT_PUBLIC_LOCAL_HOST}api/dashboard`
      : `${process.env.NEXT_PUBLIC_DOMAIN_NAME}api/dashboard`,
      fetcher,{ refreshInterval: 5000 }
  );

  const loading = !machineData && !errorMessage;

  return (
    <div className="content-container">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          520: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {loading ? (
          <div className="min-h-[50vh]">
            <Loader />
          </div>
        ) : errorMessage ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="py-2 text-center font-bold text-lg text-white">
              <div className="flex flex-col items-center">
                <Image
                  src={internetError}
                  alt="SVG Image"
                  width={100}
                  height={100}
                />
                <p className="text-center font-semibold text-white">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        ) : (
          Array.isArray(machineData) &&
          machineData?.slice(0, 10).map((data, i) => (
            <SwiperSlide key={i}>
              <MachineData data={data} key={i} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="my-2">
        <ProductionBarChartDashboard data={machineData} />
      </div>
      <div className="my-2">
        <SpeedLineChartDashboard data={machineData} />
      </div>
    </div>
  );
};

export default DashboardData;
