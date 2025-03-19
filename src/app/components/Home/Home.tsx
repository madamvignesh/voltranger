import { Heading, Main } from "./styledComponent";
import Image from "next/image";
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'

import info1 from '../../assets/images/info1.png'
import info2 from '../../assets/images/info2.png'

export default function HomeSection() {
  return (
  <Main>
    <div className="bg-celeste">
        <Heading className="flex md:items-center">
            <div className="md:w-7/12 p-8 ">
                <h1 className="md:text-4xl md:text-left text-center font-bold text-xl">VoltRanger</h1>
                <p className="text-justify md:text-left md:text-base text-sm">
                    The VoltRanger is an eco-friendly off-road electric scooter, engineered for rugged terrains.
                    Equipped with a powerful 900W motor controller and a durable AISI 4130 frame, it offers exceptional
                    performance and load-carrying capacity. Designed for low maintenance and cost-effectiveness, VoltRanger
                    revolutionizes off-road travel with sustainable energy solutions.
                </p>
                <button className="bg-celeste text-black px-4 py-2 rounded-md">Read More...</button>
            </div>
        </Heading>
        <section className="bg-celeste">
          <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center m-6">What Our VoltRanger is Capable of?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="p-6 rounded-lg flex flex-col items-center">
                <Image src={icon1} alt="icon1" className="md:w-36 md:h-36 w-24 h-24 mb-2 " />
                <p className="text-center">Durability</p>
              </div>
              <div className="p-6 rounded-lg flex flex-col items-center">
                <Image src={icon2} alt="icon2" className="md:w-36 md:h-36 w-24 h-24 mb-2" />
                <p className="text-center">Light Weight</p>
              </div>
              <div className="p-6 rounded-lg flex flex-col items-center">
                <Image src={icon3} alt="icon3" className="md:w-36 md:h-36 w-24 h-24 mb-2" />
                <p className="text-center">Less Maintenance</p>
              </div>
              <div className="p-6 rounded-lg flex flex-col items-center">
                <Image src={icon4} alt="icon4" className="md:w-36 md:h-36 w-24 h-24 mb-2" />
                <p className="text-center">Unique</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-celeste">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-2xl m-6">Foundation of VoltRanger</h2>
            <div className="md:flex items-center justify-between p-5 md:space-x-8">
              <h4 className="md:w-6/12 w-full text-justify">VoltRanger was founded with a vision to revolutionize off-road mobility by combining cutting-edge 
                electric vehicle technology with sustainability. The idea was born from the need for an eco-friendly 
                alternative to traditional fuel-powered off-road vehicles, ensuring high performance without harming 
                the environment. Inspired by advancements in electric drivetrains and energy-efficient systems, our 
                team set out to create a vehicle that balances power, durability, and sustainability for adventure 
                enthusiasts and professionals alike.
              </h4>
              <Image src={info1} alt="info1" className="md:w-5/12 md:h-auto w-11/12 h-11/12" />
            </div>
            <div className="md:flex items-center justify-between p-5 md:space-x-8">
              <h4 className="md:w-6/12 w-full text-justify order-1 md:order-2">
                VoltRanger was founded with a vision to revolutionize off-road mobility by combining cutting-edge 
                electric vehicle technology with sustainability. The idea was born from the need for an eco-friendly 
                alternative to traditional fuel-powered off-road vehicles, ensuring high performance without harming 
                the environment. Inspired by advancements in electric drivetrains and energy-efficient systems, our 
                team set out to create a vehicle that balances power, durability, and sustainability for adventure 
                enthusiasts and professionals alike.
              </h4>
              <Image src={info2} alt="info2" className="md:w-5/12 md:h-auto w-11/12 h-11/12" />
            </div>
          </div>
        </section>
    </div>
  </Main>)
}
