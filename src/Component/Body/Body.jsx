const Body = () => {
    return (
        // background image and other content
        <div className="lg:px-32 mb-14 lg:pt-10">
            <div className="hero min-h-screen mt-8 rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/CW0mjrJ/ramadan-bg.png)'}}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-4xl font-extrabold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-8 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex gap-4 items-center justify-center">
                            <button className="btn btn-success rounded-3xl font-bold ">Explore Now</button>
                            <button className="btn btn-outline btn-error rounded-3xl font-bold ">Our Feedback</button>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;