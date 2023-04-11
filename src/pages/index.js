import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { useRouter } from "next/router";

const Home = () => {

  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const router = useRouter();

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    const passwordEntered = localStorage.getItem('passwordEntered');

    if (!passwordEntered) {
      router.replace('/password');
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Layout>
      <div className="w-screen h-screen relative">
        <Image
          src="/images/walking.jpg"
          alt="walking"
          width={viewportWidth}
          height={viewportHeight}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-[50%] left-[50%] lg:left-[200px]
          -translate-y-[50%] -translate-x-[50%] lg:-translate-x-0
          bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
          gap-[20px] cursive text-[#ffaa6b] w-[90%] lg:w-auto text-center"
        >
          <div className="flex flex-col gap-[12px] items-center">
            <h3 className="text-[64px]">La boda de</h3>
            <h1 className="text-[64px] lg:text-[80px]">Leslie & Jamieson</h1>
          </div>
          <h5 className="text-[40px] lg:text-[48px]">Tepoztlan, Morelos, Mexico</h5>
          <h5 className="text-[40px] lg:text-[48px]">January 27, 2024</h5>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
