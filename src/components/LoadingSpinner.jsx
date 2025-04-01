export function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center h-[800px]">
        <div className="spinner-border animate-spin border-4 border-t-4 border-gray-200 rounded-full w-16 h-16"></div>
        <span className="ml-4 text-xl">Cargando...</span>
      </div>
    );
  }
  