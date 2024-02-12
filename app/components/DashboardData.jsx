"use client";
import React, { useState, useEffect } from "react";
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

const DashboardData = () => {
  const [machineData, setMachineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url, { cache: "no-store" });
      const responseData = await response.json();

      if (responseData.message) {
        setErrorMessage(responseData.message);
        setMachineData([]);
      } else {
        setMachineData(responseData);
        setErrorMessage(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("An error occurred while fetching data.");
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  const url =
    process.env.NODE_ENV !== "production"
      ? `${process.env.NEXT_PUBLIC_LOCAL_HOST}api/dashboard`
      : `${process.env.NEXT_PUBLIC_DOMAIN_NAME}api/dashboard`;

  useEffect(() => {
    setIsMounted(true);

    const fetchDataAndReload = async () => {
      await fetchData();
      // Additional logic for HotReload can be placed here
    };

    fetchDataAndReload();

    const interval = setInterval(fetchDataAndReload, 5000);

    return () => {
      setIsMounted(false);
      clearInterval(interval);
    };
  }, [fetchData]);
  // min-h-screen rounded overflow-hidden px-2 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 py-2
  return (
    <div className="content-container">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          520: {
            // when window width is >= 520px
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
