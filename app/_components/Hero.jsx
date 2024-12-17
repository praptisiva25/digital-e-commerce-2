import React from "react";
import {Button} from "../../components/ui/button"
import Image from "next/image"

function Hero () {

    return(
        <div className="bg-green-700 p-10 px-28 lg:px-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
            <div> 
                <h2 className="font-extrabold text-white text-5xl">Speed Up Your Creative Workflow</h2>
                <p className="text-gray-200 mt-5">Join a growing family of 43,436  designers, creators and makers from around the world</p>
                <div className="flex gap-5 mt-8">
                  <Button>Explore</Button>
                  <Button className="bg-red-500">Sell</Button>

                </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={'/pc2.png'} alt='pc' width={300} height={300} />
            </div>

          </div>
        </div>
    )
}

export default Hero