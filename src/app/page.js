
import RenderModel from "@/components/RenderModel";

import Navigation from "@/components/navigation";

import './fonts.css';
import Avatar from "@/components/models/Avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative " style={{fontFamily:'Lamoric Rowen'}}>
   

      <div className="w-full h-screen ">
      

        <Navigation />
        <RenderModel>
          <Avatar />
        </RenderModel>
      </div>
    </main>
  );
}
