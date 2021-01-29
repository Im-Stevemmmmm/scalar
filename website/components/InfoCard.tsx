import Image from "next/image";
import { Children } from "utils/children";

interface InfoCardProps extends Children {
    title: string;
    iconPath: string;
}

export const InfoCard = ({ title, iconPath, children }: InfoCardProps) => {
    return (
        <figure className="w-64 h-48 bg-white p-4 m-5 text-center">
            <div className="flex flex-col items-center mb-2 space-y-2">
                <Image src={iconPath} width={50} height={50} />
                <h1 className="font-bold text-gray-800 text-lg">{title}</h1>
            </div>

            <p className="text-gray-600">{children}</p>
        </figure>
    );
};
