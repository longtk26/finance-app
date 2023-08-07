import Provider from "./Provider/Provider";

const Oauth = () => {
    return (
        <section className="mr-10">
            <span className="text-[16px] text-[#707070] mb-6 block">
                Using social networking accounts
            </span>
            <div>
                <Provider type="google" />
                <Provider type="facebook" />
            </div>
        </section>
    );
};

export default Oauth;
