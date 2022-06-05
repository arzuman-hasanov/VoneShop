import Skeleton from "react-loading-skeleton";

const Loading = () => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <Skeleton
                        height={35}
                        width={50}
                        className="mb-3"
                    />

                    <Skeleton
                        height={35}
                        width={80}
                        className="mb-3 ms-1"
                    />

                    <Skeleton
                        height={35}
                        width={80}
                        className="mb-3 ms-1"
                    />

                    <Skeleton
                        height={35}
                        width={70}
                        className="mb-3 ms-1"
                    />

                    <Skeleton
                        height={35}
                        width={70}
                        className="mb-3 ms-1"
                    />
                </div>
            </div>

            <div className="col-md-3">
                <Skeleton
                    height={350}
                />
            </div>
            <div className="col-md-3">
                <Skeleton
                    height={350}
                />
            </div>
            <div className="col-md-3">
                <Skeleton
                    height={350}
                />
            </div>
            <div className="col-md-3">
                <Skeleton
                    height={350}
                />
            </div>

        </>
    );
}

export default Loading;