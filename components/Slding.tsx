"use client"
"use client"

import { useState, useEffect, JSX, SVGProps } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Nav from "./nav"

const Slding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image} alt={`Hero background ${index + 1}`} layout="fill" className="w-full h-full object-cover" />
        </div>
      ))}


      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 space-y-6">
        
        <Nav />
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5">Discover the best in your city</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
          Search for restaurants, shops, and services near you.
        </p>
        <div className="w-full max-w-xl">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for businesses, restaurants, and more..."
              className="pl-12 pr-16 py-3 rounded-full bg-white/90 focus:bg-white shadow-lg"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-2">
              <Button variant="link" size="sm">
                Search
              </Button>
              <Button variant="secondary" size="sm">
                Deals
              </Button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">Browse Businesses</Button>
          <Button variant="secondary">Write a Review</Button>
        </div>
      </div>
    </section>
  )
}

export default Slding

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
