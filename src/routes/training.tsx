import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/training")({
  component: TrainingLayout,
  head: () => ({
    links: [{ rel: "canonical", href: "/training" }],
  }),
});

function TrainingLayout() {
  return <Outlet />;
}
