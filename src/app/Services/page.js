import ScrollToButton from "../_components/scrollableBtn"

export default function page (){

    return (
        <main>
            <h1 className=" text-5xl text-black text-center py-5">Our Services</h1>
            

            <div className=" md:px-32 items-center py-10 flex md:flex-row flex-col">

                <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="https://image.petmd.com/files/clean-dog-breeds-main.jpg?w=640&q=75" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cleaning your dog</h2>
                        <p className=" mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam commodo pulvinar lorem ac viverra neque vehicula et Ut rhoncus ipsum libero id aliquam justo pharetra ut Fusce ultrices turpis sed tortor fermentum aliquam Nulla lacinia leo vitae felis malesuada vel venenatis odio commodo Phasellus quis nisi nec</p>
                        <div className="card-actions justify-end">
                        <ScrollToButton targetId="targetDiv1" buttonText="See More" />
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="https://www.coxwellvet.com/wp-content/uploads/sites/237/2022/03/Nail-Trimming-Photo-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">treatment for your dog</h2>
                        <p className=" mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam commodo pulvinar lorem ac viverra neque vehicula et Ut rhoncus ipsum libero id aliquam justo pharetra ut Fusce ultrices turpis sed tortor fermentum aliquam Nulla lacinia leo vitae felis malesuada vel venenatis odio commodo Phasellus quis nisi nec</p>
                        <div className="card-actions justify-end">
                        <ScrollToButton targetId="targetDiv2" buttonText="See More" />
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="https://img.freepik.com/free-photo/veterinarian-checking-dog-medium-shot_23-2149143871.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Diagnosing your dog</h2>
                        <p className=" mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam commodo pulvinar lorem ac viverra neque vehicula et Ut rhoncus ipsum libero id aliquam justo pharetra ut Fusce ultrices turpis sed tortor fermentum aliquam Nulla lacinia leo vitae felis malesuada vel venenatis odio commodo Phasellus quis nisi nec</p>
                        <div className="card-actions justify-end">
                        <ScrollToButton targetId="targetDiv3" buttonText="See More" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="hero min-h-screen bg-red-200" id="targetDiv1">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://image.petmd.com/files/clean-dog-breeds-main.jpg?w=640&q=75" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="md:m-20 text-center md:text-left">
                    <h1 className="text-5xl font-bold">Cleaning your dog</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <h1 className=" font-bold">Price: 4$ </h1>
                    <button className="btn btn-wide">Order Now!</button>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-yellow-400" id="targetDiv2">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://www.coxwellvet.com/wp-content/uploads/sites/237/2022/03/Nail-Trimming-Photo-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="md:m-20 text-center md:text-left">
                    <h1 className="text-5xl font-bold">treatment for your dog</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <h1 className=" font-bold">Price: 12$ </h1>
                    <button className="btn btn-wide">Order Now!</button>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-orange-300" id="targetDiv3">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/veterinarian-checking-dog-medium-shot_23-2149143871.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="md:m-20 text-center md:text-left">
                    <h1 className="text-5xl font-bold">Diagnosing your dog</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <h1 className=" font-bold">Price: 9$ </h1>
                    <button className="btn btn-wide">Order Now!</button>
                    </div>
                </div>
            </div>

        </main>
    )
}