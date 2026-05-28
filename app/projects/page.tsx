import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="relative bg-bg-dark flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <Projects />
      </div>
    </main>
  );
}
