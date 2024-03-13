export function Cards() {
  return (
    <div className="flex flex-col items-center pt-10 pb-2">
      <h2 className="text-2xl font-semibold ">Bem vindo (a) ao Chat AWS Serviços!</h2>
      <div className="flex flex-row flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <h2 className="text-lg font-medium pb-2">Dúvidas gerais sobre os serviços da AWS exemplo:</h2>
          <div className="bg-[#778beb] text-white rounded-md p-6 shadow-lg">
            <li className="text-base font-medium">O que é AWS Route 53?</li>
            <li className="text-base font-medium">O que é AWS Lambda?</li>
            <li className="text-base font-medium">O que é AWS S3?</li>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <h2 className="text-lg font-medium pb-2">Dúvidas básicas sobre os serviços por categoria:</h2>
          <div className="bg-[#778beb]  text-white rounded-md p-6 shadow-lg">
            <li className="text-base font-medium">Quais os serviços disponiveis para DNS?</li>
            <li className="text-base font-medium">Qual os serviços disponiveis para Banco de Dados?</li>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <h2 className="text-lg font-medium pb-2">Dúvidas básicas sobre as Soluções de serviços da AWS exemplo:</h2>
          <div className="bg-[#778beb] text-white rounded-md p-6 shadow-lg">
            <li className="text-base font-medium"> Qual serviço da AWS para resoluções de DNS? </li>
            <li className="text-base font-medium">
              Qual serviço da AWS para resoluções de latência na entrega de conteúdo?
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
