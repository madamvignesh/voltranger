import Image from "next/image";
import model1 from '../../assets/images/model1.jpg'
import feature1 from '../../assets/images/feature1.jpeg'

export default function MoreDetails(){
    return(
        <div className="pt-24 bg-lavender">
            <div className="p-5">
                <h1 className="text-3xl font-bold mb-5">Introduction of VoltRanger</h1>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-justify md:w-7/12 text-gray">
                        VoltRanger makes it a versatile solution for users. For outdoor enthusiasts, it offers a guilt-free way to explore rugged terrain 
                        without leaving a detrimental impact on the environment. It is a practical, efficient, and reliable 
                        alternative for professionals in agriculture, forestry, and conservation to be able to perform 
                        essential tasks that have reduced environmental impacts compared to traditional off-road 
                        vehicles. The electric platform ensures a quiet, efficient, and powerful way of overcoming 
                        difficult terrain, and the modular approach guarantees it stays nimble and open to changes and 
                        innovations in needs and technology. 
                        VoltRanger redefines driving off-road in a world that is sustainable, bridging the 
                        excitement of exploring with the responsibility of preserving nature
                    </p>
                    <Image src={model1} alt="VoltRanger" className="w-96 h-96 md:w-4/12 flex mx-auto md:mx-0" />
                </div>
                <h1 className="text-3xl font-bold mb-5">Feature of VoltRanger</h1>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <Image src={feature1} alt="VoltRanger" className="w-96 h-96 md:w-4/12 flex mx-auto md:mx-0" />
                    <ol className="list-decimal list-inside bg-gray-100 p-4 rounded-lg text-justify md:w-7/12">
                        <li>Off-road electric vehicles offer significant advantages over their combustion-engine counterparts.</li>
                        <li>
                            Traditional off-road vehicles have long been appreciated for their strength and reliability, especially for
                            outdoor enthusiasts, travelers, and those in heavy-duty occupations
                        </li>
                        <li>However, they consume fuel and pollute immensely.</li>
                        <li>
                            The demand for clean alternatives grew immensely, which was of concern both among environmental enthusiasts 
                            and automobile manufacturers who were seeking alternative options for heavy-duty and off-road use
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}