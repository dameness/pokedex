import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonCard() {
  return (
    <div
      className={`  
          h-full w-full 
          sm:px-16 py-4 px-12  
          relative flex flex-col justify-center items-center rounded-xl 
          bg-slate-200 dark:bg-neutral-600 outline outline-slate-200 dark:outline-neutral-600`}
    >
      <Skeleton className="rounded-lg px-7 w-2/3 h-6 mb-4 dark:bg-neutral-500" />

      <Skeleton className="rounded-lg  w-full px-10 h-3 mb-3 dark:bg-neutral-500" />

      <Skeleton className="rounded-lg mb-4 sm:min-w-32 sm:h-32 xs:min-w-28 xs:h-28 min-w-24 h-24 dark:bg-neutral-500" />

      <Skeleton className="rounded-lg py-2.5 px-8 dark:bg-neutral-500" />
    </div>
  );
}
