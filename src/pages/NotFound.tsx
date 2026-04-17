import { useSEO } from "@/hooks/use-seo";

const NotFound = () => {
  useSEO({
    title: "Page not found",
    description: "The page you’re looking for doesn’t exist.",
    path: "/404",
    robots: "noindex,follow",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
