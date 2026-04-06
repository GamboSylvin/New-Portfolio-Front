import { isRouteErrorResponse, useRouteError } from "react-router";

function AppErrorBoundary() {
    const error = useRouteError();

    // derive a readable message depending on error type
    const getMessage = () => {
        if (isRouteErrorResponse(error)) {
            return error.data || "A route error occurred.";
        } else if (error instanceof Error) {
            return error.message;
        }
        return "An unknown error occurred.";
    };

    const message = getMessage();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white shadow rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-gray-700 mb-4">
                    Something went wrong while loading the page.
                </p>
                <p className="text-gray-500 mb-6 wrap-break-words">{message}</p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Retry
                    </button>
                    <a
                        href="/"
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                        Home
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AppErrorBoundary;