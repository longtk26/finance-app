import Provider from "./Provider/Provider";

const Oauth = () => {
    return (
        <section className="md:mr-10">
            <span className="text-[16px] hidden  text-[#707070] mb-6 md:block">
                Using social networking accounts
            </span>
            <div>
                <Provider type="google" />
                <Provider type="facebook" />
            </div>
            <div className="md:hidden w-full mb-4 flex items-center justify-center">
                <div className="h-[2px] w-[48%] mr-2 bg-black"></div>
                <span className="block">Or</span>
                <div className="h-[2px] w-[48%] ml-2 bg-black"></div>
            </div>
        </section>
    );
};

export default Oauth;
