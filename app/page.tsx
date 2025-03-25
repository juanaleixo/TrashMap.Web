import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col items-center">
        <Image
          src="/ios-icon.png" // Certifique-se de ter esta imagem em sua pasta public
          alt="Ícone do App iOS"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">TrashMap</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Página em construção...
        </p>
      </div>
    </div>
  );
}
