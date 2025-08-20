import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Header from "../components/Header";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div
      className="
        w-full min-h-screen overflow-hidden
        flex justify-start items-center flex-col p-16
        font-[montserrat]
        bg-gradient-to-t from-indigo-500 to-indigo-100
      "
    >
      <div className="w-[500px] space-y-8">
        <div className="relative flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon size={28} />
          </button>

          {/* 1:38:35 */}
          {/* Salvando tarefas no localStorage */}

          <Header>Detalhes da tarefa</Header>
        </div>

        <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
          <h2 className="text-black text-2xl font-bold text-center">{title}</h2>
          <p
            className="
              relative pl-4 text-wrap break-all
              before:content-[''] before:absolute before:left-0
              before:h-full before:w-1
              before:bg-indigo-500 before:rounded
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
