import Head from "next/head";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-gray-50 to-gray-200">
            <Head>
                <title>Transit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mx-5">
                    <div className="flex flex-row max-h-max">
                        <h1 className="uppercase font-bold text-6xl text-gray-800">
                            Transit
                            <svg
                                className="float-right ml-2"
                                version="1.1"
                                id="Layer_1"
                                xmlBase="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="1em"
                                height="1em"
                                viewBox="0 0 101.15 122.88"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path d="M18.03,27.19c8.26,2.76,19.76,4.46,32.53,4.46c12.77,0,24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22 c0-2.87-4.48-5.8-11.74-8.22C74.83,8,63.33,6.29,50.56,6.29c-12.77,0-24.27,1.71-32.53,4.46C2.65,15.89,2.22,21.91,18.03,27.19 L18.03,27.19z M94.84,85.59c-2.58,1.77-5.87,3.32-9.76,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55v18.85c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46 c5.01-1.67,8.69-3.59,10.5-5.55c1.49-1.62,1.25-2.69,1.25-4.64V85.59L94.84,85.59z M0,18.97C0,13.1,6.13,8.12,16.04,4.81 C24.94,1.84,37.15,0,50.56,0c13.41,0,25.62,1.84,34.52,4.81c9.02,3.01,14.91,7.41,15.89,12.61c0.12,0.33,0.18,0.69,0.18,1.06v86.74 c0,6.01-11.49,11.33-16.07,12.86c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-4.69-1.57-15.97-6.71-15.97-12.86c0-0.72,0-1.32,0-2.01C0.07,75.12,0,47.04,0,18.97L0,18.97z M6.36,76.64 c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03 V57.73c-2.58,1.77-5.89,3.32-9.78,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55V76.64L6.36,76.64z M6.36,48.78c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46 s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03V28.52c-2.58,1.77-5.89,3.32-9.78,4.62 c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81c-3.84-1.28-7.11-2.82-9.68-4.55V48.78L6.36,48.78z" />
                                </g>
                            </svg>
                        </h1>
                    </div>

                    <p className="my-2">
                        A reusable, ease to use, and portable solution for the
                        normalization of columns.
                    </p>

                    <button className="py-2 px-6 text-white bg-purple-600 rounded-sm my-2 transition hover:bg-purple-500">
                        Start Normalizing Your Tables &rarr;
                    </button>

                    <div className="my-5">
                        <h1 className="uppercase font-bold text-4xl text-gray-800">
                            How it Works
                        </h1>

                        <p className="max-w-xl">
                            Transit is an executable UNIX script / EXE file that
                            normalizes a column (or multiple columns) based on a
                            specfied delimiter.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
