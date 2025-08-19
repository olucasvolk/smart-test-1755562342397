export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transforme Suas Ideias em Realidade
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Começar Agora
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento Rápido</h3>
              <p className="text-gray-600">
                Criamos aplicações modernas com as melhores tecnologias do mercado.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Soluções Inovadoras</h3>
              <p className="text-gray-600">
                Pensamos fora da caixa para resolver seus desafios únicos.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Foco em Resultados</h3>
              <p className="text-gray-600">
                Cada projeto é desenvolvido com foco no sucesso do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contato conosco e vamos transformar sua ideia em realidade.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Falar Conosco
          </button>
        </div>
      </section>
    </div>
  );
}