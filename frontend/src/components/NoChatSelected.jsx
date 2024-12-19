import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <section
      className="w-full flex flex-1 flex-col items-center justify-center
    p-16 bg-base-100/50"
    >
      <div className="max-w-md text-center space-y-6">
        {/* Icono */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="size-16 rounded-2xl bg-primary/10 flex
                items-center justify-center animate-bounce"
            >
              <MessageSquare />
            </div>
          </div>
        </div>

        {/* Texto Bienvenido */}
        <h2 className="text-2xl font-bold">Bienvenido a Warup!</h2>
        <p className="text-base-content/60">
          Selecciona una conversación desde la barra lateral para iniciar un
          chat
        </p>
      </div>
    </section>
  );
};

export default NoChatSelected;
