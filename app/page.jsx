import Link from "next/link";

export default function Home() {

  return (
    <div className="p-6 flex flex-col min-h-screen bg-gray-100">
       {/* navigate to the options page  */}
       

      <section className="flex flex-col m-auto">
        <div className="">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello, welcome to <span className="text-orange-700">UniAcc</span></h1>
          <h3 className=" text-gray-800">A place you will find good and cheap <span className="text-orange-700">accomodation</span>  during your <span className="font-bold">graduation</span></h3>
        </div>


        <section 
          className="flex flex-row mt-14 max-w-[130px] px-4 py-2 bg-orange-700 text-white rounded transform transition-transform duration-300 hover:scale-110"
        >
          <Link href="/districts" className="block">
            <h4 className="font-semibold items-end">Get Started</h4>
          </Link>
        </section>
      </section>

    </div>
  );
}

