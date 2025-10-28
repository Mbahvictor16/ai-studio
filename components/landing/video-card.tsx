export function VideoCard() {
    return (
        <div className="mt-20">    
            <div className="flex flex-wrap justify-center items-center gap-8">
               <div className="glass-card h-[400px] w-[250px] lg:h-[800px] lg:w-[400px] rounded-full rounded-lg overflow-hidden">
                    <video src="/vid/Opening_Scene__Hook___A_wide_cinematic_shot_of_a_cozy_outdoor_caf__at_sunset__Lantern_lights_glow_.mp4" className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
               </div>
               <div className="glass-card h-[400px] w-[250px] lg:h-[800px] lg:w-[400px] rounded-full rounded-lg overflow-hidden">
                    <video src="/vid/The_Meet__Medium_shot_of_Lena_smiling__sipping_her_drink__She_says___Hi__I_m_Lena__Digital_markete.mp4" className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
               </div>
            </div>
        </div>
    )
}