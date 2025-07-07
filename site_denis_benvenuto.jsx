import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Soluções jurídicas inteligentes para negócios sólidos.
          </h1>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 mt-4 text-lg">
            Entrar em contato
          </Button>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🏠</div>
            <h2 className="text-xl font-semibold">Imobiliário</h2>
          </div>
          <div>
            <div className="text-4xl mb-2">📜</div>
            <h2 className="text-xl font-semibold">Contratual</h2>
          </div>
          <div>
            <div className="text-4xl mb-2">🔗</div>
            <h2 className="text-xl font-semibold">Societário</h2>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img src="/denis-benvenuto.jpg" alt="Denis Benvenuto" className="w-64 h-auto rounded-xl shadow-lg" />
          <div>
            <h2 className="text-2xl font-serif mb-4">Quem Somos</h2>
            <p className="text-gray-700 mb-2">
              Consultoria jurídica personalizada, com foco na mitigação de riscos e alta precisão técnica.
            </p>
            <p className="text-gray-700">
              Atuação estratégica em contratos, negócios imobiliários e estruturas societárias.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-lg font-serif">Atendimento personalizado</p>
      </footer>
    </div>
  );
}
