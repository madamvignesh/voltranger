import { Heading, Main } from "./styledComponent";

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
    </div>
  </Main>)
}
