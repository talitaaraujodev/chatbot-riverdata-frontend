import { Oval } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className="flex items-center mt-10 mb-4">
      <Oval
        height="30"
        width="30"
        color="#5964e0"
        secondaryColor="#999"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <span className="ml-2 text-[#6e8098] text-lg">Carregando...</span>
    </div>
  );
}
