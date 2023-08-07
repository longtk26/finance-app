import { FacebookSVG, GoogleSVG } from "@/SVGs";
import { ProviderProps } from "./Provider.type";

const providers: { [key: string]: any } = {
    google: {
        style: "google-provider",
    },
    facebook: {
        style: "facebook-provider",
    },
};

const Provider = ({ type }: ProviderProps) => {
    const googleProvider = type === "google";
    const facebookProvider = type === "facebook";

    return (
        <button
            className={`flex px-4 py-2 group items-center gap-4 w-[280px] 
            rounded-[10px] ${providers[type].style} mb-4`}
        >
            {googleProvider && <GoogleSVG />}
            {facebookProvider && <FacebookSVG className="facebook-svg" />}
            <span className="font-medium">
                Connect with <span className="capitalize">{type}</span>
            </span>
        </button>
    );
};

export default Provider;
