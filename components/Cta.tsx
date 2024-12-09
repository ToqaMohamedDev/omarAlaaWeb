import Link from "next/link";
import { Button } from "./ui/button";



const Cta=()=>{
   return <section className="py-24" >
    <div className="container mx-auto">
       <div className="flex flex-col items-center">
        <h2 className="h2 max-w-xl text-center mb-8">
        على استعداد لتحويل أفكارك إلى واقع؟ أنا هنا للمساعدة
        </h2>
        <Link href='whatsapp://send?phone=+201111529018&text=السلام عليكم'><Button>التــواصـل</Button></Link>
        </div> 
    </div>
   </section>
}

export default Cta;